import React from 'react';
import { PhotoCard } from '../PhotoCard';

//import { Figure, Image, Button } from './styles';


export const ListOfPhotoCards = () => {
    return(
        <ul>
            {[1,2,3,4,5,6].map(id => (
                <li key={`card-${id}`}>
                    <PhotoCard id={id} />
                </li>
            ))}
        </ul>
    );
};