import React from 'react';
import { useQuery } from'@apollo/react-hooks'

import { ListOfFavs } from '../ListOfFavs';

//query
import { GET_FAVS } from '../../graphql/queries/getFavorites';

export const Favs = () => {
    const { loading, data } = useQuery(GET_FAVS, {
        //eliminar la cache para agregar nuevos favoritos
        fetchPolicy: 'cache-and-network'
      });

    if(loading) return null;//si esta haciendo la peticion

    return(
        <ListOfFavs favs={data.favs} />
    );
}