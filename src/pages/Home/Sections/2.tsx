import { Button, Typography } from '@material-tailwind/react';
import { CheckCircle } from 'lucide-react';
import React from 'react';
import { CarouselCustomNavigation } from '../../../components/Carousel';

function SecondSection() {
    return (
        <div className='w-full min-h-[40rem] h-fit bg-[#fefefe] flex flex-col lg:grid lg:grid-cols-2 px-6 py-12 lg:px-40 gap-6 overflow-x-hidden'>
            <div className={'w-full justify-center flex flex-col gap-6'} data-aos={'fade-right'}>
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

                <Button id='saiba mais' className='w-fit bg-[#7ED956] text-gray-900' size='lg'>Saiba mais</Button>
            </div>

            <div className={' w-full justify-center flex flex-col items-center lg:items-end'} data-aos={'fade-left'}>
                <CarouselCustomNavigation />
            </div>

        </div>
    );
}

export { SecondSection };