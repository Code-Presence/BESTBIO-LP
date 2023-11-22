import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react';

interface IFeatureCardProps {
    img: string;
    title: string;
    content: string;
}
  
function FeatureCard({img, title, content}: IFeatureCardProps): JSX.Element {
    return (
        <section className="grid h-screen place-items-center p-4">
            <Card className="w-auto max-w-[24rem] shadow-2xl">
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
                        <Button color="gray" variant="outlined" size="sm">
                        um botão
                        </Button>
                        <Button color="gray" variant="filled" size="sm">
                        oto botão
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </section>
    );
}
  
export { FeatureCard };