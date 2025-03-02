import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({} as IAppContext);

export const AppContexProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);

    const storege = getAllLocalStorage();

    useEffect(() => {
        if(storege){
            const { login } = JSON.parse(storege);
            setIsLoggedIn(login)    
        }
    }, [])


    const user = "Anderson";
    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AppContext.Provider>
    );
}
