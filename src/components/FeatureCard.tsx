import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { Blurhash } from 'react-blurhash';
interface IFeatureCardProps {
    image: string;
    title: string;
    content: string;
}
  
const FeatureCard = React.memo(({ image, title, content }: IFeatureCardProps): JSX.Element => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = React.useState(false);

    React.useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = image;
    }, [image]);
    
    return (
        <section className={'grid h-fit place-items-center p-4'}>
            <Card className="w-auto lg:max-w-[24rem] shadow-2xl">
                <CardHeader color="gray" className="relative h-56">
                    <div style={{ display: imageLoaded ? 'none' : 'inline'}}>
                        <Blurhash
                            hash='LaLgw*?^IoxZ?bRiIAt89GjERQWB'
                            width={350}
                            height={250}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>
                    <img 
                        loading="lazy" 
                        src={image}
                        alt="img-blur-shadow"
                        className="h-full w-full object-cover"
                        style={{ display: !imageLoaded ? 'none' : 'inline'}}
                    />
                </CardHeader>
                <CardBody className='h-[100%]'>
                    <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mt-1 mb-2 font-medium"
                    >
                        {title}
                    </Typography>
                    <Typography color="gray" className="mb-5 font-normal min-h-[15rem]">
                        {content}
                    </Typography>
                    <div className='flex flex-col justify-between'>
                        <Typography variant='small'>Saiba mais</Typography>
                        <hr className='w-full border-gray-300 mt-1 mb-2'/>
                        <div className='w-full flex justify-between'>

                            <Button  
                                id='plano presencial'
                                aria-label='plano presencial'
                                variant="outlined" 
                                size="sm" 
                                onClick={() => navigate('/presencial')} 
                            >
                            Presencial
                            </Button>
                            <Button 
                                id='plano online'
                                aria-label='plano online'
                                variant="filled" 
                                size="sm" 
                                className='bg-[#7ED956] text-[#2f5121]'
                                onClick={() => navigate('/online')}
                            >
                                Online
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
});

FeatureCard.displayName = 'FeatureCard';
  
export { FeatureCard };