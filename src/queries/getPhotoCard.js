import { gql } from'apollo-boost';

//query a al api de graph
export const GET_SINGLE_PHOTO = gql`
    query getCard($id: ID!) {
        photo(id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;