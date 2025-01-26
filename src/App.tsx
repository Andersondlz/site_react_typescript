
import { Provider } from './components/ui/provider'
import { Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from './services/login';
import { Header } from './components/Header/Header';
import { PasswordInput } from './components/ui/password-input';
import { Image } from "@chakra-ui/react"
import { Card } from './components/Cards';

function App() {
  return (  
    <Provider>
      <Header></Header>
      <Box minHeight="100vh" backgroundColor="#9413dc" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
        <Image src="../src/assets/img/DioBankT.png" alt="Imagem DIO Banck " width="180px" />
        <Box backgroundColor="#ffffff" borderRadius={8} padding={8} color={"#000000"} >
          <Card>

          </Card>
        </Box>
      </Box>
    </Provider>
  );
}

export default App
