import React from 'react';
import { Typography } from '@material-tailwind/react';
import { CarouselCustomArrows } from '../../../components/CardCarousel';
import photo5 from '../../../assets/photos/photo-5.webp';

function FourthSection() {
    return (
        <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${photo5})` }} id='testimonials'>
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
    );
}

export { FourthSection };