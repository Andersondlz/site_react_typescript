import { login } from "./login"

describe('login', ()=> {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'andersondlz2009@gmail.com'

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail} !`)
    })
})