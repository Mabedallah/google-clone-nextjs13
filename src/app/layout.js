import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created by nextjs 13',
  content: 'width=device-width, initial-scale=1',
  icons: {
    icon:'/favicon.svg',},
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
