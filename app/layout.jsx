import './globals.css'

export const metadata = {
  title: 'VaultGen',
  description: 'Deterministic client-side password generator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
