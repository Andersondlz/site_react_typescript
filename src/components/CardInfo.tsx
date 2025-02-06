import { Box } from "@chakra-ui/react/box";

interface CardInfo {
    text: string
}

const CardInfo = ({text}: CardInfo) => {
    return (
        <Box backgroundColor={"#ffffff"} padding={8} borderRadius="25px"  color={"#000000"} minHeight='125px' width={320}>
            {text}
        </Box>
    )
}   
export default CardInfo;    