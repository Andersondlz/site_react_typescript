
import { Provider } from './components/ui/provider'
import { Box, Button, Center, Input } from "@chakra-ui/react"


function App() {
  return (  
    <Provider>
      <Box minHeight="100vh" backgroundColor="#9413dc" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
        <Box backgroundColor="#ffffff" borderRadius={8} padding={8} color={"#000000"} >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder='email'/>
          <Input placeholder='password'/>
          <Center>
            <Button variant="subtle" width={"100%"}>Entrar</Button>
          </Center>
        </Box>
      </Box>
    </Provider>
  );
}

export default App
