import React from 'react';
import {
    Typography,
    Card,
    CardBody,
    Button,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';
import { Check } from 'lucide-react';

import patterns from '../assets/bg/pattern.webp';
import patternsDark from '../assets/bg/pattern_dark.webp';

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

interface IIconProps {
    id: number;
    open: number;
}

function Icon({ id, open }: IIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function PricingCard({
    type,
    period,
    kind,
    price,
    text,
    diferentials,
    colorType,
}: IPricingCardProps) {

    const [open, setOpen] = React.useState(0);
 
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Card variant="gradient" className={`lg:w-[25rem] w-full h-fit ${colorType == 1 ? 'bg-gray-900' : 'white'} border border-[#c4c4c4]/40`}>

            <div className="absolute inset-0 bg-cover bg-no-repeat opacity-20" style={{ backgroundImage: `url(${colorType == 1 ? patterns : patternsDark})` }}/>

            <CardBody className="relative z-10 text-center transition-all">
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
                <div className="lg:flex justify-center pt-6 pb-6 hidden">
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

                
                <Accordion open={open === 1} className='my-6 lg:hidden w-full' icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)} className={`text-center flex items-center justify-center ${colorType == 1  ? 'text-white' : 'text-gray-900'}`}>
                            Veja os benefícios
                    </AccordionHeader>
                    <AccordionBody>
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
                    </AccordionBody>
                </Accordion>
                  
          

                <Button variant="filled" className='bg-[#7ED956] text-black' id='fale conosco'>
                    Contrate agora
                </Button>
            </CardBody>
        </Card>
    );
}