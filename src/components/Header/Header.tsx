import './Header.css'
import { Provider } from '../ui/provider'
import { Button, HStack, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { Avatar } from '../ui/avatar'
export const Header = () => {
    return (
        <Provider>
            <div className='header'>
                <Avatar src="https://bit.ly/broken-link" colorPalette="greee" />
                Dio Bank -  Seu melhor banco digital
                <div>
                    Login / Logout
                </div>
            </div>
            <HStack gap="1">
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button variant="outline" size="sm" paddingLeft={20}>
                            Arquivo
                        </Button>
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem value="new-txt">Sistema</MenuItem>
                        <MenuItem value="new-file">Ajuda...</MenuItem>
                    </MenuContent>
                </MenuRoot>
            </HStack>
        </Provider>
    )
}