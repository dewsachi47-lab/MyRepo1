import './globals.css'
import React from 'react'

export const metadata = {
  title: 'MyRepo1 - Next.js 16 + shadcn',
  description: 'Scaffolded app with Tailwind and shadcn-style components'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b py-4 px-6">
            <div className="max-w-4xl mx-auto">MyRepo1 — Next.js 16 + shadcn</div>
          </header>
          <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8">{children}</main>
          <footer className="border-t py-4 px-6 text-sm text-slate-600">
            <div className="max-w-4xl mx-auto">Built with ❤️</div>
          </footer>
        </div>
      </body>
    </html>
  )
}
