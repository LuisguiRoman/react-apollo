import { gql } from 'apollo-boost';

//query a al api de graph
export const REGISTER = gql`
    mutation signup($input: UserCredentials!) {
        signup(input: $input)
    }
`;