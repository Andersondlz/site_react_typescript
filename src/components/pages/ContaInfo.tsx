import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const ContaInfo = () => {
    return (
        <>
            <Text fontSize={"4xl"}>
                ContaInfo
            </Text>
            <Link to="/conta/1">  
                <Text fontSize={"2xl"}>
                    Voltar
                </Text>
            </Link>
        </>

    )
}

export default ContaInfo