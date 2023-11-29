import React from 'react';
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    Typography,
} from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Logo from '../assets/logo.png';

import { useNavigate } from 'react-router-dom';

import Whats from '../assets/icons/whatsapp.svg';

function CustomNavbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const navigate = useNavigate();

    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    return (
        <>
            <Navbar className={' sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-0 bg-[#1b1b1b]'}>
                <div className="container mx-auto flex items-center justify-between">
                  
                    <img src={Logo} alt='logo-marca' className='w-28 lg:w-32'/>
                    <ul className="ml-10 hidden items-center gap-8 lg:flex">
                        <Typography
                            onClick={() => navigate('/')} 
                            className='hover:cursor-pointer hover:scale-110 transition-all z-10 relative  hover:text-[#7ED956]'
                        >
                            Home
                        </Typography>
                        <Typography 
                            onClick={() =>  {
                                navigate('/presencial'),
                                window.scrollTo(0, 0);
                            }} 
                            className='hover:cursor-pointer hover:scale-110 transition-all z-20 relative  hover:text-[#7ED956]'
                        >
                          Planos presenciais
                        </Typography>
                        <Typography
                            onClick={() => {navigate('/online'), window.scrollTo(0, 0);}} 
                            className='hover:cursor-pointer hover:scale-110 transition-all z-30 relative hover:text-[#7ED956]'
                        >
                          Planos online
                        </Typography>
                    </ul>
                    <div className="hidden items-center gap-4 lg:flex">
                        <Button className='flex items-center gap-2 bg-[#7ED956] text-blue-gray-900'>
                            Fale conosco
                            {/* <Phone size={20}/> */}
                            <img src={Whats} className='w-4'/>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        color="gray"
                        onClick={handleOpen}
                        className="ml-auto inline-block lg:hidden"
                    >
                        {open ? (
                            <XMarkIcon strokeWidth={2} className="h-6 w-6" color='white'/>
                        ) : (
                            <Bars3Icon strokeWidth={2} className="h-6 w-6" color='white'/>
                        )}
                    </IconButton>
                </div>
                <Collapse open={open}>
                    <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
                        <ul className="flex flex-col gap-4">
                            <Typography 
                                onClick={() => navigate('/')} 
                                className="flex items-center gap-2 font-medium text-gray-100"
                            >
                            Home
                            </Typography>
                            <Typography
                                onClick={() => {navigate('/presencial'), window.scrollTo(0, 0);}} 
                                className="flex items-center gap-2 font-medium text-gray-100"
                            >
                          Planos presenciais
                            </Typography>
                            <Typography
                                onClick={() => {navigate('/online'), window.scrollTo(0, 0);}} 
                                className="flex items-center gap-2 font-medium text-gray-100"
                            >
                          Planos online
                            </Typography>
                        </ul>
                        <div className="mt-6 mb-4 flex items-center gap-4">
                            <Button className='bg-[#7ED956] text-blue-gray-900'>Fale conosco</Button>
                        </div>
                    </div>
                </Collapse>
            </Navbar>
        </>
    );
}

export {CustomNavbar};