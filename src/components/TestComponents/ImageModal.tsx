import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Card,
} from '@material-tailwind/react';
import { Blurhash } from 'react-blurhash';
 
interface IDialogWithImageProps {
    image: string;
    hash: string;
}

export function DialogWithImage({ image, hash }: IDialogWithImageProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    const [imageLoaded, setImageLoaded] = React.useState(false);

    React.useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = image;
    }, [image]);
 
    return (
        <>
            <Card
                className="h-auto max-w-full cursor-pointer overflow-hidden transition-all hover:opacity-90 hover:-translate-y-2 hover:shadow-lg"
                onClick={handleOpen}
            >
                <>
                    <div style={{ display: imageLoaded ? 'none' : 'inline'}}>
                        <Blurhash 
                            hash={hash}
                            width={350}
                            height={200}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>

                </>
                <img
                    alt="nature"
                    loading="lazy" 
                    className="h-full w-full object-cover object-center"
                    src={image}
                    style={{ display: !imageLoaded ? 'none' : 'inline'}}
                />
            </Card>
            <Dialog open={open} handler={handleOpen} className='flex flex-col items-center justify-center'>
                <DialogHeader className='flex items-end justify-end -mb-4 w-full'>
                    <Button
                        size="sm"
                        variant="outlined"
                        color="blue-gray"
                        className="flex items-center"
                        onClick={handleOpen}
                    >
                        Fechar
                    </Button>
                </DialogHeader>
                <DialogBody className='w-fit'>
                    <img
                        alt="nature"
                        className="h-[40rem] w-auto rounded-lg object-cover object-center"
                        src={image}
                        loading='lazy'
                    />
                </DialogBody>

            </Dialog>
        </>
    );
}