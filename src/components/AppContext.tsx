import { createContext } from "react";

interface IAppContext {
    user: string
}

export const AppContext = createContext({} as IAppContext);

export const AppContexProvider = ({ children }: any) => {
    const user = "Anderson";
    return (
        <AppContext.Provider value={{ user }}>
            {children}
        </AppContext.Provider>
    );
}
