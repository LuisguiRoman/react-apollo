import { gql } from 'apollo-boost';

//query a al api de graph
export const LOGIN = gql`
    mutation login($input: UserCredentials!) {
        login(input: $input)
    }
`;