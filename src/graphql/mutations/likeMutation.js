import { gql } from 'apollo-boost';

//query a al api de graph
export const LIKE_PHOTO = gql`
    mutation likeAnonymousPhoto($input: LikePhoto!) {
        likeAnonymousPhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`;