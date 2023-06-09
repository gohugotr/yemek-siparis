import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin-ext'] })

export const metadata = {
  title: 'Yemek Servisi',
  description: 'Yemek Sipariş Sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang='tr'>
      <body className='' /* {inter.className}*/ >{children}</body> 
    </html>
  )
}
