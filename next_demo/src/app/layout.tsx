import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";
import Card from "@/components/Card";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Astro vs Next.js Vergleich. Kandidat Next',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <link href="https://fonts.cdnfonts.com/css/i-hate-comic-sans-2" rel="stylesheet"/>
      <meta charSet="UTF-8" />
      <meta name="description" content="Astro vs Next.js Vergleich. Kandidat Astro"/>
      <meta name="viewport" content="width=device-width"/>
      {/*<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>*/}
      <title>{metadata.title}</title>
    </Head>
      <body className={inter.className}>
      <main className='main'>
        {/*// @ts-ignore*/}
        <marquee className="marquee"><span className="text-gradient">Nicolas 90s Banger</span></marquee>
        <Card
            title="Willkommen! (Next.js)"
            body="... auf meiner kleinen Website fuer 90's Banger"
            image={''}/>
        <slot/>
      {children}</main></body>
    </html>
  )
}
