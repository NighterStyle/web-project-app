'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [status, setStatus] = useState('Se conectează...')

  useEffect(() => {
    async function checkConnection() {
      const { error } = await supabase.auth.getSession()
      if (error) {
        setStatus('Eroare conexiune: ' + error.message)
      } else {
        setStatus('Supabase conectat cu succes!')
      }
    }
    checkConnection()
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Web Project App</h1>
        <p className="text-emerald-400 font-mono">{status}</p>
      </div>
    </main>
  )
}
