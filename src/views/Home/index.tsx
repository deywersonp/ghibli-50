import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FilmDetails } from '../../components/FilmDetails';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';

import { useFilms } from '../../hooks/useFilms';

export const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useFilms(page);

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
        >
          Atualizar Lista
        </Button>
      </Flex>
    </Box>
  )
};