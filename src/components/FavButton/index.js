import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

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