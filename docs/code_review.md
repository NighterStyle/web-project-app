# Code Review Standards (Auto-Review)

Înainte ca agentul să declare un pas finalizat sau să propună modificările utilizatorului, acesta trebuie să ruleze un auto-review critic (ca pentru un coleg senior de echipă):

## Criterii de Auto-Review:
1. **Regula Anti-Slop**:
   - Există cod generat redundant?
   - Au fost adăugate comentarii inutile de genul `// set state` sau `// import react`? Dacă da, șterge-le.
2. **Minimalism & Simplitate**:
   - S-a rezolvat problema cu numărul minim necesar de linii și fișiere?
   - Nu au fost create fișiere de abstracție premature (servicii goale, wrappere inutile).
3. **Compatibilitate Next.js 16**:
   - S-a respectat caracterul asincron al `params` / `searchParams` în pagini?
   - Componentele server nu au importuri specifice clientului (`useState`, `window`, `document`)?
4. **Securitate**:
   - Cheile private (Supabase Service Key) sunt izolate exclusiv pe server?
   - RLS este respectat?
