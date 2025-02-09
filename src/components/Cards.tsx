import { Box, Center, Input, ProgressCircle } from "@chakra-ui/react"
import { PasswordInput } from "./ui/password-input"
import DButton from "./DButton"
import { login } from "../services/login"
import { useState} from "react"




export const Card = () => {
    const [email, setEmail] = useState<string>('')

    return (
        <Box backgroundColor={"#ffffff"} borderRadius="25px" padding={8} color={"#000000"} >
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
            <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <PasswordInput placeholder='senha'></PasswordInput>
            <Center>
                <DButton onClick={() => login(email)}></DButton>
            </Center>
        </Box>
    )
}