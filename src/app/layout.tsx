import './globals.css'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({ subsets: ['latin'] })

export const metadata = {
  title: 'A riqueza das histórias',
  description: 'Um site para descobrir a riqueza das histórias que sobreviveram ao mais severo dos críticos...O Tempo, além de apresentar o prazer de uma boa leitura para aqueles que não conheciam.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
