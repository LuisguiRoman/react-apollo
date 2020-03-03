import { gql } from'apollo-boost';

//query a al api de graph
export const getCard = gql`
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