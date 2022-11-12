import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { FilmDetails } from '../../components/FilmDetails';

import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { data } from '../../mock/data';

export const Home = () => {
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
            </Heading>
          </Flex>

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

          <Pagination
            totalCountOfRegisters={50}
            currentPage={1}
            onPageChange={(number) => {}}
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