
import SearchUserView from './views/SearchUser/SearchUserView';
import { ChakraProvider, Flex } from "@chakra-ui/react"
import '@fontsource/sarabun/300.css'


import theme from './theme/theme'


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex justify="center">
        <SearchUserView />
      </Flex>
    </ChakraProvider>
  );
}


export default App;
