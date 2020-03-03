import React, { Fragment } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { CardView } from './components/CardView';


export const App = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const detalId = urlParams.get('detail');

    return(
        <Fragment>
            <GlobalStyle/>
            <Logo />
            {
                detalId ? <CardView id={detalId} /> :
                <Fragment>
                    <ListOfCategories />
                    <ListOfPhotoCards categoryId={1} />
                </Fragment>
            }
        </Fragment>
    );
};