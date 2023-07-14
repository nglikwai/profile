
import { ThemeProvider } from '@mui/material'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { theme } from '@/constants/theme'
import AppProvider from '@/context/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LIK WAI Profile',
  description: 'My Profilelio Works in One Place',
  icons: {
    icon: {
      url: "./icon.png",
      type: "image/png",
    }
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <ThemeProvider theme={theme}>
        <AppProvider>
          <body className={inter.className}>{children}</body>
        </AppProvider>
      </ThemeProvider>

    </html>
  )

}