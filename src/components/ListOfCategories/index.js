import React from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';

export const ListOfCategories = () => {
    return(
        <List>
           {[1,2,3,4].map((category, index) =>(
                <ListItem key={`cat-${index}`}>
                    <Category />
                </ListItem>
           ))}
        </List>
    );
}