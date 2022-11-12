import { Box, Flex, Image } from "@chakra-ui/react";
import { Film } from "../../interfaces";

import { FilmData } from "./FilmData";
import { FilmTitle } from "./FilmTitle";

interface Props {
  data: Film;
};

export const FilmDetails = ({ data }: Props) => {
  return (
    <Flex
      gap="4"
      maxWidth="596px"
      flexDirection={["column", "column", "row"]}
    >
      <Image
        alignSelf={["center"]}
        w="200px"
        h="300px"
        src={data.banner}
      />

      <Flex flexDirection="column" gap="2">
        <FilmTitle title={data.title} />

        <FilmData label="Descrição" content={data.description} />

        <Box>
          <FilmData label="Direção" content={data.director} />
          <FilmData label="Produção" content={data.producer} />
        </Box>
      </Flex>
    </Flex>
  )
};