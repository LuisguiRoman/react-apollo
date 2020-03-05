import React from 'react';

import { Grid, Image, Link } from './styles';

export const ListOfFavs = ({favs}) => (
    <Grid>
        {favs.map((fav)=>(
            <Link key={`fav-${fav.id}`} to={`/detail/${fav.id}`}>
                <Image src={fav.src} alt="Imagen" />
            </Link>
        ))}
    </Grid>
);