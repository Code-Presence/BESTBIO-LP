import React from 'react';
import {
    Typography,
    Card,
    CardBody,
    Button,
} from '@material-tailwind/react';
import { Check } from 'lucide-react';

import patterns from '../assets/bg/pattern.svg';

export function PricingCard() {
    const options = [
        '3 consultas presenciais',
        '90 dias de acompanhamento',
        'Chat para dúvidas no app',
        'Cardápio individualizado',
        'App com receitas e lista de compras',
        'Exame de Bioimpedância',
        'Exame de Calorimentria',
        'Monitoramento e controle de resultados',
    ];
    return (
        <Card variant="gradient" className='w-[25rem] bg-gray-900'>

            <div className="absolute inset-0 bg-cover bg-no-repeat opacity-20" style={{ backgroundImage: `url(${patterns})` }}/>

            <CardBody className="relative z-10 text-center">
                <div className='flex flex-col bg-red'>
                    <Typography
                        variant="h6"
                        color={'white'}
                        className="uppercase"
                    >
                    VIP
                    </Typography>
                    <Typography
                        variant="h2"
                        color={'white'}
                        className="uppercase"
                    >
                    Trimestral
                    </Typography>
                    <Typography variant='small' className='mb-14'>
                        Nutricional
                    </Typography>
                </div>
                <Typography
                    variant="h1"
                    color={'white'}
                    className="text-6xl"
                >
                    
                    R$ 1000
                </Typography>
                <Typography
                    className="font-normal text-[#7ED956]"
                >
                        NO PIX OU EM ATÉ12X DE R$108,00
                </Typography>
                <div className="flex justify-center pt-6 pb-20">
                    <ul className="flex flex-col gap-2">
                        {options.map((option, key) => (
                            <Typography
                                as="li"
                                key={key}
                                color={'white'}
                                className="flex gap-2 font-normal"
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