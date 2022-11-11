import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';

import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
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
        </Box>
      </Flex>
    </Box>
  )
};