import React from 'react';
import {
    Typography,
    Card,
    CardBody,
    Button,
} from '@material-tailwind/react';
import { Check } from 'lucide-react';

import patterns from '../assets/bg/pattern.svg';
import patternsDark from '../assets/bg/pattern_dark.svg';

interface IPricingCardProps {
    id?: string,
    type: string,
    period: string,
    kind: string,
    price: string,
    text: string,
    diferentials: Array<string>,
    colorType: number,
}

export function PricingCard({
    type,
    period,
    kind,
    price,
    text,
    diferentials,
    colorType
}: IPricingCardProps) {

    return (
        <Card variant="gradient" className={`w-[25rem] ${colorType == 1 ? 'bg-gray-900' : 'white'} border`}>

            <div className="absolute inset-0 bg-cover bg-no-repeat opacity-20" style={{ backgroundImage: `url(${colorType == 1 ? patterns : patternsDark})` }}/>

            <CardBody className="relative z-10 text-center">
                <div className='flex flex-col'>
                    <Typography
                        variant="h6"
                        color={colorType == 1 ? 'white' : 'black'}
                        className="uppercase"
                    >
                        {type}
                    </Typography>
                    <Typography
                        variant="h3"
                        color={colorType == 1 ? 'white' : 'black'}
                        className="uppercase"
                    >
                        {period}
                    </Typography>
                    <Typography variant='small' className='mb-4'>
                        {kind}
                    </Typography>
                </div>
                <Typography
                    variant="h1"
                    color={colorType == 1 ? 'white' : 'black'}
                    className="text-5xl"
                >
                    
                    {price}
                </Typography>
                <Typography
                    className="font-normal text-[#538f39]"
                >
                    <strong>
                        {text}
                    </strong>
                </Typography>
                <div className="flex justify-center pt-6 pb-12">
                    <ul className="flex flex-col gap-2">
                        {diferentials.map((option, key) => (
                            <Typography
                                as="li"
                                key={key}
                                color={colorType == 1 ? 'white' : 'black'}
                                className="flex gap-2 font-normal"
                            >
                                <Check  size={20}/>
                                {option}
                            </Typography>
                        ))}
                    </ul>
                </div>
                <Button variant="filled" className='bg-[#7ED956] text-black' >
                    Contrate agora
                </Button>
            </CardBody>
        </Card>
    );
}