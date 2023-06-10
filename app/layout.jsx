import Footer from '@/components/footer/page'
import Header from '@/components/header/page'
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
      <body className={`${inter.className} container`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
