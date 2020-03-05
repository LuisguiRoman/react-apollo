import React, { useContext } from 'react';

//context
import { Context } from '../../context';

import { SubmitButton } from '../SubmitButton';
 

export const User = () =>{
    const { removeAuth } = useContext(Context);

    return(
        <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    );
}