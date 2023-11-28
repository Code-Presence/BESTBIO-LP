import { Tab, Tabs, TabsHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { PricingCard } from '../components/PricingCardDark';

import { plans } from '../data/globalData';

function Presential(): JSX.Element {
    const [type, setType] = React.useState('basic');

    return (
        <>
            <div className='w-screen h-fit bg-[#ffffff] flex flex-col items-center justify-around py-6'>
                <div className='w-full flex flex-col items-center justify-center px-8 lg:px-20 gap-2'>
                    <Typography variant='lead' className='font-bold text-[#7ED956]'>ATENDIMENTO PRESENCIAL</Typography>

                    <Tabs value="monthly" className="mx-auto w-72">
                        <TabsHeader className="h-12 border border-white/25 bg-opacity-90">
                            <Tab
                                value="monthly"
                                className="font-medium"
                                onClick={() => setType('basic')}
                            >
                                Básico
                            </Tab>
                            <Tab
                                value="annual"
                                className="font-medium"
                                onClick={() => setType('pro')}
                            >
                                Pro
                            </Tab>
                        </TabsHeader>
                    </Tabs>

                    { type === 'basic'
                        ? (<Typography variant='h2' className='animate-fade-in-right'>NUTRICIONAL</Typography>)
                        : (<Typography variant='h2' className='animate-fade-in-left text-center'>NUTRICIONAL + PRESCRIÇÃO DE TREINO</Typography>)   
                    }


                    { type === 'basic'
                        ? (<Typography variant='lead' className='text-blue-gray-700 text-center animate-fade-in-left'>
                        O atendimento presencial acontece na cidade de Natal - Rio Grande do Norte. A consulta nutricional já inclui a 
                            <br/> 
                        realização dos exames de bioimpedância e calorimetria indireta.
                        </Typography>)
                        : (<Typography variant='lead' className='text-blue-gray-700 text-center animate-fade-in-right'>
                        O atendimento presencial acontece na cidade de Natal - Rio Grande do Norte. A consulta inclui a prescrição 
                            <br/ >
                        nutricional e de treino, além dos exames de bioimpedância e calorimetria indireta.
                        </Typography>)
                    }
                </div>
                
                <div className='w-full items-center flex flex-col lg:flex-row gap-6 mt-4 px-6 md:flex-col justify-center'>
                    { type === 'basic' ? (
                        <>
                            {plans.slice(0, 3).map((plan) => (
                                <PricingCard 
                                    key={plan.id}
                                    colorType={plan.colorType}
                                    type={plan.type}
                                    period={plan.period}
                                    kind={plan.kind}
                                    price={plan.price}
                                    text={plan.text}
                                    diferentials={plan.diferentials}
                                />
                            ))}
                        </>
                    ):(
                        <>
                            {plans.slice(3, 6).map((plan) => (
                                <PricingCard 
                                    key={plan.id}
                                    colorType={plan.colorType}
                                    type={plan.type}
                                    period={plan.period}
                                    kind={plan.kind}
                                    price={plan.price}
                                    text={plan.text}
                                    diferentials={plan.diferentials}
                                />
                            ))}
                        </>
                    )}
                
                </div>
            </div>
        </>
    );
}

export { Presential };