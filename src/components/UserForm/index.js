import React from 'react';

import { useInputValue } from '../../hooks/useInputValue';

import { Form, Input, Button, Title, Error } from './styles';

export const UserForm = ({onSubmit, title, error, disabled}) => {
    const email    = useInputValue('');
    const password = useInputValue('');

    const handleSubmit = event =>{
        event.preventDefault();
        if(email.value && password.value){
            onSubmit({
                email: email.value, 
                password: password.value
            });
        }
    }

    return(
        <Form onSubmit={event => handleSubmit(event)}>
            <Title>{title}</Title>

            <Input placeholder="Email" type="email" {...email} disabled={disabled} />
            <Input placeholder="Password" type="password" {...password} disabled={disabled} />
            <Button disabled={disabled}>{title} {disabled ? '...' : ''}</Button>

            {error && <Error>{error}</Error>}
        </Form>
    );
}