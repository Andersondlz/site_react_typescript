const conta = {
    email: "andersondlz2009@gmail.com",
    senha: "123456",
    name: "Anderson da Luz",
    balance: 4890.00,
    id: "1"
}

export const api = new Promise((resolve) => setTimeout(resolve, 4000, conta))