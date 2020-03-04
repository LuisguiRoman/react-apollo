import React, { useState, useEffect, Fragment } from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';

//constants
import { SERVER_URL } from '../../constants';

const useCategoryData = () =>{
    //state
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        setLoading(true);

        fetch(`${SERVER_URL}/categories`)
            .then(res => res.json())
            .then(response => {
                setLoading(false);
                setCategories(response);
            });
    }, []);

    return { categories, loading };
}

export const ListOfCategories = () => {
    //state
    const { categories, loading } = useCategoryData();
    const [showFixed, setShowFixed] = useState(false);

    useEffect(()=>{
        const onScroll = event =>{
            const newShowFixed = window.scrollY > 200;
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll', onScroll);

        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed]);

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                loading ? 
                <ListItem key={`cat-0`}>
                    <Category />
                </ListItem> : 
                categories.map(category =>(
                    <ListItem key={`cat-${category.id}`}>
                        <Category {...category} path={`/pet/${category.id}`} />
                    </ListItem>
                ))
            }
        </List>
    );

    return(
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    );
}