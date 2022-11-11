import { Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Text
      color="transparent"
      bgImage="linear-gradient(90deg, rgba(250,109,241,1) 0%, rgba(225,213,93,1) 23%, rgba(67,231,173,1)80%)"
      bgClip="text"
      fontSize={"4xl"}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Ghibli
      <Text as="span" ml="1" color="blue.200">.</Text>
      50
    </Text>
  )
};