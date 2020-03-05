import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({title, meta}) => (
    <Fragment>
        <Helmet>
            {title && <title>{title} - Petgram</title>}
            {meta && <meta name="description" content={meta} />} 
        </Helmet>

        <div>
            {title && <h1>{title}</h1>}
        </div>
    </Fragment>
);