import { Box, Center, Input } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import { Card } from '../Cards';
import { useContext, useState } from "react";
import { PasswordInput } from "../ui/password-input";
import DButton from "../DButton";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)
        if (!loggedIn) {
            alert('Email invalido')
            return
        }
        setIsLoggedIn(true)
        navigate('/conta/1')
    }
    return (
        <Box minHeight="100vh" backgroundColor="#9413dc" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={4}>
            <Image src="../src/assets/img/DioBankT.png" alt="Imagem DIO Banck " width="180px" />
            <Box backgroundColor="#ffffff" borderRadius={8} padding={8} color={"#000000"} >
                <Card>
                    {/* {userData === null || userData === undefined ?  */}
                    {/* <ProgressCircle.Root value={null} size="sm" strokeWidth="sm" colorScheme="teal">
            <ProgressCircle.Circle>
            <ProgressCircle.Track />
            <ProgressCircle.Range />
            </ProgressCircle.Circle>
            </ProgressCircle.Root> : 
            <ProgressCircle.Root value={100} size="sm" strokeWidth="sm" colorScheme="teal">
            <ProgressCircle.Circle>
            <ProgressCircle.Track />
            <ProgressCircle.Range />
            </ProgressCircle.Circle>
            </ProgressCircle.Root> */}

                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    {/* <p>{userData?.name}</p> */}
                    <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <PasswordInput placeholder='senha'></PasswordInput>
                    <Center>
                        <DButton
                            onClick={() => validateUser(email)}>
                        </DButton>
                    </Center>
                </Card>

            </Box>
        </Box>
    )
}

export default Home;