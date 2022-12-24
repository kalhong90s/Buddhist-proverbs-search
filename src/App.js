
import SearchUserView from './views/SearchUser/SearchUserView';
import { ChakraProvider, Flex } from "@chakra-ui/react"
import '@fontsource/sarabun/300.css'
import { ColorModeScript } from '@chakra-ui/react'


import theme from './theme/theme'


function App() {
  return (
    <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <Flex justify="center">
        <SearchUserView />
      </Flex>
    </ChakraProvider>
    </>
  );
}


export default App;
