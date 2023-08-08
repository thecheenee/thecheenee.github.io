import './globals.css'
import { Albert_Sans, Bitter } from 'next/font/google'

const albert_sans = Albert_Sans({ subsets: ['latin'] })
const bitter = Bitter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Cheenee',
  description: 'Just Randomness by Shrinivas Achari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={albert_sans.className}>{children}</body>
    </html>
  )
}
