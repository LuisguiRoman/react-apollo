import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

//context
import { Provider } from './context';

import { App } from './App';

//constants
import { SERVER_URL } from './constants';

//crear un provider con la api de graphql
const client = new ApolloClient({
    uri: `${SERVER_URL}/graphql`,
    request: operation => {
        const token = sessionStorage.getItem('token');
        const authorization  = token ? `Bearer ${token}` : '';
        operation.setContext({
            headers: { authorization }
        });
    },
    onError: error => {
        const { networkError } = error;
        //si el token no es valido
        if(networkError && networkError.result.code === 'invalid_token'){
            sessionStorage.removeItem('token');
            window.location.href = '/';
        }
    }
});

ReactDOM.render(
    <Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>, 
    document.getElementById('root')
);
