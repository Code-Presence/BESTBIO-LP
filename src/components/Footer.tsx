import React from 'react';
import { Typography, IconButton } from '@material-tailwind/react';
import { Instagram, Mail, Youtube } from 'lucide-react';

import { Link } from 'react-scroll';

import Whats from '../assets/icons/whatsapp.svg';

import { useNavigate } from 'react-router-dom';

const links = [
    {hasScroll: true, label: 'Quem somos', path: 'who-we-are'},
    {hasScroll: true, label: 'Depoimentos', path: 'testimonials'},
    {hasScroll: true, label: 'Serviços', path: 'our-services'},
    {hasScroll: false, label: 'Presencial', path: '/presencial'},
    {hasScroll: false, label: 'Online', path: '/online'},
];
const links2 = ['Claim', 'Privacy', 'Terms'];
const currentYear = new Date().getFullYear();


function Footer() {
    const navigate = useNavigate();

    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <footer className="px-4 pt-10 bg-white lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-start justify-center gap-8 md:justify-between">
                    <div className="text-center md:text-left">
                        <Typography variant="h4" className="mb-6">
                            BestBio
                        </Typography>
                        <ul className="flex flex-wrap items-center justify-center md:justify-start">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        to={link.hasScroll && `${link.path}`}
                                        smooth={true} 
                                        offset={-50} 
                                        duration={500} 
                                    >
                                        <Typography
                                            className={`py-1 font-medium !text-gray-700 transition-colors hover:!text-gray-900 cursor-pointer ${
                                                index === 0 ? 'pr-3' : 'px-3'
                                            }`}
                                            onClick={() => {
                                                !link.hasScroll && handleNavigate(link.path);
                                            }}
                                        >
                                            {link.label}
                                        </Typography>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex w-full gap-2 sm:w-fit mt-6">
                            <IconButton variant="text" size="lg" color="gray" id='whatsapp'>
                                <img loading="lazy"  src={Whats} className='' alt='ínoce do whatsapp'/>
                            </IconButton>
                            <IconButton variant="text" size="lg" color="gray" id='youtube' onClick={() => openInNewTab('https://www.youtube.com/@BestBioBrasil')}>
                                <Youtube />
                            </IconButton>
                            <IconButton variant="text" size="lg" color="gray" id='instagram' onClick={() => openInNewTab('https://www.instagram.com/chikaofreitas/')}>
                                <Instagram />
                            </IconButton>
                            <IconButton variant="text" size="lg" color="gray" id='email'>
                                <Mail/>
                            </IconButton>
                        </div>
                    </div>
                    <div className="w-full sm:w-[24rem] sm:min-w-[24rem]">
                        <iframe 
                            title='mapa'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.436087608727!2d-35.204531425012966!3d-5.79391349418884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301b34d82cab1%3A0xc00b1f5ce6d3dc38!2sICTUS%20%7C%20Preven%C3%A7%C3%A3o%20e%20Performance%20em%20Cardiologia!5e0!3m2!1spt-BR!2sbr!4v1701204909400!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="300" 
                            style={{border:0}} 
                            className='rounded-xl shadow-md border'
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
                    <Typography className="text-center font-normal !text-gray-700 hover:scale-110 transition-all cursor-pointer" onClick={() => openInNewTab('hhtps://codepresence.com')}>
            &copy; {currentYear} <strong className=''>Code Presence™</strong>. Todos os direitos reservados.
                    </Typography>

                    <ul className="flex items-center">
                        {links2.map((link, idx) => (
                            <li key={link}>
                                <Typography
                                    as="a"
                                    href="#"
                                    className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${
                                        idx === links2.length - 1 ? 'pl-2' : 'px-2'
                                    }`}
                                >
                                    {link}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export { Footer };