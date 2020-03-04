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
    uri: `${SERVER_URL}/graphql`
});

ReactDOM.render(
    <Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>, 
    document.getElementById('root')
);
