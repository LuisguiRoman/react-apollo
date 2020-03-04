import React, { Fragment } from 'react';
import { useMutation } from '@apollo/react-hooks';

//context
import { Consumer } from '../../context';

//components
import { UserForm } from '../UserForm';

import { REGISTER } from '../../graphql/mutations/registerMutation';
import { LOGIN } from '../../graphql/mutations/loginMutation';

export const NotRegisterUser = () => {
    const [signup, {error, loading}] = useMutation(REGISTER);
    const [login, loginResponse] = useMutation(LOGIN);

    const handleRegister = (activateAuth, {email, password}) =>{        
        signup({
            variables: {input: {email, password}}
            //ejecutar la autenticacion del usuario
        }).then(activateAuth);
    }

    const handleLogin = (activateAuth, {email, password}) =>{        
        login({
            variables: {input: {email, password}}
        }).then(({data: {login}}) =>{
            activateAuth(login);
        });
    }

    return(
        <Consumer>
            {({activateAuth})=>{
                const errorMsm = error && "Ha ocurrido un error";

                return(
                    <Fragment>
                        <UserForm title="Registro" error={errorMsm} disabled={loading}
                            onSubmit={(data)=> handleRegister(activateAuth, data)} />
                        <UserForm title="Login" error={errorMsm} disabled={loginResponse.loading}
                            onSubmit={(data) => handleLogin(activateAuth, data)} />
                    </Fragment>
                );
            }}
        </Consumer>
    );
};