<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Master Agent Instructions & Orchestration

> **Sursă de adevăr**: Acest fișier este orchestratorul principal pentru orice agent AI care lucrează în acest codebase. Urmează cu strictețe regulile de mai jos.

---

## 1. Regula de Aur a Contextului (Modular Docs)
NU citi sau încărca totul deodată. Încarcă DOAR documentul din [`/docs`](file:///Users/cristian/web-project-app/docs/index.md) relevant pentru pasul curent:
- **Index documente**: [`docs/index.md`](file:///Users/cristian/web-project-app/docs/index.md)
- **Arhitectură & Tehnologii**: [`docs/architecture.md`](file:///Users/cristian/web-project-app/docs/architecture.md)
- **Convenții de Cod & Stil (Karpathy-style)**: [`docs/conventions.md`](file:///Users/cristian/web-project-app/docs/conventions.md)
- **Lucruri de Evitat (Anti-Patterns)**: [`docs/things_to_avoid.md`](file:///Users/cristian/web-project-app/docs/things_to_avoid.md)
- **Pre-validare & Verificare Mediu**: [`docs/pre_validation.md`](file:///Users/cristian/web-project-app/docs/pre_validation.md)
- **Protocol Planificare & Execuție**: [`docs/execution_and_planning.md`](file:///Users/cristian/web-project-app/docs/execution_and_planning.md)
- **Strategie Testare & E2E**: [`docs/testing.md`](file:///Users/cristian/web-project-app/docs/testing.md)
- **Standarde Code Review**: [`docs/code_review.md`](file:///Users/cristian/web-project-app/docs/code_review.md)
- **Memorie de Lucru (Working Memory)**: [`docs/working_memory.md`](file:///Users/cristian/web-project-app/docs/working_memory.md)

---

## 2. Fluxul de Lucru Obligatoriu în 4 Etape

Fiecare cerință sau task primit de la utilizator trebuie să treacă prin:

1. **Pre-validare (Hardening)**:
   - Verifică starea git (`git status`) și a mediului local conform [`docs/pre_validation.md`](file:///Users/cristian/web-project-app/docs/pre_validation.md).
   - Oprește-te și semnalează dacă mediul nu este sănătos înainte de a genera cod.

2. **Planificare Atomică (Step Plan)**:
   - Sparge task-ul în pași mici, independenți și verificabili.
   - Păstrează starea actualizată în [`docs/working_memory.md`](file:///Users/cristian/web-project-app/docs/working_memory.md).

3. **Execuție Secvențială (One Step at a Time)**:
   - Execută exclusiv un pas la un moment dat. Nu sări pași.
   - Aplică strict convențiile din [`docs/conventions.md`](file:///Users/cristian/web-project-app/docs/conventions.md): simplitate, fără over-engineering, fără AI boilerplate slop.

4. **Validare Imediată & Code Review**:
   - După fiecare pas de cod, validează lucrul (`npm run lint` sau verificări de tipuri).
   - Trece modificările prin lista de auto-review din [`docs/code_review.md`](file:///Users/cristian/web-project-app/docs/code_review.md).
   - Nu declara o sarcină finalizată dacă verificările eșuează.
