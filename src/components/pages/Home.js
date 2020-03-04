import React, { Fragment } from 'react';

//components
import { ListOfCategories } from '../../components/ListOfCategories';
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards';

export const Home = ({categoryId}) => (
    <Fragment>
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
);