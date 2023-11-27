import React from 'react';
import { Typography, IconButton } from '@material-tailwind/react';
import { Instagram, Youtube } from 'lucide-react';
const links = ['Company', 'About Us', 'Team', 'Products', 'Blog', 'Pricing'];
const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="p-10 pb-16 md:px-28 md:pt-20 bg-white">
            <div className="container mx-auto flex flex-col items-center">
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