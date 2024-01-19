import './globals.css'

export const metadata = {
  title: 'Projeto Machado',
  description: 'Repositório de links para obras para vestibulares em domínio público',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
