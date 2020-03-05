import { gql } from 'apollo-boost';

//query a al api de graph
export const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
        likePhoto(input: $input) {
            id,
            liked,
            likes
        }
    }
`;