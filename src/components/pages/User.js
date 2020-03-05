import React, { useContext } from 'react';

//context
import { Context } from '../../context';

export const User = () =>{
    const { removeAuth } = useContext(Context);

    return(
        <button onClick={removeAuth}>Cerrar sesión</button>
    );
}