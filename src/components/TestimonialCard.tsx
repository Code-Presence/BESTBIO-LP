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
  
function TestimonialCard({
    img,
    feedback,
    client,
    title,
}: TestimonialCardPropsType) {
    return (
        <Card className="items-center text-center mt-28">
            <CardHeader
                shadow={false}
                className="absolute -top-8 rounded-full"
            >
                <Avatar src={img} alt={client} size="xxl" />
            </CardHeader>
            <CardBody className="">
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

export { TestimonialCard };