import { Box, Center, Input } from "@chakra-ui/react"
import { PasswordInput } from "./ui/password-input"
import DButton from "./DButton"
import { login } from "../services/login"

export const Card = () => {
    return (
        <Box backgroundColor={"#ffffff"} borderRadius="25px" padding={8} color={"#000000"} >
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder='email'/>
            <PasswordInput placeholder='senha'></PasswordInput>
            <Center>
                <DButton onClick={login}></DButton>
            </Center>
        </Box>
    )
}