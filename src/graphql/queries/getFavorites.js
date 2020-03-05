import { gql } from 'apollo-boost';

//query a al api de graph
export const GET_FAVS = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`;