import React, { useEffect, useState, useRef, Fragment } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import { Figure, Image, Button, Article } from './styles';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({id, src = DEFAULT_IMAGE, likes = 0}) => {
    //state
    const [show, setShow] = useState(false);
    const [liked, setLiked] = useState(()=>{
        //setear un estado inicial con localstorage
        try {
            const like = localStorage.getItem(`like-${id}`);
            return like;
        } catch (error) {
            return false;
        }
    });

    //ref
    const element = useRef(null);

    useEffect(()=>{
        //polifill de para cuando un navegador lo requiera
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined' ? 
            window.IntersectionObserver : import('intersection-observer')
        ).then(()=>{
            const observer = new IntersectionObserver(entries=>{
                const { isIntersecting } = entries[0];
                if(isIntersecting){
                    setShow(true);
                    observer.disconnect();
                }
            });
            observer.observe(element.current);
        })
    }, [element]);

    //Toggle de likes
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    const setLocalStorage = value =>{
        try {
            localStorage.setItem(`like-${id}`, value);
            setLiked(true);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <Article ref={element}>
            {show && 
            <Fragment>
                <a href={`/detail/${id}`}>
                    <Figure>
                        <Image src={src} alt="Imagen" />
                    </Figure>
                </a>

                <Button type="button" onClick={()=> setLocalStorage(!liked) }>
                    <Icon size="32" /> {likes} likes!
                </Button>
            </Fragment>
            }
        </Article>
    );
};