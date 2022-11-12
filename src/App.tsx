import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";

import { Home } from "./views/Home";

import { theme } from "./styles/theme";
import { queryClient } from "./services/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
