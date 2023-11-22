import React from 'react';
import { Carousel } from '@material-tailwind/react';

import photo1 from '../assets/photos/photo-1.jpg';
import photo2 from '../assets/photos/photo-2.jpg';
import photo3 from '../assets/photos/photo-3.jpg';
import photo4 from '../assets/photos/photo-4.jpg';
import photo5 from '../assets/photos/photo-5.jpg';
import photo6 from '../assets/photos/photo-6.jpg';
import photo7 from '../assets/photos/photo-7.jpg';
import photo8 from '../assets/photos/photo-8.jpg';
 
function CarouselCustomNavigation(): JSX.Element {
    return (
        <Carousel
            autoplay
            autoplayDelay={2000}
            loop={true}
            className="rounded-xl max-w-[30rem] h-[30rem] shadow-md"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill('').map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <img
                src={photo1}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo2}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo3}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo4}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo5}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo6}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo7}
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src={photo8}
                alt="image 1"
                className="h-full w-full object-cover"
            />

        </Carousel>
    );
}

export { CarouselCustomNavigation };