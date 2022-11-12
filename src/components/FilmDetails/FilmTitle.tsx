import { Heading } from "@chakra-ui/react";

interface Props {
  title: string;
};

export const FilmTitle = ({ title }: Props) => {
  return (
    <Heading
      as="h3"
      size="md"
    >
      {title}
    </Heading>
  )
};