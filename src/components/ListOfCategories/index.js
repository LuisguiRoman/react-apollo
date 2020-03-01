import React from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';

//data
import { categories } from '../../db.json';

export const ListOfCategories = () => {
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