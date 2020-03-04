import React, { Fragment } from 'react';
import { Router } from '@reach/router';

//context
import { Context } from './context';

//styles
import { GlobalStyle } from './styles/GlobalStyles';

import { NavBar } from './components/NavBar';
import { Logo } from './components/Logo';

//pages
import { Home } from './components/pages/Home';
import { Favs } from './components/pages/Favs';
import { User } from './components/pages/User';
import { NotRegisterUser } from './components/pages/NotRegisterUser';
import { Detail } from './components/pages/Detail';



export const App = () => (
    <Fragment>
        <GlobalStyle/>
        <Logo />
        
        <Router>
            <Home path='/' />
            <Home path='/pet/:categoryId' />
            <Detail path='/detail/:detalId' />
        </Router>

        <Context.Consumer>
            {
            ({ isAuth }) =>
                isAuth ? 
                <Router>
                    <Favs path='/favs' />
                    <User path='/user' />
                </Router> : 
                <Router>
                    <NotRegisterUser path='/favs' />
                    <NotRegisterUser path='/user' />
                </Router>
            }
        </Context.Consumer>

        <NavBar />

    </Fragment>
);