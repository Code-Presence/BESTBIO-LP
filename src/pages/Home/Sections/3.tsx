import { Typography } from '@material-tailwind/react';
import React from 'react';
import { FeatureCard } from '../../../components/FeatureCard';
import { services } from '../../../data/globalData';

import photo7 from '../../../assets/photos/photo-7.webp';

function ThirdSection() {
    return (
        <div className="w-full h-fit bg-[#fefefe] bg-cover bg-no-repeat overflow-y-hidden" style={{ backgroundImage: `url(${photo7})` }}>
            <div className="h-fit w-[100%] bg-[#1b1b1b]/90 backdrop-blur-[4px] lg:px-40 lg:py-12 py-12 overflow-hidden">
                <div className='w-full flex flex-col items-center justify-center px-6'>
                    <Typography variant="lead" style={{ fontWeight: '600', color: '#7ED956'}}>PRESENCIAL E ONLINE</Typography>
                    <Typography variant="h1"  className="text-4xl" style={{ color: '#fff'}}>Nossos Serviços</Typography>
                    <Typography variant="lead" className='mt-6 lg:text-center text-justify' style={{ color: '#fff'}}>Oferecemos programas e serviços que atendem públicos dos mais variados perfis, desde sedentários a atletas de alto rendimento. Temos pacotes para quem deseja apenas o acompanhamento nutricional e também oferecemos pacotes completos com nutrição e prescrição de exercícios físicos. Treino e plano alimentar são disponibilizados no nosso aplicativo que oferece várias funcionalidades e muita comodidade para o paciente.</Typography>
            
                </div>

                <div className='grid grid-cols-1 w-full items-center justify-center lg:grid-cols-3 lg:grid pt-12 gap-6'>
                    {
                        services.map((item, index) => (
                            <>
                                <div key={index} data-aos={'fade-up'} data-aos-delay={200 * index}>
                                    <FeatureCard
                                        key={index}
                                        img={item.photo}
                                        title={item.title}
                                        content={item.content}
                                    />
                                </div>
                            </>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export { ThirdSection };