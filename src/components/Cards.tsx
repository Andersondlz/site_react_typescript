import { Box, Center, Input } from "@chakra-ui/react"
import { PasswordInput } from "./ui/password-input"
import DButton from "./DButton"
import { login } from "../services/login"
import { useState } from "react"

export const Card = () => {
    const [email, setEmail] = useState('')
   // const logar = () =>{
   //     alert(email)
    //}
    return (
        <Box backgroundColor={"#ffffff"} borderRadius="25px" padding={8} color={"#000000"} >
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <PasswordInput placeholder='senha'></PasswordInput>
            <Center>
                <DButton onClick={() => login(email)}></DButton>
            </Center>
        </Box>
    )
}