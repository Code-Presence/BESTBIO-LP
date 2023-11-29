import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/home';
import { CustomNavbar } from '../components/Navbar';
import { CustomNavbar as Nosticky } from '../components/Navbar_nostick';
import { Presential } from '../pages/presential';

import { Footer } from '../components/Footer';
import { Online } from '../pages/online';
import { PlansWrapper } from '../components/PlansWrapper';

function AppRoutes(): JSX.Element {
    return (
        <>
           
            <Routes>
                <Route path='/' element={ 
                    <>
                        <CustomNavbar/>
                        <Main /> 
                    </>
                }/>
                <Route path='/presencial' element={ 
                    <>
                        <Nosticky />
                        <PlansWrapper>
                            <Presential /> 
                        </PlansWrapper>
                    </>
                }/>
                <Route path='/online' element={
                    <>
                        <Nosticky />
                        <PlansWrapper>
                            <Online />
                        </PlansWrapper>
                    </>
                     
                }/>
            </Routes>
            <Footer />
        </>
    );
}
export { AppRoutes };