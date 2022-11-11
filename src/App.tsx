import { ChakraProvider } from "@chakra-ui/react";

import { Home } from "./views/Home";

import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
