import React from 'react';
import PropTypes from 'prop-types';

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

//defifnir el tipo de datos que deben venir en el array
ListOfFavs.propTypes = {
    favs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
        })
    )
};