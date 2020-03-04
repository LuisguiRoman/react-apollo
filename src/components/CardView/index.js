import React from 'react';
import { useQuery } from'@apollo/react-hooks'

import { PhotoCard } from '../PhotoCard';

//query
import { GET_SINGLE_PHOTO } from '../../graphql/queries/getPhotoCard';

export const CardView = ({ id }) => {
    const { loading, data } = useQuery(GET_SINGLE_PHOTO, {
        variables: { id }
    });

    if(loading) return null;//si esta haciendo la peticion

    return(
        <PhotoCard {...data.photo} />
    );
}