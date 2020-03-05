import React, { Fragment } from 'react';

import { Layout } from '../Layout';

//components
import { ListOfCategories } from '../../components/ListOfCategories';
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards';

export const Home = ({categoryId}) => (
    <Fragment>
        <Layout title="Petgram - Fotos de mascotas"
                meta="App de fotos de animales domesticos" />

        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
);