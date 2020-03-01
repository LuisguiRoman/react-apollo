import React, { useState, useEffect, Fragment } from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';

//constants
import { SERVER_URL } from '../../constants';

export const ListOfCategories = () => {
    //state
    const [categories, setCategories] = useState([]);
    const [showFixed, setShowFixed] = useState(false);

    useEffect(()=>{
        fetch(`${SERVER_URL}/categories`)
            .then(res => res.json())
            .then(response => {
                //console.log('cats: ', response);
                setCategories(response);
            });
    }, []);

    useEffect(()=>{
        const onScroll = event =>{
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {categories.map(category =>(
                <ListItem key={`cat-${category.id}`}>
                    <Category {...category} />
                </ListItem>
            ))}
        </List>
    );

    return(
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );
}