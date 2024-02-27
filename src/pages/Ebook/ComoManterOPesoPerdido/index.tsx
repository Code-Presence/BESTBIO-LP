import { Typography, Button } from '@material-tailwind/react';

import GenteMalhando  from '../../../assets/bg/gente-se-exercitando.webp';
import GenteNoCampo  from '../../../assets/bg/gentee-no-campo.webp';

import Ebook1  from '../../../assets/Mocks/BookMockup-1.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

function Ebook() {

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);


    return (
        <>
            <section className='w-screen h-screen bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${GenteMalhando})`}}>
                <div className='w-full h-full backdrop-blur-[3px] lg:px-64 p-8 pt-28 gap-12 bg-gradient-to-r relative from-[rgba(186,206,74,.9)] to-[rgba(126,217,86,.9)] flex flex-col items-center'>
                    <span data-aos="fade-down"  className='w-full text-white flex flex-col items-center'>
                        {/* <Typography variant='h1' placeholder={''}>Evite o Efeito Sanfona </Typography> */}
                        <Typography variant='h2' className='text-center' placeholder={''}>Descubra o segredo para <br className='lg:flex hidden'/> manter o peso e viver com saúde!</Typography>
                    </span>

                    <div data-aos="fade-down" data-aos-delay={200} className='lg:w-[50rem] lg:h-[25rem] w-full h-[25%] bg-white rounded-md shadow-lg'>

                    </div>

                    <Button data-aos="fade-down" data-aos-delay={400} placeholder={''} className='lg:text-xl shadow-md' color='green' size='lg'>Estou cansada(o) de viver voltando para meu peso antigo</Button>

                    <div data-aos="fade-up" data-aos-delay={0} className='w-full absolute bottom-0 flex -mb-1'>
                        <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use href="#gentle-wave" x="10" y="-6" fill="rgba(255,255,255,0.8)" />
                                <use href="#gentle-wave" x="55" y="1" fill="rgba(255,255,255,0.6)" />
                                <use href="#gentle-wave" x="42" y="4" fill="rgba(255,255,255,0.2)" />
                                <use href="#gentle-wave" x="12" y="10" fill="#fff" />
                            </g>
                        </svg>
                    </div>

                </div>
            </section>

            <section className='w-screen h-fit lg:h-screen bg-white -mt-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 lg:px-64 py-12' >
                <div className=' w-full h-full flex flex-col items-center justify-center gap-6 overflow-hidden'>
                    <Typography placeholder={''} data-aos='fade-right' variant='h2'>Apoio para uma Vida Saudável Sustentável</Typography>
                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                Alcançar seu objetivo de perda de peso é uma grande vitória. Entendemos os desafios de manter esse sucesso a longo prazo e estamos aqui para apoiá-lo em cada passo dessa jornada para um estilo de vida saudável e sustentável.
                    </Typography>

                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                    Muitas vezes, as dietas focam apenas na perda de peso a curto prazo, sem oferecer um plano realista para a manutenção a longo prazo. Isso leva muitas pessoas a recuperarem o peso perdido assim que retornam aos seus antigos hábitos alimentares e de estilo de vida.
                    </Typography>

                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                    Acreditamos que a chave para manter o peso perdido está na mudança de hábitos sustentáveis. Em vez de adotar dietas extremas ou soluções rápidas, incentivamos uma abordagem gradual e realista para a perda e manutenção de peso.
                    </Typography>

                    <Button className='' size='lg' placeholder={''} color='green' fullWidth data-aos="fade-right" data-aos-delay={400}>Saiba mais</Button>
                </div>

        
                <div className='bg-gray-500 w-full h-full '>

                </div>
            </section>

            <section className='w-screen h-fit lg:h-screen bg-no-repeat bg-center bg-cover relative' style={{ backgroundImage: `url(${GenteNoCampo})`}}>
                <div className='w-full h-full backdrop-blur-[3px] pb-12 pt-32 lg:pt-64 p-8 bg-gradient-to-r relative from-[rgba(125,217,86,0.98)] to-[rgba(186,206,74,.98)] items-center justify-center flex flex-col'>
                    <div  className='w-full absolute top-0 flex rotate-180 -mt-1'>
                        <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use href="#gentle-wave" x="10" y="-6" fill="rgba(255,255,255,0.8)" />
                                <use href="#gentle-wave" x="55" y="1" fill="rgba(255,255,255,0.6)" />
                                <use href="#gentle-wave" x="42" y="4" fill="rgba(255,255,255,0.2)" />
                                <use href="#gentle-wave" x="12" y="10" fill="#fff" />
                            </g>
                        </svg>
                    </div>
                        
                    <div className='w-full col-span-2 flex items-center justify-center flex-col mt-12'>
                        <Typography className='font-bold text-center text-white' variant='lead' placeholder={''} color='black'>
                    Encontre a chave para uma vida saudável com nosso ebook exclusivo
                        </Typography>

                        <Typography className="text-center text-white" variant='h2' placeholder={''}>
                        Como Manter o Peso Perdido
                        </Typography>
                    </div>
                    

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:px-52 gap-12'>
                        <img src={Ebook1} className='lg:h-[38rem] h-[20rem] object-cover object-center' data-aos="fade-up"/>
                    
                        <div className=' w-full h-full flex flex-col items-center justify-center gap-6 overflow-hidden' data-aos="fade-up" data-aos-delay={200}>
                            <Typography placeholder={''} variant='paragraph' className=' text-2xl text-justify' color='white'>
                            Enquanto você embarca nesta jornada emocionante de manter o peso perdido, nada é mais valioso do que ter as ferramentas certas ao seu alcance.
                            </Typography>
                        </div>
  
                    </div>
                </div>
            </section>

            <section className='w-screen h-fit lg:h-screen bg-white -mt-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 lg:px-64 py-12' >

            </section>
        </>
    );
}

export { Ebook };