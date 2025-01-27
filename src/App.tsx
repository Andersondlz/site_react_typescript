
import { Provider } from './components/ui/provider'
import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Card } from './components/Cards';
import { Layout } from './components/Layout';
import { Estados } from './Estados';


function App() {
  return (  
    <Provider>
      <Layout>
        <Box minHeight="100vh" backgroundColor="#9413dc" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
          <Image src="../src/assets/img/DioBankT.png" alt="Imagem DIO Banck " width="180px" />
          <Box backgroundColor="#ffffff" borderRadius={8} padding={8} color={"#000000"} >
            <Card>
            </Card>
          </Box>
        </Box>
      </Layout>
      <Estados></Estados>
    </Provider>
    
  );
}

export default App
