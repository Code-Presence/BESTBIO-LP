import React from 'react';
import MainBg from '../assets/bg/ATLETAS-3-optimized.png';
import { Typography } from '@material-tailwind/react';
import { CustomNavbar } from '../components/Navbar_nostick_absolute';

function Pro(): JSX.Element {
    const [showNav, setShowNav] = React.useState<boolean>(false);

    setTimeout(() => {
        setShowNav(true);
    }, 1900);
    return (
        <>
            {showNav && (
                <CustomNavbar />
            )}

            <div className={`relative h-screen w-full bg-cover bg-no-repeat overflow-x-hidden overflow-hidden animate-fade-in-down bg-center transition-padding duration-300 ${showNav ? 'mt-[4rem]' : ''}`} style={{ backgroundImage: `url(${MainBg})` }} 
            >
                <div className="absolute inset-0 h-full w-full backdrop-blur-[2px] flex flex-col px-6 xl:px-40 gap-4 pt-24 bg-[#000]/80 " data-aos="zoom-out-down" data-aos-delay="1000">
                    <div data-aos="slide-right" data-aos-delay="2200">
                        <Typography
                            variant="lead" 
                            className="text-white "
                        >Oportunidade de mundança</Typography>
                        <Typography 
                            variant="h1" 
                            className="  font-racing text-customMedium xl:text-customBig leading-none overflow-hidden" 
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
        </>
    );
}

export { Pro };