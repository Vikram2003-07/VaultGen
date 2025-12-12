"use client"

import { useState } from 'react'
import { Eye, EyeOff, Copy, Check } from 'lucide-react'

function bytesToBase64(buffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

export default function Page() {
  const [master, setMaster] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)
  const [generated, setGenerated] = useState(false)
  const length = 12

  async function generate() {
    if (!master) {
      setPassword('')
      setGenerated(false)
      return
    }
    try {
      const enc = new TextEncoder()
      const data = enc.encode(master)
      const hash = await window.crypto.subtle.digest('SHA-256', data)
      const b64 = bytesToBase64(hash)
      const out = b64.slice(0, length)
      setPassword(out)
      setGenerated(true)
    } catch (e) {
      console.error(e)
      setPassword('')
      setGenerated(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-slate-900 rounded-2xl p-8 card-glow">
        <h1 className="text-3xl font-semibold text-blue-400">VaultGen</h1>
        <p className="text-sm text-slate-400 mt-1">Deterministic client-side password generator</p>

        <div className="mt-6 grid gap-4">
          <label className="flex flex-col">
            <span className="text-sm text-slate-300">Master Key(Password)</span>
            <div className="mt-2 relative">
              <input
                type={show ? 'text' : 'password'}
                value={master}
                onChange={(e) => setMaster(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    generate()
                  }
                }}
                className="w-full bg-slate-800 border border-slate-700 rounded-md px-4 py-2 pr-12 text-slate-100"
                placeholder="Enter Master-key(password)"
              />
              <button
                aria-label="toggle show"
                onClick={() => setShow((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-blue-400"
                type="button"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          <button
            onClick={generate}
            className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Generate
          </button>

          <label className="flex flex-col">
            <span className="text-sm text-slate-300">Generated Strong Password (SHA-256)</span>
            <div className={`mt-2 rounded-md p-4 bg-slate-800 border border-slate-700 flex items-center justify-between ${generated && password ? 'password-glow ring-emerald-400/30 ring-2' : ''}`}>
              <textarea
                readOnly
                value={password}
                rows={1}
                className="w-full resize-none bg-transparent outline-none text-emerald-400 font-mono text-sm"
              />
              <button onClick={async () => {
                if (!password) return
                try {
                  await navigator.clipboard.writeText(password)
                  setCopied(true)
                  setTimeout(() => setCopied(false), 2000)
                } catch (e) {
                  console.error('Copy failed', e)
                }
              }} className="ml-4 text-blue-400 p-1">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </label>
        </div>
      </div>
    </main>
  )
}
