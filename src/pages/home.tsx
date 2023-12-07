import React from 'react';
import { Typography } from '@material-tailwind/react';
import '../index.css';

import photo5 from '../assets/photos/photo-5.webp';
import logo from '../assets/logo.png';
import homiLindo from '../assets/photos/homilindo.webp';
import {  CarouselCustomArrows } from '../components/CardCarousel';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FirstSec, SecondSec, ThirdSec } from './Home/index';

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
                    <div className='h-screen w-screen flex-col fixed z-[99999] bottom-0 top-0 left-0 right-0 overflow-hidden bg-[#1b1b1b] flex items-center justify-center gap-6 animate-fadeOut'
                    >
                        <div className=' overflow-hidden mb-4'>
                            <div data-aos={'fade-down'}>
                                <img src={logo} alt={'logo'} width={300}/>
                            </div>
                        </div>
                        <div className=' flex gap-4 items-center h-[2rem] overflow-hidden texts-container'>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={500}>Saúde,</span>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={1000}>Performance,</span>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={1500}>Estido de vida</span>
                        </div>
                    </div>
                    <div className='w-screen h-screen bg-[#1b1b1b]'/>
                </>
            ) : (
                <>
                    <FirstSec />
                </>
            )}

            <SecondSec />

            <ThirdSec />

            <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${photo5})` }}>
                <div className="h-full w-[100%] bg-[#ffffff]/95 backdrop-blur-[4px] lg:px-40 lg:py-24 py-12 px-6 overflow-hidden">
                    <div className='w-full flex flex-col items-center justify-center'>
                        <Typography variant="lead" className="text-blue-gray-800" style={{ fontWeight: '600'}}>NOSSOS CLIENTES</Typography>
                        <Typography variant="h1"  className="text-4xl text-gray-900">Depoimentos</Typography>
                        <Typography variant="lead" className='mt-6 lg:text-center text-justify text-blue-gray-800'>
                        São milhares de pacientes atendidos no Brasil e em diversos países seja para <br/> emagrecimento, hipertrofia, performance física, saúde e longevidade. 
                        </Typography>
                        <hr className='border-[#7ED956] w-[40%] mt-5'/>
                    </div>
                    <div className='w-full mt-6' id='custom-arrows' data-aos={'fade-up'}>
                        <CarouselCustomArrows />
                    </div>


                </div>
            </div>
            <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${photo5})` }}>
                <div className="h-full w-[100%] bg-[#1b1b1b]/95 backdrop-blur-[4px] lg:px-40 lg:py-24 py-12 grid grid-cols-1 lg:grid-cols-2 p-6 sm:gap-8">
                    <div className='pr-4' data-aos={'fade-right'}>
                        <Typography variant='h1' color="white" className='mt-6'>Quem Somos</Typography>

                        <Typography variant='lead' color='white'>
                        Somos uma empresa {' '}
                            <strong className='bg-[#7ED956] rounded-sm px-1 text-gray-900'>
                            especializada em Emagrecimento, Nutrição Clínica e Esportiva, Fisiologia do Exercício e Performance Física, 
                            </strong>                        
                            {' '}
                        que atua por meio de serviços de consultoria presencial e online para pacientes que buscam emagrecimento, 
                        saúde e longevidade assim como para atletas recreativos e profissionais.
                            <br />
                            <br />
                        Nosso fundador, {''}
                            <strong className='bg-[#7ED956] rounded-sm px-1 text-gray-900'>
                            Prof. Chikão Freitas é um dos maiores especialistas da área e atua no mercado há mais de 15 anos. 
                            </strong> 
                            {' '}
                        Além disso, por ter sido atleta durante anos, sabe na prática dos desafios para {''}
                            <strong className='bg-[#7ED956] rounded-sm px-1 text-gray-900'>
                            alcançar performance 
                            </strong>{' '}
                        e subir no podium.
                            <br />
                            <br />
                        Carrega no seu currículo o acompanhamento nutricional e preparação física de {''}
                            <strong className='bg-[#7ED956] rounded-sm px-1 text-gray-900'>
                            grandes atletas 
                            </strong> {''}
                        de várias modalidades esportivas, 
                        com destaque para o MMA. Além disso, 
                        
                        já atendeu milhares de pacientes que buscam o emagrecimento, saúde e qualidade de vida.
                            <br />
                            <br />
                        Estamos prontos para dar o direcionamento necessário para você que quer emagrecer ou que deseja a melhoria da performance e para a superação de resultados.
                        </Typography>
                    </div>


                    <div className='flex flex-col items-center justify-center mt-6 overflow-hidden' data-aos={'fade-left'}>
                        <img src={homiLindo} className='rounded-md shadow-lg' alt='chikão freitas'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Main };