import React from 'react';
import '../index.css';
import logo from '../assets/logo.webp';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FifthSec, FirstSec, FourthSec, SecondSec, ThirdSec } from './Home/index';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography } from '@material-tailwind/react';

function Main(): JSX.Element {
    const [showPreloader, setShowPreloader] = React.useState(true);
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        Aos.init({duration: 1000});

        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            document.body.style.overflow = 'scroll';
            setShowPreloader(false);
        }, 3500);
    }, []);

    React.useEffect(() => {
        const local = localStorage.getItem('formSubmitted');
        console.log(local);
        if (local === 'false') {
            setTimeout(() => {
                handleOpen();
            }, 5500);
        }
    }, []);

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.async = true;
        document.body.appendChild(script);
 
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        localStorage.setItem('formSubmitted', 'true');    

        handleOpen();

        console.log('completed');
    };

    return (
        <> 
            
            <Dialog 
                open={open} 
                handler={handleOpen} 
                className='overflow-hidden'
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <div id="mc_embed_shell" className='rounded-xl'>
                    <div id="mc_embed_signup" className="bg-white rounded-lg">
                        <form action="https://bestbio.us21.list-manage.com/subscribe/post?u=7e8546111a38d0ac19f5b678a&amp;id=bd20b31ace&amp;f_id=002aeee6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" onSubmit={handleSubmit}>
                            <div id="mc_embed_signup_scroll" className=''>
                                <DialogHeader className='flex flex-col items-start'>
                                    <Typography variant='h4'>Bem vindo</Typography>
                                    <Typography variant='paragraph' className='text-xl mt-2'>Cadastre-se na minha lista VIP e receba ofertas e materiais exclusivos</Typography>
                                    {/* <Typography>aa {isSubmitted}</Typography> */}
                                </DialogHeader>
                                
                                <DialogBody>
                                    <div className='flex flex-col gap-4'>
                                        <Input type="text" name="FNAME" className="required text" id="mce-FNAME" required label='Nome' size='lg'/>

                                        <Input type='email' name='EMAIL' className='required email' id='mce-EMAIL' required label='Email' size='lg'/>

                                        <Input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" label='Número telefônico' size='lg'/>
                                    </div>
                                </DialogBody>

                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                    <input type="text" name="b_7e8546111a38d0ac19f5b678a_bd20b31ace" tabIndex="-1" />
                                </div>
                                <DialogFooter>

                                    <div className='flex w-full items-end justify-between'>
                                        <Button variant='outlined' color='red' onClick={() => handleOpen()}>sair</Button>
                                        <Button type='submit' color='green'>Salvar</Button>
                                    </div>
                                </DialogFooter>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>

            {showPreloader ? (
                <>
                    <section className='h-screen w-screen flex-col fixed z-[99999] bottom-0 top-0 left-0 right-0 overflow-hidden bg-[#1b1b1b] flex items-center justify-center gap-6 animate-fadeOut'
                    >
                        <div className=' overflow-hidden mb-4'>
                            <div data-aos={'fade-down'}>
                                <img loading="lazy"  src={logo} alt={'logo'} width={300}/>
                            </div>
                        </div>
                        <div className=' flex gap-4 items-center h-[2rem] overflow-hidden texts-container'>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={500}>Saúde,</span>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={1000}>Performance,</span>
                            <span className='text-xl lg:text-2xl text-white font-bold' data-aos={'fade-up'} data-aos-delay={1500}>Longevidade</span>
                        </div>
                    </section>
                    <div className='w-screen h-screen bg-[#1b1b1b]'/>
                </>
            ) : (
                <>
                    <FirstSec />
           
                    <SecondSec />

                    <ThirdSec />

                    <FourthSec />

                    <FifthSec />
                </>
            )}

        </>
    );
}

export { Main };