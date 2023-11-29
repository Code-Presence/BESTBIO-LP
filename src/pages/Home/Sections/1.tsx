import React from 'react';
import { Button, Typography } from '@material-tailwind/react';

import video from '../../../assets/bg/1128.mp4';
import MainBg from '../../../assets/bg/main_bg.webp';

function FirstSection() {
    return (
        <>
            <div className="relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: `url(${MainBg})` }}>
                <video autoPlay loop muted id="videoBackground" className='absolute object-cover min-h-full min-w-full right-0 bottom-0 hidden lg:flex '>
                    <source src={video} type="video/mp4" className='hidden lg:flex'/>
                </video>
                <div className="absolute inset-0 h-full w-full backdrop-blur-[1px] flex flex-col px-6 xl:px-40 gap-4 pt-24 bg-[#000]/75 ">
                    <div data-aos="fade-up">
                        <Typography 
                            variant="lead" 
                            className="text-white "
                        >Oportunidade de mundança</Typography>
                        <Typography 
                            variant="h1" 
                            className="  font-racing text-customMedium xl:text-customBig leading-none" 
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
                    </div>
                    <Button className=' w-fit bg-[#7ED956] text-blue-gray-900 mt-10 text-[16px]' data-aos="fade-up" data-aos-delay={500}>Comece hoje a sua mudança</Button>
                </div>
        
            </div>  
        </>
    );
}

export { FirstSection };