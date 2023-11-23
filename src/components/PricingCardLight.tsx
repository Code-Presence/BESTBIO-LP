import React from 'react';
import {
    Typography,
    Card,
    CardBody,
    Button,
} from '@material-tailwind/react';
import { Check } from 'lucide-react';

import patterns from '../assets/bg/pattern_dark.svg';

export function PricingCardLight() {
    const options = [
        '1 consulta presencial',
        '30 dias de acompanhamento',
        'Chat para dúvidas no app',
        'Cardápio individualizado',
        'App com receitas e lista de compras',
        'Exame de Bioimpedância',
        'Exame de Calorimetria Indireta',
    ];
    return (
        <Card variant='gradient' color='white' className='w-[25rem] border shadow-lg'>

            <div className="absolute inset-0 bg-cover bg-no-repeat opacity-10" style={{ backgroundImage: `url(${patterns})` }}/>

            <CardBody className="relative z-10 text-center">
                <div className='flex flex-col bg-red'>
                    <Typography
                        variant="h6"
                        className="uppercase text-blue-gray-800"
                    >
                    CLASSIC
                    </Typography>
                    <Typography
                        variant="h2"
                        className="uppercase text-blue-gray-900"
                    >
                    Consulta Única
                    </Typography>
                    <Typography variant='small' className='mb-14'>
                        Nutricional
                    </Typography>
                </div>
                <Typography
                    variant="h1"
                    className="text-6xl text-blue-gray-900"
                >
                    
                    R$ 400
                </Typography>
                <Typography
                    className="font-bold text-[#5e9646]"
                >
                        NO PIX OU EM ATÉ 12X DE R$43,00
                </Typography>
                <div className="flex justify-center pt-6 pb-20">
                    <ul className="flex flex-col gap-2">
                        {options.map((option, key) => (
                            <Typography
                                as="li"
                                key={key}
                                className="flex gap-2 font-normal text-blue-gray-900"
                            >
                                <Check  size={20}/>
                                {option}
                            </Typography>
                        ))}
                    </ul>
                </div>
                <Button variant="filled" className='bg-[#7ED956] text-black' >
                    Compre agora
                </Button>
            </CardBody>
        </Card>
    );
}