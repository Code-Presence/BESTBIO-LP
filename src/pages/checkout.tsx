import React from 'react';
import MainBg from '../assets/bg/main_bg.webp';
import { Button } from '@material-tailwind/react';

function Checkout() {
    return (
        <div 
            data-aos="zoom-out-down" data-aos-delay="1000"
            className={'relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden overflow-hidden bg-center '} 
            style={{ backgroundImage: `url(${MainBg})` }} 
        >
            <div className="absolute inset-0 h-full w-full backdrop-blur-[1px] flex flex-col px-4 lg:px-72 gap-4 py-24 bg-[#fff]/80 backdrop-grayscale" >
                <div className='w-full h-full bg-white/10 backdrop-blur-[1px] rounded-lg shadow-lg'>
                    <Button size='lg' className='bg-[#7ED956] text-gray'>Preencha a análise</Button>
                </div>
            </div>
        </div>
    );
}

export { Checkout };