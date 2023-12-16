import React from 'react';
import MainBg from '../assets/bg/ATLETAS-3-optimized.png';
import MainBgBlurry from '../assets/bg/atletas-blurry.webp';
import { Button, Carousel, IconButton, Typography } from '@material-tailwind/react';
import { CustomNavbar } from '../components/Navbar';
import { DialogWithImage } from '../components/TestComponents/ImageModal';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { athletes, videos } from '../data/globalData';
import { VideoCard } from '../components/VideoCard';
import { VideoCardMobile } from '../components/VIdeoCardMobile';

import Whats from '../assets/icons/whatsapp.svg';

function Pro(): JSX.Element {
    const [showNav, setShowNav] = React.useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    setTimeout(() => {
        setShowNav(true);
    }, 1900);

    React.useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    React.useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = MainBg;
    }, [MainBg]);


    const sendToWhatsapp = () => {
        const url = 'https://wa.me/5584994301633?text=Olá,%20quero%20alcançar%20novos%20patamares%20no%20meu%20desempenho!';
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <>
            {showNav && (
                <CustomNavbar isAbsolute={true} />
            )}

            <div 
                className={`relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden overflow-hidden animate-fade-in-down bg-center transition-padding duration-300 ${showNav ? 'mt-[4rem]' : ''}`} 
                style={{ backgroundImage: imageLoaded ? `url(${MainBg})` : `url(${MainBgBlurry})`}} 
            >
                <div className="absolute inset-0 h-full w-full backdrop-blur-[2px] flex flex-col px-4 lg:px-40 gap-4 pt-24 bg-[#000]/80 " data-aos="zoom-out-down" data-aos-delay="1000">
                    <div data-aos="fade-right" data-aos-delay="2200">
                        <Typography
                            variant="lead" 
                            className="text-white "
                        >Oportunidade de mundança</Typography>
                        <Typography 
                            variant="h1" 
                            className="  font-racing text-customMedium xl:text-customBig leading-none overflow-hidden pl-2" 
                            style={{ fontWeight: '400', color: '#7ED956'}}>
                         Alcance a máxima performance
                        </Typography>



                        <Typography variant="lead" className="text-white ">
                            <hr  className='w-[20%] border-[#7ED956] mb-2 mt-5'/>
                            Alcance o Ápice do Seu Desempenho Físico e Mental
                            <br />
                                Atinja o próximo nível com quem entende.
                            <br />
                                 você terá acesso às estratégias nutricionais e de treinamento que 
                            <br/> 
                                 transformaram atletas comuns em lendas do esporte brasileiro.
                            <hr  className='w-[20%] border-[#7ED956] mt-4'/>
                        </Typography>

                        <Button size='lg' className='bg-[#7ED956] mt-6 text-gray flex items-center gap-2' onClick={() => sendToWhatsapp()}>
                            Transforme sua Vida Agora 
                            <img loading="lazy"  src={Whats} className='w-4' alt='ínoce do whatsapp'/>
                        </Button>
                    </div>
                </div>
            </div>
            <div className='w-screnn h-fit bg-white p-6 lg:px-40 flex flex-col gap-6 py-12 transition-all animate-fade-in-down'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <Typography variant="lead" style={{ fontWeight: '600', color: '#7ED956'}}>EM BOAS MÃOS</Typography>
                    <Typography variant="h1"  className="text-4xl" style={{ color: '#1b1b1b'}}>Conheça Nossos Atletas de Elite</Typography>
                    <Typography variant="lead" className='mt-6 lg:text-center text-justify' style={{ color: '#1b1b1b'}}>Na jornada rumo à excelência atlética, a escolha do acompanhamento nutricional e preparação física é crucial. Nossa galeria de atletas de alta performance é um testemunho vivo do sucesso que alcançamos em parceria com esses verdadeiros campeões.</Typography>
                </div>
                <div className='h-fit w-full flex flex-col items-center justify-center'>
                    <Carousel
                        autoplay
                        autoplayDelay={10000}
                        loop={true}
                        className="py-6"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                id='voltar'
                                variant="filled"
                                size="lg"
                                color='green'
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4 "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                id='avançar'
                                variant="filled"
                                size="lg"
                                color='green'
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </IconButton>
                        )}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill('').map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                            activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                                        }`}
                                        onClick={() => setActiveIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    >
                        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
                            <div className='grid gap-4'>
                                {athletes.slice(0, 4).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash}/>
                                        </li>
                                    </>
                                ))}
                            </div>
                            <div className='grid gap-4'>
                                {athletes.slice(4, 7).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo}hash={item.imgHash} />
                                        </li>
                                    </>
                                ))}
                            </div>
                            <div className='grid gap-4'>
                                {athletes.slice(7, 10).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash}/>
                                        </li>
                                    </>
                                ))}
                            </div>
                            <div className='grid gap-4'>
                                {athletes.slice(10, 13).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash}/>
                                        </li>
                                    </>
                                ))}
                            </div>
                        </ul>

                        <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
                            <div className='grid gap-4'>
                                {athletes.slice(13, 16).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash}/>
                                        </li>
                                    </>
                                ))}
                            </div>
                            <div className='grid gap-4'>
                                {athletes.slice(16, 19).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash}/>
                                        </li>
                                    </>
                                ))}
                            </div>
                            <div className='grid gap-4'>
                                {athletes.slice(19, 21).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash}/>
                                        </li>
                                    </>
                                ))}
                            </div>
                            <div className='grid gap-4'>
                                {athletes.slice(21, 24).map((item, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                            <DialogWithImage image={item.photo} hash={item.imgHash} />
                                        </li>
                                    </>
                                ))}
                            </div>
                        </ul>
                    </Carousel>
                    
                </div>
            </div>
            <div className='w-screnn h-fit p-6 lg:px-40 flex flex-col gap-6 py-12'>
                <div className='w-full flex flex-col items-center justify-center mb-6'>
                    <Typography variant="lead" style={{ fontWeight: '600', color: '#7ED956'}}>O Conhecimento que Transforma</Typography>
                    <Typography variant="h1"  className="text-4xl" style={{ color: '#fff'}}>Explore Nossa Galeria de Vídeos</Typography>
                </div>
                
                <ul className='lg:grid grid-cols-2 lg:grid-cols-3 gap-4 hidden'>
                    {videos.map((video, index) => (
                        <>
                            <li data-aos="fade-down" data-aos-delay={100 * video.id}>
                                <VideoCard title={video.title} videoID={video.videoId} key={index}/>
                            </li>
                        </>
                    ))}
                </ul>
                <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:hidden'>
                    {videos.slice(0, 5).map((video, index) => (
                        <>
                            <li data-aos="fade-down" data-aos-delay={100 * video.id}>
                                <VideoCardMobile videoID={video.videoId} key={index}/>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <div 
                data-aos="zoom-out-down" data-aos-delay="1000"
                className={'relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden overflow-hidden bg-center '} 
                style={{ backgroundImage: `url(${MainBg})` }} 
            >
                <div className="absolute inset-0 h-full w-full backdrop-blur-[1px] flex flex-col px-4 lg:px-40 gap-4 pt-24 bg-[#fff]/90 backdrop-grayscale" >
                    {/* <Typography variant='h2'>Desperte o Campeão em Você!</Typography>
                    <Typography variant='h5'>Treinamento de elite, experiência comprovada e orientação personalizada</Typography>
                    <Button size='lg' className='bg-[#7ED956] mt-6 text-gray flex items-center gap-2 text-gray' onClick={() => sendToWhatsapp()}>
                            Transforme sua Vida Agora 
                        <img loading="lazy"  src={Whats} className='w-4' alt='ínoce do whatsapp'/>
                    </Button> */}
                </div>
            </div>
        </>
    );
}

export { Pro };