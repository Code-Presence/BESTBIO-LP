/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'racing': ['"Racing Sans One"', 'sans-serif'] // cursive é um fallback
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
        },
    },
    plugins: [],
});
