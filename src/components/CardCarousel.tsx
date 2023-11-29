import React from 'react';
import { Avatar, Card, CardBody, CardHeader, Carousel, IconButton, Typography } from '@material-tailwind/react';
import { testimonials } from '../data/globalData';

import Aos from 'aos';
import 'aos/dist/aos.css';
interface TestimonialCardPropsType {
    img: string;
    feedback: string;
    client: string;
    title: string;
  }
  
export function TestimonialCard({
    img,
    feedback,
    client,
    title,
}: TestimonialCardPropsType) {
    
    React.useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <Card className="items-center text-center h-full">
            <CardHeader
                shadow={false}
                className="absolute -top-8 rounded-full"
            >
                <Avatar src={img} alt={client} size="xxl" />
            </CardHeader>
            <CardBody className="mt-16 flex flex-col items-center justify-center">
                <Typography variant="h6" color="blue-gray">
                    {client}
                </Typography>
                <Typography
                    variant="small"
                    className="mb-5 mt-1 font-medium !text-gray-500"
                >
                    {title}
                </Typography>
                <Typography
                    variant="paragraph"
                    className="mb-2 font-normal !text-gray-500"
                >
            &quot;{feedback}&quot;
                </Typography>
            </CardBody>
        </Card>
    );
}
 
export function CarouselCustomArrows() {

    return (
        <Carousel
            className="rounded-xl"
            loop={true}
            autoplay
            autoplayDelay={4000}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </IconButton>
            )}
        >
            <div className="mt-16 grid gap-28 gap-x-10 md:grid-cols-2 lg:grid-cols-3 pb-4" >
                {testimonials.slice(0, 3).map((props, key) => (
                    <TestimonialCard key={key} {...props} />
                ))}
            </div>
            <div className="mt-16 grid gap-28 gap-x-10 md:grid-cols-2 lg:grid-cols-3 pb-4" >
                {testimonials.slice(3, 6).map((props, key) => (
                    <TestimonialCard key={key} {...props} />
                ))}
            </div>
    

        </Carousel>
    );
}