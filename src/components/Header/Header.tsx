import './Header.css'
import { Provider } from '../ui/provider'
import { Button, Flex } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'
import { AppContext } from '../AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../../services/storage'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const navegate = useNavigate();
    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false);
        navegate("/")
    }
    return (
        <Provider>
            <Flex className='header' >
                <Avatar src="https://bit.ly/broken-link" colorPalette="greee" />
                Dio Bank -  Seu melhor banco digital

                {
                    isLoggedIn &&
                    <Button colorScheme="green"
                        onClick={() => logout()}>
                        Logout
                    </Button>
                }


            </Flex>
        </Provider>
    )
}