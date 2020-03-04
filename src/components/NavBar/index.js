import React from 'react';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

//styles
import { Nav, Link } from './styles';


export const NavBar = () =>{
    const SIZE = '32px';
    
    return (
        <Nav>
            <Link to="/"><MdHome size={SIZE} /></Link>
            <Link to="/favs"><MdFavoriteBorder size={SIZE} /></Link>
            <Link to="/user"><MdPersonOutline size={SIZE} /></Link>
        </Nav>
    );
}