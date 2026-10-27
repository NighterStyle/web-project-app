# Pre-Validation & Hardening (Harness Engineering)

Înainte ca agentul să înceapă lucrul la orice sarcină nouă, rulează următoarea listă de verificare:

## 1. Verificare Mediu Local
- [ ] **Git Cleanliness**: Verifică starea repository-ului (`git status`). Nu continua dacă există modificări nesalvate sau conflicte neclare fără acordul utilizatorului.
- [ ] **Dependințe**: Asigură-te că `node_modules` există și este sincronizat cu `package.json`.
- [ ] **Variabile de Mediu**: Verifică prezența `.env.local` cu cheile necesare (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

## 2. Verificare Sănătate Aplicație
- [ ] Rulează verificarea de tipuri și linter-ul (`npm run lint` sau `npx tsc --noEmit`) pentru a confirma că pornești de pe o bază curată.
- [ ] Dacă testele sau dev server-ul rulează, verifică să nu existe erori fatale.

Dacă un pas din pre-validare eșuează, rezolvă-l sau alertează utilizatorul **înainte** de a implementa noi funcționalități.
