import React, { createContext, useState } from 'react';

export const Context = createContext({});

export const Provider = ({children}) =>{
    const [isAuth, setIsAuth] = useState(()=>{
        return sessionStorage.getItem('token');
    });

    const value = {
        isAuth,
        activateAuth: (token) =>{
            sessionStorage.setItem('token', token);
            setIsAuth(true);
        },
        removeAuth: () =>{
            sessionStorage.removeItem('token');
            setIsAuth(false);
        }
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export const Consumer = Context.Consumer;