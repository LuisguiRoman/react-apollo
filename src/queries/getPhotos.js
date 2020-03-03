import { gql } from'apollo-boost';

//query a al api de graph
export const GET_ALL_PHOTOS = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;