
import { Center } from "@chakra-ui/react/center"
import { SimpleGrid } from "@chakra-ui/react/grid"
import CardInfo from "../Cardinfo"
import { useEffect, useState } from "react"
import { api } from "../api"


interface userData {
    email: string
    password: string
    name: string
    balance: number
}

const Conta = () => {
    const [userData, setUserData] = useState<null | userData>()

    useEffect(() => {
        const getData = async () => {
            const data: unknown | userData = await api
            setUserData(data)
        }
        getData()
    }, [])

    

    console.log(userData)
    return (
        <Center>
            <SimpleGrid columns={2} gap={4} paddingTop={16}>
                <CardInfo text="Informações do acesso" />
                <CardInfo text="Informações da conta" />
            </SimpleGrid>
        </Center>
    )
}

export default Conta