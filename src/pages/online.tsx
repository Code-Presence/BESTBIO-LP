import { Tab, Tabs, TabsHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { PricingCard } from '../components/PricingCard';

import { onlinePlans } from '../data/globalData';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Online(): JSX.Element {
    const [type, setType] = React.useState('basic');
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
            <div className='flex flex-col items-center gap-4'>
                <Typography variant='lead' className='font-bold text-[#7ED956]'>ATENDIMENTO ONLINE</Typography>

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
                            onClick={() => setType('vip')}
                        >
                Vip
                        </Tab>
                        <Tab
                            value="pro"
                            className="font-medium rounded-md"
                            onClick={() => navigate('/pro')}
                        >
                            <span className='flex items-center gap-2'>
                Pro
                                <ExternalLink size={20}/>
                            </span>
                        </Tab>
                    </TabsHeader>
                </Tabs>
            </div>
            <div className='w-full flex flex-col gap-4 items-center justify-center px-8 lg:px-20' >
               

                { type === 'basic'
                    ? (<Typography variant='h2' className='animate-fade-in-right text-white'>NUTRICIONAL</Typography>)
                    : (<Typography variant='h2' className='animate-fade-in-left text-center text-white'>NUTRICIONAL + PRESCRIÇÃO DE TREINO</Typography>)   
                }


                { type === 'basic'
                    ? (<Typography variant='lead' className='text-blue-gray-100 text-center animate-fade-in-left mt-2'>
                        O atendimento online acontece através do nosso app por videochamada.
                    </Typography>)
                    : (<Typography variant='lead' className='text-blue-gray-100 text-center animate-fade-in-right mt-2'>
                        O atendimento online acontece através do nosso app por videochamada.
                    </Typography>)
                }
            </div>
                
            <div className='w-full items-center flex flex-col lg:flex-row gap-6 mt-4 px-6 md:flex-col justify-center'>
                { type === 'basic' ? (
                    <>
                        {onlinePlans.slice(0, 3).map((plan, index) => (
                            <>
                                <div data-aos={'fade-up'} data-aos-delay={200 * index}>
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
                                </div>
                            </>
                        ))}
                    </>
                ):(
                    <>
                        {onlinePlans.slice(3, 6).map((plan, index) => (
                            <>
                                <div data-aos={'fade-up'} data-aos-delay={200 * index}>
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
                                </div>
                            </>
                        ))}
                    </>
                )}
                
            </div>
        </>
    );
}

export { Online };