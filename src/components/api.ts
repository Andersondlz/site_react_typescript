const conta = {
    email: "andersondlz2009@gmail.com",
    senha: "123456",
    name: "Anderson",
    balance: 2000.00
}

export const api = new Promise((resolve) => setTimeout(resolve, 4000, conta))