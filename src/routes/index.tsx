import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/home';
import { CustomNavbar } from '../components/Navbar';
import { Presential } from '../pages/presential';

import Aos from 'aos';

function AppRoutes(): JSX.Element {
    Aos.init({
        duration: 1800, 
        offset: 0,
    });
    return (
        <>
            <CustomNavbar/>
            <Routes>
                <Route path='/' element={ <Main /> }/>
                <Route path='/presencial' element={ <Presential /> }/>
            </Routes>
        </>
    );
}
export { AppRoutes };