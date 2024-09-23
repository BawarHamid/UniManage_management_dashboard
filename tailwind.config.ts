import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'rungsted-gradient': 'linear-gradient(272.12deg, #252E45 0%, #1a98d5 100%)',
                'red-gradient': 'linear-gradient(272.12deg, #ff3333 0%, #FD4714 100%)'
            },
            colors: {
                primary: {
                    rungsted: '#252E45',
                    '50': '#f1f9fe',
                    '100': '#e2f2fc',
                    '200': '#bee4f9',
                    '300': '#84cef5',
                    '400': '#43b6ed',
                    DEFAULT: '#1a98d5',
                    '600': '#0e7dbb',
                    '700': '#0c6498',
                    '800': '#0e557e',
                    '900': '#124768',
                    '950': '#0c2d45'
                },
                onPrimary: {
                    dark: '#000000',
                    light: '#FFFFFF',
                    DEFAULT: '#FFFFFF'
                },
                b2c: {
                    light: '#D5FFE3',
                    dark: '#285E61',
                    DEFAULT: '#6EDB93'
                },
                navy: '#1B2F5B',
                success: '#14A44D',
                danger: '#ff3333',
                orange: '#FD4714',
                error: '#b91c1c',
                warning: '#E4A11B',
                info: '#46B4D9',
                'info-Primary': '#3B71CA',
                Secondary: '#9FA6B2'
            }
        }
    }
};
export default config;
