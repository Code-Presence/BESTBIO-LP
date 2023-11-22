import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import '../index.css';
import { CustomNavbar } from '../components/Navbar';
import { CarouselCustomNavigation } from '../components/Carousel';
import { CheckCircle } from 'lucide-react';

import photo6 from '../assets/photos/photo-6.jpg';


function Main(): JSX.Element {

    return (
        <>
            {/* <div className="w-full h-screen bg-[#000] overflow-hidden"> */}
            <CustomNavbar />

            <div className="relative h-screen w-full bg-[url('https://bestbio.com.br/wp-content/uploads/2023/04/Foto-Maciel-Lopes110-scaled.jpg')] bg-cover bg-no-repeat">
                <div className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-[2px] flex flex-col px-4 xl:px-40 gap-4 pt-24">
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

            <div className='w-full h-[40rem] bg-[#fefefe] grid grid-cols-2 px-40'>

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

                    <Button className='w-fit bg-[#7ED956]' size='lg'>Saiba mais</Button>
                </div>

                <div className='w-full justify-center flex flex-col items-end'>
                    <CarouselCustomNavigation />
                </div>

            </div>

            <div className="w-full h-screen bg-[#fefefe] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${photo6})` }}>
                <div className="h-full w-[100%] bg-black/70 backdrop-blur-[2px]">

                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export { Main };