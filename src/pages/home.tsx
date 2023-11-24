import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import '../index.css';
import { CarouselCustomNavigation } from '../components/Carousel';
import { CheckCircle } from 'lucide-react';

// import photo1 from '../assets/photos/photo-1.jpg';
// import photo2 from '../assets/photos/photo-2.jpg';
// import photo3 from '../assets/photos/photo-3.jpg';

import photo5 from '../assets/photos/photo-5.jpg';
// import photo6 from '../assets/photos/photo-6.jpg';
import photo7 from '../assets/photos/photo-7.jpg';
import { FeatureCard } from '../components/FeatureCard';
import { services } from '../data/globalData';
import {  CarouselCustomArrows } from '../components/CardCarousel';


function Main(): JSX.Element {
    return (
        <>
           
            <div className="relative h-screen w-full bg-[url('https://bestbio.com.br/wp-content/uploads/2023/04/Foto-Maciel-Lopes110-scaled.jpg')] bg-cover bg-no-repeat">
                <div className="absolute inset-0 h-full w-full backdrop-blur-[2px] flex flex-col px-8 xl:px-40 gap-4 pt-24 bg-[#1b1b1b]/90">
                    <Typography variant="lead" className="text-white">Oportunidade de mundança</Typography>
                    <Typography 
                        variant="h1" 
                        className="font-racing text-customMedium xl:text-customBig leading-none animate-fade-in-down" 
                        style={{ fontWeight: '400', color: '#7ED956'}}>
                        Consultoria <br/> Fitness
                    </Typography>



                    <Typography variant="lead" className="text-white ">
                        <hr  className='w-[20%] border-[#7ED956] mb-2 mt-5'/>
                        Alcance a boa forma com saúde, de maneira sustentável e definitiva 
                        <br/> 
                        com a orientação de um dos maiores especialistas do país em 
                        <br />
                        emagrecimento e performance.
                        <hr  className='w-[20%] border-[#7ED956] mt-4'/>
                    </Typography>

                    <Button className='w-fit bg-[#7ED956] text-blue-gray-900 mt-10 text-[16px]'>Comece hoje a sua mudança</Button>
                </div>
        
            </div>  

            <div className='w-full min-h-[40rem] h-fit bg-[#fefefe] flex flex-col lg:grid lg:grid-cols-2 px-8 py-12 lg:px-40 gap-6'>

                <div className='w-full justify-center flex flex-col gap-6'>
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

                <div className='w-full justify-center flex flex-col items-center lg:items-end'>
                    <CarouselCustomNavigation />
                </div>

            </div>

            <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${photo7})` }}>
                <div className="h-full w-[100%] bg-[#1b1b1b]/90 backdrop-blur-[4px] lg:px-40 lg:py-24 py-12">
                    <div className='w-full flex flex-col items-center justify-center px-8'>
                        <Typography variant="lead" style={{ fontWeight: '600', color: '#7ED956'}}>PRESENCIAL E ONLINE</Typography>
                        <Typography variant="h1"  className="text-4xl" style={{ color: '#fff'}}>Nossos Serviços</Typography>
                        <Typography variant="lead" className='mt-6 lg:text-center text-justify' style={{ color: '#fff'}}>Oferecemos programas e serviços que atendem públicos dos mais variados perfis, desde sedentários a atletas de alto rendimento. Temos pacotes para quem deseja apenas o acompanhamento nutricional e também oferecemos pacotes completos com nutrição e prescrição de exercícios físicos. Treino e plano alimentar são disponibilizados no nosso aplicativo que oferece várias funcionalidades e muita comodidade para o paciente.</Typography>
                        
                    </div>

                    <div className='grid grid-cols-1 w-full items-center justify-center lg:grid-cols-3 lg:grid pt-12 gap-6'>
                        {
                            services.map((item, index) => (
                                <>
                                    <FeatureCard 
                                        key={index}
                                        img={item.photo}
                                        title={item.title}
                                        content={item.content}
                                    />
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${photo5})` }}>
                <div className="h-full w-[100%] bg-[#ffffff]/95 backdrop-blur-[4px] lg:px-40 lg:py-24 py-12">
                    <div className='w-full flex flex-col items-center justify-center px-8'>
                        <Typography variant="lead" className="text-blue-gray-800" style={{ fontWeight: '600'}}>NOSSOS CLIENTES</Typography>
                        <Typography variant="h1"  className="text-4xl text-gray-900">Depoimentos</Typography>
                        <Typography variant="lead" className='mt-6 lg:text-center text-justify text-blue-gray-800'>
                        São milhares de pacientes atendidos no Brasil e em diversos países seja para <br/> emagrecimento, hipertrofia, performance física, saúde e longevidade. 
                        </Typography>
                        <hr className='border-[#7ED956] w-[40%] mt-5'/>
                    </div>
                    <div className='w-full mt-6 px-8'>
                        <CarouselCustomArrows />
                    </div>


                </div>
            </div>
        </>
    );
}

export { Main };