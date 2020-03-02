import React from 'react';
import { useQuery } from'@apollo/react-hooks'
import { gql } from'apollo-boost';

import { PhotoCard } from '../PhotoCard';

//query a al api de graph
const getPhotos = gql`
    query getPhotos {
        photos {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const ListOfPhotoCards = () => {
    const { loading, data } = useQuery(getPhotos);
    //console.log('photos: ', data);
    
    if(loading) return null;//si esta haciendo la peticion

    return(
        <ul>
            {data.photos.map(photo => (
                <li key={`card-${photo.id}`}>
                    <PhotoCard {...photo}/>
                </li>
            ))}
        </ul>
    );
};