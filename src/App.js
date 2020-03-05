import React, { Fragment, useContext } from 'react';
import { Router, Redirect } from '@reach/router';

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
import { NotFound } from './components/pages/NotFound';



export const App = () => {
    const { isAuth } = useContext(Context);

    return(
        <Fragment>
            <GlobalStyle/>
            <Logo />
            
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detalId' />
                {!isAuth && <NotRegisterUser path='/login' />}
                {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
                {!isAuth && <Redirect noThrow from='/user' to='/login' />}
                {isAuth && <Redirect noThrow from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />

            </Router>

            <NavBar />

        </Fragment>
    );
};