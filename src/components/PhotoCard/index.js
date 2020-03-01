import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';

import { Figure, Image, Button } from './styles';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({id, src = DEFAULT_IMAGE, likes = 0}) => {
    return(
        <article>
            <a href={`/detail/${id}`}>
                <Figure>
                    <Image src={src} alt="Imagen" />
                </Figure>
            </a>

            <Button type="button">
                <MdFavoriteBorder size="32" /> {likes} likes!
            </Button>
        </article>
    );
};