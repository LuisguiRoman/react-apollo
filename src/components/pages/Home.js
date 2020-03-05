import React, { Fragment } from 'react';

import { Layout } from '../Layout';

//components
import { ListOfCategories } from '../../components/ListOfCategories';
import { ListOfPhotoCards } from '../../components/ListOfPhotoCards';

const HomePage = ({categoryId}) => (
    <Fragment>
        <Layout title="Petgram - Fotos de mascotas"
                meta="App de fotos de animales domesticos" />

        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
);

//evitar re renders innesesarios si las props
//del componente no cambian
//y mejorar la performance
export const Home = React.memo(HomePage);