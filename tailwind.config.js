/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            fontFamily: {
                'racing': ['"Racing Sans One"', 'sans-serif']
            },
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, black, black 25%, white 25%, white)',
            },
            color: {
                best: {
                    green: '7ED956',
                }
            },
            fontSize: {
                customBig: '123px',
                customMedium: '62px'
            },
            keyframes: {
                fadeOut: {
                    '0%': { opacity: 1 },
                    '100%': { opacity: 0 },
                },
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                fadeInLeft: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(-100px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
                fadeInRight: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateX(100px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-in-down0': 'fade-in-down 1s ease-out',
                'fade-in-down1': 'fade-in-down 1.5s ease-out',
                'fade-in-down2': 'fade-in-down 2s ease-out',
                'fade-in-left': 'fadeInLeft 0.5s ease-out',
                'fade-in-right': 'fadeInRight 0.5s ease-out',
                'fadeOut': 'fadeOut 0.5s ease-in-out 3.2s',
            },
        },
    },
    plugins: [],
});
