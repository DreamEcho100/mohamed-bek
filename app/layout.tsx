import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mr. Mohamed Shaban Abdelkareem',
	description:
		'I have been teaching English for more than 20 years in language and international schools in Egypt and Saudi Arabia'
};

export const runtime = 'edge';

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
