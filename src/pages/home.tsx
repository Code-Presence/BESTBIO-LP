import React from 'react';
import { Typography } from '@material-tailwind/react';
import '../index.css';

import photo5 from '../assets/photos/photo-5.webp';
import homiLindo from '../assets/photos/homilindo.webp';
import {  CarouselCustomArrows } from '../components/CardCarousel';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FirstSec, SecondSec, ThirdSec } from './Home/index';

function Main(): JSX.Element {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <> 
            <FirstSec />

            <SecondSec />

            <ThirdSec />

            <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${photo5})` }}>
                <div className="h-full w-[100%] bg-[#ffffff]/95 backdrop-blur-[4px] lg:px-40 lg:py-24 py-12 px-6">
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