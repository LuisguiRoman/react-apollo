import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Button } from './styles';


export const FavButton = ({liked, likes, onClick}) => {
    //Toggle de likes
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return(
        <Button type="button" onClick={onClick}>
            <Icon size="32" /> {likes} likes!
        </Button>
    );
};

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number,
    onClick: PropTypes.func
};