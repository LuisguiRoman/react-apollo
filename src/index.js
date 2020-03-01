import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { App } from './App';

//constants
import { SERVER_URL } from './constants';

//crear un provider con la api de graphql
const client = new ApolloClient({
    url: `${SERVER_URL}/graphql`
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);
