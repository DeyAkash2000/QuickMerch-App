import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<div>
			<Head>
				<title>QuickMerch</title>
				<meta name="descripti//on" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Hello from Home Page</h1>
		</div>
	)
}
