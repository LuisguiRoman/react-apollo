import React, { Fragment } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import { Figure, Image, Button, Article } from './styles';

//hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({id, src = DEFAULT_IMAGE, likes = 0}) => {
    //state
    const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
    const [show, element] = useNearScreen();

    //Toggle de likes
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return(
        <Article ref={element}>
            {show && 
            <Fragment>
                <a href={`/?detail=${id}`}>
                    <Figure>
                        <Image src={src} alt="Imagen" />
                    </Figure>
                </a>

                <Button type="button" onClick={()=> setLiked(!liked) }>
                    <Icon size="32" /> {likes} likes!
                </Button>
            </Fragment>
            }
        </Article>
    );
};