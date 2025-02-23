import { createContext, useState } from "react";

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({} as IAppContext);

export const AppContexProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);

    const user = "Anderson";
    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AppContext.Provider>
    );
}
