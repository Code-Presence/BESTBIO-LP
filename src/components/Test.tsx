
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from '@material-tailwind/react';
  
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
    return (
        <Card className="items-center text-center">
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
  
const testimonials = [
    {
        feedback:
        'The connections you make at Web Summit are unparalleled, we met users all over the world.',
        client: 'Jessica Devis',
        title: 'CEO @ MARKETING DIGITAL LTD..',
        img: 'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar1.jpg',
    },
    {
        feedback:
        'Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.',
        client: 'Linde Michel',
        title: 'MARKETING @ APPLE INC.',
        img: 'https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/avatar2.jpg',
    },
    {
        feedback:
        'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.',
        client: 'Misha Stam',
        title: 'DESIGNER @ APPLE INC.',
        img: 'https://material-taillwind-pro-ct-tailwind-team.vercel.app/image/avatar7.svg',
    },
];
  
export function TestimonialSection9() {
    return (
        <section className="px-10 py-16 lg:py-10">
            <div className="container mx-auto">
                <div className="grid gap-28 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((props, key) => (
                        <TestimonialCard key={key} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
  
export default TestimonialSection9;