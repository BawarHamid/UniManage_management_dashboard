import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'UniManage',
    description: 'UniManage is a flexible management system for schools, universities, organizations etc., offering an all-in-one dashboard for efficient admin and user management.',
    icons: {
        icon: '/icons/tandhjul1.png'
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
            {/* <body className={`antialiased`}>{children}</body> */}
        </html>
    );
}
