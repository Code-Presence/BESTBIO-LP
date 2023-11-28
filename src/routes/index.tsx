import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/home';
import { CustomNavbar } from '../components/Navbar';
import { Presential } from '../pages/presential';

import Aos from 'aos';
import { Footer } from '../components/Footer';
import { Online } from '../pages/online';
import { PlansWrapper } from '../components/PlansWrapper';

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
                <Route path='/presencial' element={ 
                    <PlansWrapper>
                        <Presential /> 
                    </PlansWrapper>
                }/>
                <Route path='/online' element={
                    <PlansWrapper>
                        <Online />
                    </PlansWrapper>
                     
                }/>
            </Routes>
            <Footer />
        </>
    );
}
export { AppRoutes };