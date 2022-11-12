import { useState } from 'react';
import { useMutation } from 'react-query';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FilmDetails } from '../../components/FilmDetails';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

import { useFilms } from '../../hooks/useFilms';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { GhibliFilmsResponse } from '../../interfaces';

export const Home = () => {
  const toast = useToast();

  const [page, setPage] = useState(1);
  const [isUpdatingFilmsList, setIsUpdatingFilmsList] = useState(false);
  const { data, isLoading, isFetching, error } = useFilms(page);

  const showSuccessToast = (addedFilmsCount: number) => toast({
    title: 'Lista de filmes atualizada!',
    description: `Foram adicionados ${addedFilmsCount} novo(s) filme(s) na lista!`,
    position: 'top-right',
    status: 'success',
    duration: 7000,
    isClosable: true,
  });

  const updateFilmsList = useMutation(async () => {
    const { data } = await api.post<GhibliFilmsResponse>('/films/ghibli');

    return data;
  }, {
    onSuccess: (data) => {
      const addedFilmsCount = data.added_films.count;

      showSuccessToast(addedFilmsCount);
      setPage(1);
      queryClient.invalidateQueries('films');
    }
  });

  const handleUpdateFilmsList = async () => {
    try {
      setIsUpdatingFilmsList(true);

      await updateFilmsList.mutateAsync();
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdatingFilmsList(false);
    }
  };

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        flexDirection="column"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            <Heading
              size="lg"
              fontWeight="normal"
            >
              Lista de Filmes
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter listagem de filmes</Text>
            </Flex>
          ) : (
            <SimpleGrid
              flex="1"
              gap="10"
              minChildWidth={["100%", "100%", "500px"]}
              alignItems="flex-start"
              mb="70px"
            >

              {data?.films?.map(film => (
                <FilmDetails
                  key={film.id}
                  data={film}
                />
              ))}
            </SimpleGrid>
          )}

          <Pagination
            totalCountOfRegisters={data?.totalCount || 0}
            currentPage={page}
            onPageChange={setPage}
          />
        </Box>

        <Button
          mt={8}
          size={["sm", "md"]}
          fontSize={["sm", "md"]}
          colorScheme="purple"
          alignSelf="flex-end"
          isLoading={isUpdatingFilmsList}
          onClick={handleUpdateFilmsList}
        >
          Atualizar Lista
        </Button>
      </Flex>
    </Box>
  )
};