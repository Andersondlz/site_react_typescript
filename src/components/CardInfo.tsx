import { Box } from "@chakra-ui/react/box";
import { Text } from "@chakra-ui/react";

interface CardInfo {
    mainContent: string,
    content: string
}

const CardInfo = ({mainContent, content }: CardInfo) => {
    return (
        <Box backgroundColor={"#ffffff"} padding={10} borderRadius="25px"  color={"#000000"} minHeight='125px'>
            <Text fontSize="2xl" fontWeight="bold" >
                {mainContent}
            </Text>
            <Text fontSize="xl">
                {content}
            </Text>
            
        </Box>
    )
}   
export default CardInfo;    