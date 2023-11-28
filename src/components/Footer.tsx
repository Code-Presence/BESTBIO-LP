import React from 'react';
import { Typography, IconButton } from '@material-tailwind/react';
import { Instagram, MapPin, Youtube } from 'lucide-react';
const links = ['Company', 'About Us', 'Team', 'Products', 'Blog', 'Pricing'];
const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="p-10 pb-16 md:px-28 md:pt-20 bg-white border-t-2">
            <div className="container mx-auto flex flex-col items-center">

                <div className='flex w-full items-center gap-6 justify-center flex-col mb-4'>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.424988950068!2d-35.2037384241414!3d-5.795492094187338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b300105f47fcc9%3A0x5f7fcaeb7bbc3105!2sAv.%20Rodrigues%20Alves%2C%201069%20-%20Tirol%2C%20Natal%20-%20RN%2C%2059020-255!5e0!3m2!1spt-BR!2sbr!4v1701198180106!5m2!1spt-BR!2sbr" 
                        width="400" 
                        height="250" 
                        className='rounded-md shadow-md'
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className='flex items-center gap-2'>
                        <MapPin />
                Av. Rodrigues Alves, 1069, Sala 113, Tirol, Natal/RN - 59020-255
                    </div>
                </div>

                <div className="grid w-full grid-cols-3 place-items-center items-center justify-center gap-4 pb-8 md:flex ">
                    {links.map((link, index) => (
                        <ul key={index} className="">
                            <li>
                                <Typography
                                    as="a"
                                    href="#"
                                    color="white"
                                    className="font-normal !text-gray-700 transition-colors hover:!text-gray-700 "
                                >
                                    {link}
                                </Typography>
                            </li>
                        </ul>
                    ))}
                </div>

                <div className="flex w-full gap-2 sm:w-fit">
                    <IconButton variant="text" size="sm" color="gray">
                        <i className="fa-brands fa-twitter text-lg" />
                    </IconButton>
                    <IconButton variant="text" size="sm" color="gray">
                        <Youtube />
                    </IconButton>
                    <IconButton variant="text" size="sm" color="gray">
                        <Instagram />
                    </IconButton>
                    <IconButton variant="text" size="sm" color="gray">
                        <i className="fa-brands fa-github text-lg" />
                    </IconButton>
                </div>
                
                <Typography
                    color="blue-gray"
                    className="mt-8 text-center !text-sm font-normal text-gray-700"
                >
                    Todos os direitos reservados. &copy; {currentYear} BestBio
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mt-2 text-center !text-sm font-normal text-gray-700"
                >
                    Desenvolvido por 
                    <strong>
                        {' '}Code Presence
                    </strong>
                </Typography>
            </div>
        </footer>
    );
}
export {Footer};