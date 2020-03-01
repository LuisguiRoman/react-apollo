import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';

//constants
import { SERVER_URL } from '../../constants';

export const ListOfCategories = () => {
    //state
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch(`${SERVER_URL}/categories`)
            .then(res => res.json())
            .then(response => {
                //console.log('cats: ', response);
                setCategories(response);
            });
    }, []);

    return(
        <List>
            {categories.map(category =>(
                <ListItem key={`cat-${category.id}`}>
                    <Category {...category} />
                </ListItem>
            ))}
        </List>
    );
}