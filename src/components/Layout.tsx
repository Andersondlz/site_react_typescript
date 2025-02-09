import { ReactNode } from "react";
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { Box } from "@chakra-ui/react";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
    
        <Box minHeight="100vh" backgroundColor="#0e3267">
        <Header />
            {children}
        <Footer />
        </Box>
    )
};