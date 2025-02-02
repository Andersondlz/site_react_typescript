import { login } from "./login"

describe('login', ()=> {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login('andersondlz2009@gmail.com')
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo andersondlz2009@gmail.com  !')
    })
})