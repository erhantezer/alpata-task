import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext)
};


export const AppProvider = ({children}) => {
    const [image, setImage] = useState();

    return (
        <AppContext.Provider value={{ image, setImage }}>
            {children}
        </AppContext.Provider>
        )
}