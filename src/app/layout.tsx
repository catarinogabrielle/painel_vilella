import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from '../components/Header/page';
import Footer from '../components/Footer/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Painel Vilella",
  description: "Painel administrativo velella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Header />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'space-between'
          }}>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
