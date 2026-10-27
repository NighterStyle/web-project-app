# Architecture Decisions & Stack

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack, React 19)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack`)
- **Backend / Database / Auth**: Supabase (`@supabase/ssr`, `@supabase/supabase-js`)
- **Language**: TypeScript 5 (Strict Mode)
- **Linting**: ESLint 9

## Directory Structure
```
web-project-app/
├── docs/                 # Sursa de adevăr pentru AI și dezvoltare
├── src/
│   ├── app/              # Next.js App Router (pagini, layouts, API routes)
│   ├── components/       # Componente UI reutilizabile (UI primitive vs domain)
│   ├── lib/              # Utilitare, clienți externi (supabase, fetchers)
│   └── types/            # Tipuri TypeScript globale și scheme de date
├── public/               # Asset-uri statice
├── AGENTS.md             # Punctul de intrare pentru agenții AI
└── package.json
```

## Supabase Client Separation
1. **Client Components (`'use client'`)**:
   - Folosesc clientul de browser generat cu `@supabase/ssr` (cookies) sau singleton-ul din `src/lib/supabase.ts`.
2. **Server Components & Server Actions / Route Handlers**:
   - Folosesc instanța SSR bazată pe cookies din `next/headers` pentru a asigura sincronizarea sesiunii și securitatea RLS (Row Level Security).
3. **Chei API**:
   - `NEXT_PUBLIC_SUPABASE_URL` și `NEXT_PUBLIC_SUPABASE_ANON_KEY` în `.env.local` pentru client.
   - NICIODATĂ nu expune `SUPABASE_SERVICE_ROLE_KEY` pe client!
