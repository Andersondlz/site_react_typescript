
import { Center } from "@chakra-ui/react/center"
import { SimpleGrid } from "@chakra-ui/react/grid"
import CardInfo from "../CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { ProgressCircle } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from '../AppContext'


interface userData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | userData>()

    const context = useContext(AppContext);
    console.log('retorno do header', context)

    useEffect(() => {
        const getData = async () => {
            const data: unknown | userData = await api
            setUserData(data as userData)
        }
        getData()
    }, [])

    const actualDate = new Date();

    const { id } = useParams()
    const navigate = useNavigate()

    if (userData && id !== userData.id) {
        navigate("/")
    }

    return (
        <Center>
            <SimpleGrid columns={2} gap={7} paddingTop={16} padding={34}>
                {
                    userData === null || userData === undefined ? (
                        <Center>
                            <ProgressCircle.Root value={null} size="xl" strokeWidth="sm" colorScheme="teal">
                                <ProgressCircle.Circle>
                                    <ProgressCircle.Track />
                                    <ProgressCircle.Range />
                                </ProgressCircle.Circle>
                            </ProgressCircle.Root>
                        </Center>
                    ) : (
                        <>
                            <CardInfo mainContent={`Bem vindo (a): ${userData?.name}`}
                                content={`${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}  ${actualDate.getHours()}:${actualDate.getMinutes()}`} />
                            <CardInfo mainContent={`Seu Saldo:`} content={`R$ ${userData?.balance} `} />
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta