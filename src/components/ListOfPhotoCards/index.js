import React from 'react';
import { PhotoCard } from '../PhotoCard';

//import { Figure, Image, Button } from './styles';


export const ListOfPhotoCards = () => {
    return(
        <ul>
            {[1,2,3,4].map(id => (
                <li key={`card-${id}`}>
                    <PhotoCard />
                </li>
            ))}
        </ul>
    );
};