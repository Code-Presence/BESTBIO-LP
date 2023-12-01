// import { Typography } from '@material-tailwind/react';
import { preLoaderAnim  } from './Animations/animation';
import logo from '../assets/logo.png';
import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

function PreLoader(): JSX.Element {
    React.useEffect(() => {
        preLoaderAnim();
        Aos.init({duration: 1000});
    },[]);

    return (
        <div className='h-screen w-screen flex-col fixed z-[99999] bottom-0 top-0 left-0 right-0 overflow-hidden bg-[#1b1b1b] flex items-center justify-center preloader gap-6'>
            
            <div className='h-[6rem] overflow-hidden'>
                <div data-aos={'fade-down'}>
                    <img src={logo} alt={'logo'} width={300}/>
                </div>
            </div>
            <div className=' flex gap-4 items-center h-[2rem] overflow-hidden texts-container'>
                <span className='text-2xl text-white font-bold'>Saúde,</span>
                <span className='text-2xl text-white font-bold'>Performance,</span>
                <span className='text-2xl text-white font-bold'>Estido de vida</span>
            </div>
        </div>
    );
}
export { PreLoader };