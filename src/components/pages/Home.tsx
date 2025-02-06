import { Box } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Card } from '../Cards';

const Home = () => {
    return (
        <Box minHeight="100vh" backgroundColor="#9413dc" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
            <Image src="../src/assets/img/DioBankT.png" alt="Imagem DIO Banck " width="180px" />
        <Box backgroundColor="#ffffff" borderRadius={8} padding={8} color={"#000000"} >
        <Card />
        
        </Box>
        </Box>
    )
}

export default Home;