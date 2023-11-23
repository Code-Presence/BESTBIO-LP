/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'racing': ['"Racing Sans One"', 'sans-serif'] // cursive é um fallback
            },
            backgroundImage: {
                // 'custom-gradient': 'linear-gradient(to bottom, #1b1b1b90 90%, #fefefe 10%)',
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
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
            },
        },
    },
    plugins: [],
});
