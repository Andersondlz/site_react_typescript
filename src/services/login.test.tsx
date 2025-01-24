import { login } from "./login"

describe('login', ()=> {

    const mockAlert = jest.fn()
    windows.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})