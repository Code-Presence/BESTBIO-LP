import { Typography, Button, Card, CardHeader, CardFooter, CardBody } from '@material-tailwind/react';

import GenteMalhando  from '../../../assets/bg/gente-se-exercitando.webp';
import GenteNoCampo  from '../../../assets/bg/gentee-no-campo.webp';
import MulherComendo from '../../../assets/PESSOA-SAUDAVEL.webp';

import Ebook1  from '../../../assets/Mocks/BookMockup-1.webp';
import Ebook2  from '../../../assets/Mocks/BookMockup-2.webp';
import BonusEbook1  from '../../../assets/Mocks/BonusBook-1.webp';
import BonusEbook2  from '../../../assets/Mocks/BonusBook-2.webp';

import Noise from '../../../assets/Textures/nnnoise.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { ebook_features } from './features';
import { Brain, CakeSlice, ChevronDown, Lightbulb, Salad, Search } from 'lucide-react';

function Ebook() {

    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef();
  
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        );
  
        if (ref.current) {
            observer.observe(ref.current);
        }
  
        return () => {
            observer.disconnect();
        };
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

                    <div  className='w-full absolute bottom-0 flex -mb-1'>
                        <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use data-aos="fade-up" data-aos-delay={100} href="#gentle-wave" x="10" y="-6" fill="rgba(255,255,255,0.8)" />
                                <use data-aos="fade-up" data-aos-delay={300} href="#gentle-wave" x="55" y="1" fill="rgba(255,255,255,0.6)" />
                                <use data-aos="fade-up" data-aos-delay={500} href="#gentle-wave" x="42" y="4" fill="rgba(255,255,255,0.2)" />
                                <use data-aos="fade-up" data-aos-delay={700} href="#gentle-wave" x="12" y="10" fill="#fff" />
                            </g>
                        </svg>
                    </div>

                </div>
            </section>

            <section className='w-screen h-fit lg:h-[93%] bg-white -mt-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-8 lg:px-64 py-12' >
                <div className=' w-full h-full flex flex-col items-center justify-center gap-6 overflow-hidden'>
                    <Typography placeholder={''} data-aos='fade-right' variant='h2'>Apoio para uma Vida Saudável Sustentável</Typography>
  
                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                    Alcançar o objetivo de perda de peso é uma vitória significativa, mas manter esse sucesso a longo prazo é um desafio maior. Nos comprometemos a apoiar você em sua jornada para um estilo de vida saudável e sustentável, reconhecendo as dificuldades de manter o peso ideal.
                    </Typography> 

                    <Typography className='' variant='lead' placeholder={''} data-aos="fade-right" data-aos-delay={200}>
                    A chave para a manutenção do peso é adotar hábitos sustentáveis, em vez de se render a dietas extremas que prometem resultados rápidos. Promovemos uma mudança gradual e realista nos hábitos alimentares e de estilo de vida, focando na saúde a longo prazo e na prevenção do efeito sanfona.
                    </Typography> 

                    <Button className='' size='lg' placeholder={''} color='green' fullWidth data-aos="fade-right" data-aos-delay={400}>Saiba mais</Button>
                </div>

        
                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <img src={MulherComendo} alt='mulher se alimentando bem' className='rounded-lg saturate-[120%]'/>
                </div>
            </section>

            <section className='w-screen h-screen lg:h-[85vh]'>
                <div className='w-full h-full backdrop-blur-[3px] pb-12 pt-32 lg:pt-64 p-8 relative bg-[rgba(125,217,86)] items-center justify-center flex flex-col'>
                    <div className='w-full absolute top-0 flex -mt-1'>
                        <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]  rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
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

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <div className='w-full h-full flex lg:items-end lg:justify-end'>
                            <img src={Ebook1} alt='Ebook como manter o peso perdido' className='lg:h-[40rem] h-[20rem] object-cover object-center ml-2' data-aos="fade-up"/>
                        </div>
                    
                        <div className=' w-full h-full flex flex-col gap-6 overflow-hidden justify-center lg:pr-24 lg:pb-12' data-aos="fade-up" data-aos-delay={200}>
                            <span>
                                <Typography className='font-bold text-white text-center lg:text-start' variant='lead' placeholder={''} color='black'>
                                  Encontre a chave para uma vida saudável com nosso ebook exclusivo
                                </Typography>

                                <Typography className="text-white " variant='h2' placeholder={''}>
                                Como Manter o Peso Perdido
                                </Typography>
                            </span>
                        
                            <Typography placeholder={''} variant='paragraph' className=' text-2xl text-justify text-center lg:text-start' color='white'>
                            Enquanto você embarca nesta jornada emocionante de manter o peso perdido, nada é mais valioso do que ter as ferramentas certas ao seu alcance.
                            </Typography>
                        </div>
  
                    </div>
                </div>
            </section>

            <section className='w-screen h-fit relative bg-white -mt-1 ' style={{ backgroundImage: `url(${GenteNoCampo})`}}>
                <div className='w-full absolute top-0 flex -mt-1 z-50'>
                    <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use href="#gentle-wave" x="10" y="-6" fill="rgba(125,217,86,0.8)" />
                            <use href="#gentle-wave" x="55" y="1" fill="rgba(125,217,86,0.6)" />
                            <use href="#gentle-wave" x="42" y="4" fill="rgba(125,217,86,0.2)" />
                            <use href="#gentle-wave" x="12" y="10" fill="rgba(125,217,86)" />
                        </g>
                    </svg>
                </div>

                <div className='w-full h-full flex flex-col items-center justify-center gap-12 px-8 lg:px-52 pt-56 pb-40  bg-white/80 backdrop-blur-[10px]'>
                    <div>
                        <Typography variant='h2' className='text-blue-gray-900'>Por que este ebook é essencial?</Typography>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 h-fit'>
                        {ebook_features.map((item, index) => (
                            <>
                                <Card className='px-4 pb-4 gap-2 pt-8 flex flex-col items-center' key={index} data-aos="fade-up" data-aos-delay={100 * index}>
                                    <div className=' w-full items-center justify-center flex'>
                                        <div className="h-14 w-14 grid items-center justify-center !rounded-lg bg-[rgba(125,217,86)] text-white">
                                            {item.title == 'Conhecimento especializado ao seu alcance:' && <Brain size={30}/>}
                                            {item.title == 'Abordagem abrangente e prática:' && <Search size={30}/>}
                                            {item.title == 'Acompanhamento contínuo:' && <Lightbulb size={30}/>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col h-full items-center justify-center gap-4'>
                                        <Typography variant='h4' color='black' className='text-center text-blue-gray-800'>{item.title}</Typography>
                                        <Typography variant='lead' className='text-center text-blue-gray-900'>{item.content}</Typography>
                                    </div>
                                </Card>
                            </>
                        ))}
                    </div>
                </div>

                <div className='absolute bottom-0 -mb-1 bg-gradient-to-b bg- w-full h-[5rem] from-[rgba(255,255,255,0)] to-[#fafafa] flex items-center justify-center'>
                    <div className='border-[rgba(125,217,86)] border-4 h-[3rem] w-[3rem] rounded-full flex'>
                        <ChevronDown size={40} className='text-[rgba(125,217,86)] animate-bounce'/>
                    </div>
                </div>
            </section>

            <section className='w-screen h-screen bg-[#fafafa] relative hidden lg:grid grid-cols-2 items-center justify-center gap-4 px-64 py-12'>
                <div className='w-full h-full justify-center flex flex-col  gap-4'>
                    <Typography className='' variant='h2'>Bônus exclusivo</Typography>

                    <Typography className='text-blue-gray-600'>Na compra do ebook <b className='font-bold'>Como Manter O Peso Perdido</b> você garante dois ebook que irão de ajudar na jornada para um vida saudável</Typography>

                    <Card className='bg-white'>
                        <div className='flex gap-2 p-4 flex-col'>
                            <span className='flex gap-2'>
                                <div className='h-[3rem] w-[3rem] bg-green-300 rounded-lg flex items-center justify-center text-white'>
                                    <Salad />
                                </div>
                                <div>
                                    <Typography variant='lead' className='font-bold'>Receitas Criativas de Saladas e Molhos</Typography>
                                    <Typography variant='small' className='-mt-1'>mais cor e sabor nas suas refeições</Typography>
                                </div>
                            </span>
                            <Typography className='leading-5' variant='paragraph'>
                            Mergulhe em receitas deliciosas que combinam o prazer de comer doces com a manutenção de um estilo de vida saudável. Desfrute de sobremesas que satisfazem seu paladar sem comprometer seus objetivos de saúde.
                            </Typography>
                        </div>
                    </Card>

                    <Card className='bg-white'>
                        <div className='flex gap-2 p-4 flex-col'>
                            <span className='flex gap-2'>
                                <div className='h-[3rem] w-[3rem] bg-red-300 rounded-lg flex items-center justify-center text-white'>
                                    <CakeSlice />
                                </div>
                                <div>
                                    <Typography variant='lead' className='font-bold'>Sobremesas Saudáveis</Typography>
                                    <Typography variant='small' className='-mt-1'>Emagrecendo com prazer</Typography>
                                </div>
                            </span>
                            <Typography className='leading-5' variant='paragraph'>
                            Mergulhe em receitas deliciosas que combinam o prazer de comer doces com a manutenção de um estilo de vida saudável. Desfrute de sobremesas que satisfazem seu paladar sem comprometer seus objetivos de saúde.
                            </Typography>
                        </div>
                    </Card>

                    <Button className='' color='green' size='lg'>Garantir Bônus</Button>
                </div>

                <div className='w-full h-full flex flex-col items-center justify-center'>
                    <div
                        ref={ref}
                        className={`w-[40rem] lg:flex hidden h-[40rem] from-[rgba(125,217,86)] to-[#b9fa9e] right-96 bg-gradient-to-t absolute rounded-md shadow-xl ${
                            isVisible ? 'animate-moveAndRotate' : ''
                        }`}
                    >
                        <img src={Noise} alt='just a noise' className=''/>
                    </div>

                    <img 
                        className='lg:h-[35rem] h-[25rem] absolute right-10 top-8' src={BonusEbook2} 
                        alt='ebook saladas e molhos'
                        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    />

                    <img 
                        className='lg:h-[28rem] h-[25rem] absolute right-72' src={BonusEbook1} 
                        alt='ebook sobremesas'
                        style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay={200}
                    />
                </div>

                {/* <div className='absolute bottom-0 -mb-1 bg-gradient-to-b bg- w-full h-[5rem] from-[rgba(255,255,255)] to-[rgba(125,217,86)] flex items-center justify-center'>
   
                </div> */}
            </section>

            <section className='w-scrren h-screen bg-[#fafafa] lg:hidden flex flex-col grid-rows-3 py-12'>
                <Typography className='ml-4' variant='h2'>Bônus exclusivo</Typography>

                <div className='h-[25rem] w-full pl-4 relative overflow-hidden flex flex-col -mt-12'>
                    <div className='w-full h-[25rem] flex items-center'>
                        <div className='w-[55%]' data-aos="fade-left" data-aos-delay={200}>
                            <Typography variant='lead' className=''>Desfrute de sobremesas que satisfazem seu paladar sem comprometer seus objetivos de saúde.</Typography>
                        </div>
                        <img 
                            src={BonusEbook2}
                            alt='ebook saladas e molhos'
                            className='lg:h-[35rem] h-[20rem] absolute -right-20' 
                            style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
                    </div>
                </div>

                <div className='h-[25rem] w-full relative overflow-hidden flex flex-col pr-4 -mt-28'>
                    <div className='w-full h-[25rem] flex items-center justify-end'>
                        <img 
                            src={BonusEbook1}
                            alt='ebook sobremesas'
                            className='h-[18rem] absolute -left-16' 
                            style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }}
                            data-aos="fade-right"
                            data-aos-delay={400}
                            data-aos-duration="1000"
                        />
                        <div 
                            className='w-[55%]'
                            data-aos="fade-right"
                            data-aos-delay={600}
                        >
                            <Typography variant='lead' className='text-right'>Cada receita é projetada para trazer novos sabores e cores à sua mesa, mantendo você no caminho certo para um estilo de vida saudável e vibrante.</Typography>
                        </div>
                    </div>
                </div>

                <Button className='mx-4' size='lg' color='green'>Garantir bônus!</Button>
                

            </section>

            <section className='w-screen h-fit lg:h-screen relative bg-[rgba(125,217,86)] -mt-16 lg:-mt-1 grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-64 lg:pt-44 pt-32 pb-12' >
                <div className='w-full absolute top-0 flex -mt-1'>
                    <svg className="w-full h-[14vh] min-h-[100px] max-h-[250px]  rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 20 200 40" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use href="#gentle-wave" x="10" y="-6" fill="rgba(250,250,250,0.8)" />
                            <use href="#gentle-wave" x="55" y="1" fill="rgba(250,250,250,0.6)" />
                            <use href="#gentle-wave" x="42" y="4" fill="rgba(250,250,250,0.2)" />
                            <use href="#gentle-wave" x="12" y="10" fill="#fafafa" />
                        </g>
                    </svg>
                </div>

                <div className='flex lg:col-span-2 lg:flex-row flex-col-reverse gap-12 '>
                    <div className='w-full h-full flex items-center justify-end '>
                        <Card className='bg-white/90 lg:max-w-[85%]' >
                            <CardHeader className='p-8 flex flex-col items-center text-white' color="green" variant='gradient' data-aos="fade-down">
                                <Typography variant='lead' className='text-2xl text-white/80'>De R$ <b className='text-3xl line-through'>189,99</b></Typography>
                                <span className='w-full justify-center flex flex-col items-center'>
                                    <Typography className='text-xl'>Por apenas 12x de</Typography>
                                    <span className='flex items-end gap-2'>
                                        <Typography className='' variant='lead'>R$</Typography>
                                        <Typography className='' variant='h1'>9,91</Typography>
                                    </span>
                                    <Typography className='text-xl'>OU À VISTA POR<b className='font-bold text-2xl'> R$ 97,00</b></Typography>
                                </span>
                                {/* <Typography variant='lead'>12x de R$<b className='text-4xl line-through'> 9,91</b></Typography> */}
                            </CardHeader>
                            <CardBody>
                                <Typography className='' variant='lead'>Levando agora, você garante os dois ebooks que te ajudação na jornada de <b className='font-bold'>manter o peso perdido</b>:</Typography>
                                <div className='flex flex-col gap-4 mt-4 overflow-hidden'>
                                    <span className='flex items-center gap-4' data-aos="slide-right">
                                        <div className='h-[3rem] w-[3rem] bg-green-300 rounded-lg flex items-center justify-center text-white'>
                                            <Salad />
                                        </div>
                                        <div className='w-[80%]'>
                                            <Typography variant='lead' className=''>Receitas Criativas de Saladas e Molhos</Typography>
                                            <Typography variant='small'>mais cor e sabor nas suas refeições</Typography>
                                        </div>
                                    </span>
                                    <span className='flex items-center gap-4 ' data-aos="slide-right" data-aos-delay={400}>
                                        <div className='h-[3rem] w-[3rem] bg-red-300 rounded-lg flex items-center justify-center text-white'>

                                            <CakeSlice />
                                        </div>
                                        <div>
                                            <Typography variant='lead'>Sobremesas Saudáveis</Typography>
                                            <Typography variant='small'>Emagrecendo com prazer</Typography>
                                        </div>
                                    </span>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Button className='' fullWidth size='lg' color='green' variant='gradient'>Garanta agora</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className='w-full h-full'>
                        <img src={Ebook2} alt='Ebook como manter o peso perdido' className='lg:h-[40rem] h-[22rem] object-cover object-center -ml-4' data-aos="fade-up"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export { Ebook };