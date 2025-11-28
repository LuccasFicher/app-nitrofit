'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex items-center justify-between p-4 bg-background border-b border-primary/20">
      <div className="flex items-center space-x-2">
        <Image
          src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/71dc6552-8796-41ee-a3f1-32900ece73e8.png"
          alt="NitroFit Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <h1 className="text-xl font-bold text-primary">NitroFit</h1>
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </header>
  )
}