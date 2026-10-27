# Testing Strategy & Playwright / E2E Workflows

## Niveluri de Testare
1. **Verificare Statică (Obligatorie la fiecare pas)**:
   - `npm run lint` (ESLint 9)
   - `npx tsc --noEmit` (Verificare tipuri TypeScript)

2. **Teste E2E (Playwright)**:
   - Folosite pentru fluxurile critice ale utilizatorului: Autentificare (Login/Register), Navigare protejată, Tranzacții/Formulare cheie.
   - Fiecare test E2E trebuie să fie determinist, independent și să ruleze pe un mediu de test sau local (`localhost:3000`).

3. **Teste de Integrare & API (Supabase)**:
   - Verificarea politicilor RLS (Row Level Security) pentru tabelele Supabase.
   - Asigurarea că un utilizator neautentificat sau fără drepturi primește `401/403`.
