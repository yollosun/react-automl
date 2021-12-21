import React from "react";
import { useState } from "react";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [files, setFiles] = useState([]);
    return (
        <Context.Provider value={{ fileList: { files, setFiles } }}>
            {children}
        </Context.Provider>
    );
};

