import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Tooltip,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

interface IFeatureCardProps {
    img: string;
    title: string;
    content: string;
}
  
const FeatureCard = React.memo(({ img, title, content }: IFeatureCardProps): JSX.Element => {
    const animation = 'animate-fade-in-down2';
    const navigate = useNavigate();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <section className={`grid h-fit place-items-center p-4 ${animation}`}>
            <Card className="w-auto lg:max-w-[24rem] shadow-2xl">
                <CardHeader color="gray" className="relative h-56">
                    <img
                        src={img}
                        alt="img-blur-shadow"
                        className="h-full w-full object-cover"
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
                    <Typography color="gray" className="mb-6 font-normal min-h-[15rem]">
                        {content}
                    </Typography>
                    <div className='flex width-full justify-between'>
                        <Button variant="outlined" size="sm" >
                        um botão
                        </Button>
                        <Tooltip content="saiba mais">
                            <Button variant="filled" size="sm" onClick={() => navigate('/online')}>
                                Online
                            </Button>
                        </Tooltip>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
});

FeatureCard.displayName = 'FeatureCard';
  
export { FeatureCard };