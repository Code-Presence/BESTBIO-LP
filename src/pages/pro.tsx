import React from 'react';
import MainBg from '../assets/bg/ATLETAS-3-optimized.png';
import MainBgBlurry from '../assets/bg/atletas-blurry.webp';
import { Button, Card, CardBody, CardHeader, Carousel, Collapse, IconButton, Typography } from '@material-tailwind/react';
import { CustomNavbar } from '../components/Navbar';
import { DialogWithImage } from '../components/TestComponents/ImageModal';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { athletes, news, videos } from '../data/globalData';
import { VideoCard } from '../components/VideoCard';
import { VideoCardMobile } from '../components/VIdeoCardMobile';

import Whats from '../assets/icons/whatsapp.svg';
import { ExternalLink } from 'lucide-react';

function Pro(): JSX.Element {
    const [showNav, setShowNav] = React.useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const [open, setOpen] = React.useState(false);
 
    const toggleOpen = () => setOpen((cur) => !cur);

    setTimeout(() => {
        setShowNav(true);
    }, 1900);

    React.useEffect(() => {
        // window.scrollTo(0, 0);

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

    const openInNewTab = (url) => {
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
            <div className='w-screnn h-fit min-h-screen bg-white p-6 lg:px-40 flex flex-col gap-6 py-12 transition-all animate-fade-in-down'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <Typography variant="lead" style={{ fontWeight: '600' }} color='green'>EM BOAS MÃOS</Typography>
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
            <div className='w-screnn h-fit min-h-screen p-6 lg:px-40 flex flex-col gap-6 py-12'>
                <div className='w-full flex flex-col items-center justify-center mb-6'>
                    <Typography variant="lead" style={{ fontWeight: '600', color: '#7ED956'}}>O Conhecimento que Transforma</Typography>
                    <Typography variant="h1"  className="text-4xl" style={{ color: '#fff'}}>Explore Nossa Galeria de Vídeos</Typography>
                </div>
                
                <ul className='lg:grid grid-cols-2 lg:grid-cols-3 gap-4 hidden'>
                    {videos.slice(0,6).map((video, index) => (
                        <>
                            <li data-aos="fade-down" data-aos-delay={100 * video.id}>
                                <VideoCard title={video.title} videoID={video.videoId} key={index}/>
                            </li>
                        </>
                    ))}
                </ul>
                <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:hidden'>
                    {videos.slice(0, 3).map((video, index) => (
                        <>
                            <li data-aos="fade-down" data-aos-delay={100 * video.id}>
                                <VideoCardMobile videoID={video.videoId} key={index}/>
                            </li>
                        </>
                    ))}
                </ul>
                <div className='w-full gap-6 mt-2'>
                    <div className='w-full flex items-center justify-center'>
                        <Button onClick={toggleOpen} color='green' size='lg'>{open ? 'Ver menos' : 'Ver mais'}</Button>
                    </div>
                    <Collapse open={open}>
                        <div>
                            <ul className='lg:grid grid-cols-2 lg:grid-cols-3 gap-4 hidden pt-6'>
                                {videos.slice(6, 12).map((video, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * video.id}>
                                            <VideoCard title={video.title} videoID={video.videoId} key={index}/>
                                        </li>
                                    </>
                                ))}
                            </ul>

                            <ul className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:hidden pt-6'>
                                {videos.slice(3, 9).map((video, index) => (
                                    <>
                                        <li data-aos="fade-down" data-aos-delay={100 * video.id}>
                                            <VideoCardMobile videoID={video.videoId} key={index}/>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>


                    </Collapse>
                </div>
                

            </div>

            <div  className='relative w-full bg-red-50 h-fit items-center flex'
                style={{ backgroundImage: `url(${MainBg})`}} 
            >
                <div className="px-4 lg:px-40 py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center bg-[#fff]/95 backdrop-blur-[1px] backdrop-grayscale h-full w-full">
                    <div className=' flex flex-col justify-center h-fit '>
                        <Typography variant="lead" style={{ fontWeight: '600'}} color='green'>Estamos na mídia</Typography>

                        <Typography variant="h1"  className="text-4xl" style={{ color: '#1b1b1b'}}>Bestbio em Todos os Lugares</Typography>

                        <div className='w-full pr-16 flex flex-col gap-6 mt-6'>
                            <Typography variant="paragraph"  className="text-lg" style={{ color: '#1b1b1b'}}>As notícias estão repletas de relatos sobre a eficácia dos nossos métodos. De pequenos blogs a grandes portais de notícias, todos estão falando sobre como estamos transformando o setor.</Typography>
                            <Typography variant="paragraph"  className="text-lg" style={{ color: '#1b1b1b'}}>Não fique de fora dessa revolução em alta performance e longevidade. Explore as notícias e veja como a Bestbio está estabelecendo novos padrões para saúde e desempenho humano.</Typography>
                        </div>

                        <Button size='lg' className='w-fit mt-12' color='green'>Entre em contato</Button>
                    </div>
                    <div className='grid grid-cols-1 gap-4'>
                        {news.map((news, index) => (
                            <div className='flex flex-row rounded-lg bg-white overflow-hidden border justify-between shadow-lg' data-aos={'fade-left'} key={index} data-aos-delay={100 * index}>
                                <aside className='w-[12rem] h-[100%] bg-cover bg-no-repeat bg-center hidden lg:inline' style={{ backgroundImage: `url(${news.imageUrl})` }}/>

                                <div className='w-full gap-4 lg:w-[70%] p-4 flex flex-col justify-between items-end'>
                                    <span className=''>
                                        <Typography variant='h5' className=''>{news.headline}</Typography>
                                    </span>

                                    <Button 
                                        size='sm' 
                                        color='green' 
                                        className='flex items-center justify-center gap-2 lg:w-fit w-full'
                                        onClick={() => openInNewTab(news.url)}>Ver notícia <ExternalLink size={18}/> </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export { Pro };