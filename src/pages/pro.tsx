import React from 'react';
import MainBg from '../assets/bg/ATLETAS-3-optimized.png';
import { Typography } from '@material-tailwind/react';
import { CustomNavbar } from '../components/Navbar';
import { DialogWithImage } from '../components/TestComponents/ImageModal';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { athletes, videos } from '../data/globalData';
import { VideoCard } from '../components/VideoCard';
import { VideoCardMobile } from '../components/VIdeoCardMobile';

function Pro(): JSX.Element {
    const [showNav, setShowNav] = React.useState<boolean>(false);


    setTimeout(() => {
        setShowNav(true);
    }, 1900);

    React.useEffect(() => {
        Aos.init({duration: 500});
    }, []);

    return (
        <>
            {showNav && (
                <CustomNavbar isAbsolute={true} />
            )}

            <div 
                className={`relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden overflow-hidden animate-fade-in-down bg-center transition-padding duration-300 ${showNav ? 'mt-[4rem]' : ''}`} 
                style={{ backgroundImage: `url(${MainBg})` }} 
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
                    <ul className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
                        <div className='grid gap-4'>
                            {athletes.slice(0, 4).map((item, index) => (
                                <>
                                    <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                        <DialogWithImage image={item.photo} />
                                    </li>
                                </>
                            ))}
                        </div>
                        <div className='grid gap-4'>
                            {athletes.slice(4, 7).map((item, index) => (
                                <>
                                    <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                        <DialogWithImage image={item.photo} />
                                    </li>
                                </>
                            ))}
                        </div>
                        <div className='grid gap-4'>
                            {athletes.slice(7, 10).map((item, index) => (
                                <>
                                    <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                        <DialogWithImage image={item.photo} />
                                    </li>
                                </>
                            ))}
                        </div>
                        <div className='grid gap-4'>
                            {athletes.slice(10, 13).map((item, index) => (
                                <>
                                    <li data-aos="fade-down" data-aos-delay={100 * item.id} key={index} className='hover:translate-y-2'>
                                        <DialogWithImage image={item.photo} />
                                    </li>
                                </>
                            ))}
                        </div>
                    </ul>
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
                                <VideoCardMobile title={video.title} videoID={video.videoId} key={index}/>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
        </>
    );
}

export { Pro };