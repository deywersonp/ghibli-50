import { Text } from "@chakra-ui/react";

interface Props {
  label: string;
  content: string;
};

export const FilmData = ({ label, content }: Props) => {
  return (
    <Text fontSize={["sm", "xs"]} textAlign="justify">
      <Text as="span" color="gray.200">
        {label}:
      </Text>
      {' '}
      {content}
    </Text>
  )
};