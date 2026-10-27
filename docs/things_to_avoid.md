# Things to Avoid (Anti-Patterns)

1. **Halucinații Next.js vechi vs Next.js 16**:
   - NU folosi convenții deprecated din Pages Router (`pages/`, `getServerSideProps`, `getStaticProps`).
   - În Next.js 16, parametrii rutelor (`params`, `searchParams`) sunt Promise-uri ce trebuie rezolvate asincron (`await params`). Nu accesa `params.id` sincron.
   - Verifică întotdeauna documentația locală din `node_modules/next/dist/docs/` când ai dubii.

2. **Supabase & Securitate**:
   - NU apela niciodată tabele direct din client fără RLS (Row Level Security) activat în Supabase.
   - NU folosi cheia de admin / service role în codul accesibil clientului.
   - NU apela `supabase.auth.getUser()` sau interogări repetate în buclă fără caching sau gestiune adecvată a stării.

3. **Modificări Masive Fără Validare**:
   - NU rescrie fișiere întregi când trebuie schimbate doar 2 linii.
   - NU presupune că un cod funcționează fără să rulezi `npm run lint` sau verificarea de tipuri TypeScript.
   - NU ignora erorile de consolă sau avertismentele de compilare Turbopack.
