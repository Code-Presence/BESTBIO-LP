import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../pages/home';
import { CustomNavbar } from '../components/Navbar';
import { CustomNavbar as Nosticky } from '../components/Navbar_nostick';
import { Presential } from '../pages/presential';

import { Footer } from '../components/Footer';
import { Online } from '../pages/online';
import { PlansWrapper } from '../components/PlansWrapper';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Pro } from '../pages/pro';

function AppRoutes(): JSX.Element {

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
            <Suspense fallback={
                <div className='w-screen h-screen bg-[#1b1b1b]'>
                    <h1>Carregando...</h1>
                </div>
            }> 
                <Routes>
                    <Route path='/' element={ 
                        <>
                            <CustomNavbar />
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
                    <Route path='/pro' element={
                        <>
                            <Pro />
                        </>
                     
                    }/>
                </Routes>
                <Footer />
            </Suspense>
        </>
    );
}
export { AppRoutes };