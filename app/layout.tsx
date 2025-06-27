import type React from "react"
import { Inter } from "next/font/google"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Projeto Eco",
  description: "Plataforma de denúncias e jogos da empresa Eco",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          <div className="app-container">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}