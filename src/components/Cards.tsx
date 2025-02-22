import { Box} from "@chakra-ui/react"

export const Card = ({children}: any) => {
    

    return (
        <Box backgroundColor={"#ffffff"} borderRadius="25px" padding={8} color={"#000000"} >
            {children}
        </Box>
    )
}