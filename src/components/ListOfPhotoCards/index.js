import React from 'react';
import { useQuery } from'@apollo/react-hooks';

//query
import { GET_ALL_PHOTOS } from '../../queries/getPhotos';

//components
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = ({categoryId}) => {
    const { loading, data } = useQuery(GET_ALL_PHOTOS, {
        variables: { categoryId }
    });
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