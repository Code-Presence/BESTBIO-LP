import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import '../index.css';
import { CustomNavbar } from '../components/Navbar';

function Main(): JSX.Element {

    return (
        <div className="w-full h-screen bg-[#000] overflow-hidden">
            <CustomNavbar />

            <div className="relative min-h-screen w-full bg-[url('https://bestbio.com.br/wp-content/uploads/2023/04/Foto-Maciel-Lopes110-scaled.jpg')] bg-cover bg-no-repeat">
                <div className="bg-black absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm flex flex-col px-4 xl:px-80 justify-center gap-4">

                    <Typography variant="lead" className="text-white">Oportunidade de mundança</Typography>
                    <Typography 
                        variant="h1" 
                        className="font-racing text-customMedium xl:text-customBig leading-none" 
                        style={{ fontWeight: '400', color: '#7ED956'}}>
                        Consultoria <br/> Fitness
                    </Typography>



                    <Typography variant="lead" className="text-white">
                        <hr  className='w-[20%] border-[#7ED956] mb-2 mt-5'/>
                        Alcance a boa forma com saúde, de maneira sustentável e definitiva 
                        <br/> 
                        com a orientação de um dos maiores especialistas do país em 
                        <br />
                        emagrecimento e performance.
                        <hr  className='w-[20%] border-[#7ED956] mt-4'/>
                    </Typography>

                    <Button className='w-fit bg-[#7ED956] text-black'>Comece hoje a sua mudança</Button>
                </div>
        
            </div>  
        </div>
    );
}

export { Main };