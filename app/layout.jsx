import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Film Servisi',
  description: 'Film Sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className={`${inter.className} container`}>{children}</body>
    </html>
  )
}
