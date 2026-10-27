# Coding Conventions & Guidelines (Karpathy Style)

## Principii de Bază
1. **Simplitate Extremă (No Over-Engineering)**:
   - Nu crea clase, abstracții, factory-uri sau straturi de indirecție până când nu sunt necesare de cel puțin 3 ori.
   - Codul simplu, explicit și direct este mult superior codului "inteligent" și complicat.
   - Păstrează funcțiile și componentele scurte și focalizate pe o singură responsabilitate.

2. **Fără AI Boilerplate Slop**:
   - Nu adăuga comentarii redundante care doar repetă ce face codul (ex: `// set status to true: setStatus(true)`).
   - Nu inventa biblioteci sau pachete noi fără permisiune explicită.
   - Nu adăuga dependințe NPM suplimentare dacă funcționalitatea poate fi scrisă în câteva linii curate de cod.

3. **TypeScript Strict & Explicit**:
   - Interzis `any`. Folosește `unknown` dacă tipul nu este încă cunoscut și fă type narrowing.
   - Definește interfețe / tipuri clare pentru toate props-urile de componente și răspunsurile Supabase.

4. **Componente React 19 & Next.js 16**:
   - Preferă Server Components în mod implicit (`async function Component()`).
   - Adaugă directiva `'use client'` NUMAI când este absolut necesară (stare `useState`, `useEffect`, event listeners).
   - Folosește `next/image` pentru imagini și `next/link` pentru navigare internă.
