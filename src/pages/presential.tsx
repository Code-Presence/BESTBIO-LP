import { Typography } from '@material-tailwind/react';
import React from 'react';
import { PricingCard } from '../components/PricingCardDark';
import { PricingCardLight } from '../components/PricingCardLight';

function Presential(): JSX.Element {

    return (
        <>
            <div className='w-screen h-screen bg-[#fafafa] flex flex-col items-center justify-around'>
                <div className='w-full flex flex-col items-center justify-center px-8 lg:px-20 gap-2'>
                    <Typography variant='lead' className='font-bold text-[#7ED956]'>ATENDIMENTO PRESENCIAL</Typography>
                    <Typography variant='h1' className=''>NUTRICIONAL</Typography>
                    <Typography variant='lead' className='text-blue-gray-700 text-center'>
                        O atendimento presencial acontece na cidade de Natal - Rio Grande do Norte. A consulta nutricional já inclui a 
                        <br/> 
                    realização dos exames de bioimpedância e calorimetria indireta.</Typography>
                </div>

                <div className='w-full flex items-center justify-center pb-2 gap-6'>
                    <PricingCardLight />
                    <PricingCard />
                    <PricingCardLight />

                </div>
            </div>
        </>
    );
}

export { Presential };