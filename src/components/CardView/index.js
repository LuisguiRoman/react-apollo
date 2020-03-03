import React from 'react';
import { useQuery } from'@apollo/react-hooks'

import { PhotoCard } from '../PhotoCard';

//query
import { getCard } from '../../queries/getPhotoCard';

export const CardView = ({ id }) => {
    const { loading, data } = useQuery(getCard, {
        variables: { id }
    });

    if(loading) return null;//si esta haciendo la peticion

    return(
        <PhotoCard {...data.photo} />
    );
}