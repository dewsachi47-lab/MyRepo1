import React from 'react'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-6">Welcome to MyRepo1</h1>

      <p className="mb-4">This is a minimal Next.js 16 scaffold with Tailwind and a shadcn-style Button component.</p>

      <div className="flex gap-3">
        <Button variant="default">Primary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </>
  )
}
