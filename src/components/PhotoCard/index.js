import React, { Fragment } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from '@reach/router';

import { Figure, Image, Article } from './styles';

import { FavButton } from '../FavButton';

//hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

//mutation
import { LIKE_PHOTO } from '../../graphql/mutations/likeMutation';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({id, src = DEFAULT_IMAGE, likes = 0}) => {
    //state
    const [liked, setLiked] = useLocalStorage(`like-${id}`, false);
    const [show, element] = useNearScreen();

    const [likePhoto] = useMutation(LIKE_PHOTO);

    const handleFavClick = () => {
        //si es true ?
        !liked && likePhoto({
            variables: { input: { id } }
        });
        setLiked(!liked);
    };

    return(
        <Article ref={element}>
            {show && 
            <Fragment>
                <Link to={`/detail/${id}`}>
                    <Figure>
                        <Image src={src} alt="Imagen" />
                    </Figure>
                </Link>

                <FavButton 
                    likes={likes} liked={liked} 
                    onClick={handleFavClick} />
                    
            </Fragment>
            }
        </Article>
    );
};