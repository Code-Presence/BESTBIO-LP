import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import '../index.css';
import { CarouselCustomNavigation } from '../components/Carousel';
import { CheckCircle } from 'lucide-react';
import photo5 from '../assets/photos/photo-5.jpg';
import photo7 from '../assets/photos/photo-7.jpg';
import homiLindo from '../assets/photos/homilindo.jpg';
import { FeatureCard } from '../components/FeatureCard';
import { services } from '../data/globalData';
import {  CarouselCustomArrows } from '../components/CardCarousel';

import Aos from 'aos';
import 'aos/dist/aos.css';

import video from '../assets/bg/1128.mp4';
import MainBg from '../assets/bg/main_bg.webp';

function Main(): JSX.Element {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const isMobileDevice = () => {
        return (
            typeof window.orientation !== 'undefined' ||
          navigator.userAgent.indexOf('IEMobile') !== -1
        );
    };

    return (
        <> 
            <div className="relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${MainBg})` }}>
                <video autoPlay loop muted id="videoBackground" className='absolute object-cover min-h-full min-w-full right-0 bottom-0 hidden lg:flex '>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 h-full w-full backdrop-blur-[1px] flex flex-col px-6 xl:px-40 gap-4 pt-24 bg-[#000]/75 ">
                    <div data-aos="fade-up">
                        <Typography 
                            variant="lead" 
                            className="text-white "
                        >Oportunidade de mundança</Typography>
                        {isMobileDevice ? (
                            <Typography 
                                variant="h1" 
                                className="  font-racing text-customMedium xl:text-customBig leading-none" 
                                style={{ fontWeight: '400', color: '#7ED956'}}>
                        Consultoria <br/> Fitness
                            </Typography>
                        ) : (<>huee</>)}



                        <Typography variant="lead" className="text-white ">
                            <hr  className='w-[20%] border-[#7ED956] mb-2 mt-5'/>
                        Alcance a boa forma com saúde, de maneira sustentável e definitiva 
                            <br/> 
                        com a orientação de um dos maiores especialistas do país em 
                            <br />
                        emagrecimento e performance.
                            <hr  className='w-[20%] border-[#7ED956] mt-4'/>
                        </Typography>
                    </div>
                    <Button className=' w-fit bg-[#7ED956] text-blue-gray-900 mt-10 text-[16px]' data-aos="fade-up" data-aos-delay={500}>Comece hoje a sua mudança</Button>
                </div>
        
            </div>  

            <div className='w-full min-h-[40rem] h-fit bg-[#fefefe] flex flex-col lg:grid lg:grid-cols-2 px-6 py-12 lg:px-40 gap-6 overflow-x-hidden'>
                <div className={'w-full justify-center flex flex-col gap-6'} data-aos={'fade-right'}>
                    <div>
                        <Typography variant='h4'>O que você encontra por aqui</Typography>
                        <Typography variant='h1'>Saúde & Performance</Typography>
                        <Typography variant='lead'>Oferecemos serviços na modalidade online e presencial para quem deseja alacaçar os melhores resultados em saúde, emagrecimento e performance física.</Typography>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <Typography variant='lead' className='flex items-center gap-2'>
                            <CheckCircle />
                            Nutrição
                        </Typography>
                        <Typography variant='lead' className='flex items-center gap-2'>
                            <CheckCircle />
                            Treino
                        </Typography>
                        <Typography variant='lead' className='flex items-center gap-2'>
                            <CheckCircle />
                            Exames
                        </Typography>
                    </div>

                    <Button className='w-fit bg-[#7ED956] text-gray-900' size='lg'>Saiba mais</Button>
                </div>

                <div className={' w-full justify-center flex flex-col items-center lg:items-end'} data-aos={'fade-left'}>
                    <CarouselCustomNavigation />
                </div>

            </div>

            <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${photo7})` }}>
                <div className="h-full w-[100%] bg-[#1b1b1b]/90 backdrop-blur-[4px] lg:px-40 lg:py-12 py-12">
                    <div className='w-full flex flex-col items-center justify-center px-6'>
                        <Typography variant="lead" style={{ fontWeight: '600', color: '#7ED956'}}>PRESENCIAL E ONLINE</Typography>
                        <Typography variant="h1"  className="text-4xl" style={{ color: '#fff'}}>Nossos Serviços</Typography>
                        <Typography variant="lead" className='mt-6 lg:text-center text-justify' style={{ color: '#fff'}}>Oferecemos programas e serviços que atendem públicos dos mais variados perfis, desde sedentários a atletas de alto rendimento. Temos pacotes para quem deseja apenas o acompanhamento nutricional e também oferecemos pacotes completos com nutrição e prescrição de exercícios físicos. Treino e plano alimentar são disponibilizados no nosso aplicativo que oferece várias funcionalidades e muita comodidade para o paciente.</Typography>
                        
                    </div>

                    <div className='grid grid-cols-1 w-full items-center justify-center lg:grid-cols-3 lg:grid pt-12 gap-6'>
                        {
                            services.map((item, index) => (
                                <>
                                    <div key={index} data-aos={'fade-up'} data-aos-delay={200 * index}>
                                        <FeatureCard 
                                            key={index}
                                            img={item.photo}
                                            title={item.title}
                                            content={item.content}
                                        />
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>

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
                        <img src={homiLindo} className='rounded-md shadow-lg'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Main };