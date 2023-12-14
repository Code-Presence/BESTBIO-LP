import React from 'react';
import '../index.css';
import logo from '../assets/logo.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FifthSec, FirstSec, FourthSec, SecondSec, ThirdSec } from './Home/index';

function Main(): JSX.Element {
    const [showPreloader, setShowPreloader] = React.useState(true);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({duration: 1000});

        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            document.body.style.overflow = 'scroll';
            setShowPreloader(false);
        }, 3500);


    }, []);

    return (
        <> 
            {showPreloader ? (
                <>
                    <section className='h-screen w-screen flex-col fixed z-[99999] bottom-0 top-0 left-0 right-0 overflow-hidden bg-[#1b1b1b] flex items-center justify-center gap-6 animate-fadeOut'
                    >
                        <div className=' overflow-hidden mb-4'>
                            <div data-aos={'fade-down'}>
                                <img loading="lazy"  src={logo} alt={'logo'} width={300}/>
                            </div>
                        </div>
                        <div className=' flex gap-4 items-center h-[2rem] overflow-hidden texts-container'>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={500}>Saúde,</span>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={1000}>Performance,</span>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={1500}>Longevidade</span>
                        </div>
                    </section>
                    <div className='w-screen h-screen bg-[#1b1b1b]'/>
                </>
            ) : (
                <>
                    <FirstSec />
                </>
            )}

            <SecondSec />

            <ThirdSec />

            <FourthSec />

            <FifthSec />
          
        </>
    );
}

export { Main };