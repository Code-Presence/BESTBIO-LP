import React from 'react';
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    Typography,
} from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { Phone } from 'lucide-react';

import Logo from '../assets/logo.png';

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
    return (
        <li>
            <Typography
                as="a"
                href="#"
                variant="paragraph"
                color="gray"
                className="flex items-center gap-2 font-medium text-ggray-100"
            >
                {children}
            </Typography>
        </li>
    );
}

function CustomNavbar() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            'resize',
            () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    return (
        <>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-0 bg-[#1b1b1b]">
                <div className="container mx-auto flex items-center justify-between">
                  
                    <img src={Logo}/>
                    <ul className="ml-10 hidden items-center gap-8 lg:flex">
                        <NavItem>
                            Home
                        </NavItem>
                        <NavItem>
                          Planos presenciais
                        </NavItem>
                        <NavItem>
                          Planos online
                        </NavItem>
                    </ul>
                    <div className="hidden items-center gap-4 lg:flex">
                        <Button className='flex items-center gap-2 bg-[#7ED956]'>
                            Fale conosco
                            <Phone size={20}/>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        color="gray"
                        onClick={handleOpen}
                        className="ml-auto inline-block lg:hidden"
                    >
                        {open ? (
                            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
                        ) : (
                            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
                        )}
                    </IconButton>
                </div>
                <Collapse open={open}>
                    <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
                        <ul className="flex flex-col gap-4">
                            <NavItem>
                            Home
                            </NavItem>
                            <NavItem>
                          Planos presenciais
                            </NavItem>
                            <NavItem>
                          Planos online
                            </NavItem>
                        </ul>
                        <div className="mt-6 mb-4 flex items-center gap-4">
                            <Button color="green">Fale conosco</Button>
                        </div>
                    </div>
                </Collapse>
            </Navbar>
        </>
    );
}

export {CustomNavbar};