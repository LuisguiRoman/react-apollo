import React from 'react';
import { useQuery } from'@apollo/react-hooks';

//query
import { getPhotos } from '../../queries/getPhotos';

//components
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = ({categoryId}) => {
    const { loading, data } = useQuery(getPhotos, {
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