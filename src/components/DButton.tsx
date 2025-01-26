import { Button } from "@chakra-ui/react";

interface IDButton {
    onClick: () => void;
}

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button 
            backgroundColor="#9413dc"
            onClick={onClick}
            size="sm"
            width="100%"
            marginTop={5}
        >
            Entrar
        </Button>
    )
}

export default DButton