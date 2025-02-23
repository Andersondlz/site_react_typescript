
import { login } from "./login"



describe('login', ()=> {

    const mockEmail = 'andersondlz2009@gmail.com'

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir a mensagem de boas vindas se o email é valido', async () => {
        login(mockEmail)
        const response = await login(mockEmail)
        expect(response).toBeFalsy()
    })
})