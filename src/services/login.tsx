import { api } from "../components/api"

export const login =  async (email: string): Promise<void> => {
    const data: any = await api

    if(email !== data.email) {
        return alert("Email ou senha incorretos")
    }
    alert(`Bem vindo ${email}  !`)
}