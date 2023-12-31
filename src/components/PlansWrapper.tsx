import React from 'react';
import BG from '../assets/bg/greene.webp';

interface IPlansWrapperProps {
    children: React.ReactNode
}

function PlansWrapper({ children }: IPlansWrapperProps) {
    return (
        <div className='relative w-screen h-fit bg-cover bg-no-repeat flex items-center justify-center' style={{ backgroundImage: `url(${BG})`}}>
            <div className=" inset-0 h-fit min-h-screen w-full backdrop-blur-[1px] flex flex-col items-center justify-evenly bg-[#1b1b1b]/70 py-8">
                {children}
            </div>
        </div>
    );
}

export { PlansWrapper };