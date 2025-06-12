import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/src/components/ThemeProvider'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'AuditsPro Australia - Premium Trust Account Auditing Services',
  description: 'Professional trust account auditing services across Australia. Expert compliance, thorough reporting, and trusted audit solutions for legal and real estate professionals.',
  keywords: 'trust account audits, Australian auditing, compliance, legal audits, real estate audits',
  authors: [{ name: 'AuditsPro Australia' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AuditsPro Australia - Premium Trust Account Auditing',
    description: 'Professional trust account auditing services across Australia',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}