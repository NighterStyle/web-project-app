# Execution & Planning Protocol

Agentul lucrează urmând strict cei 4 pași:

```
[1. Pre-validare] ──▶ [2. Step Plan] ──▶ [3. Execuție pas-cu-pas] ──▶ [4. Validare & Testare]
```

## Pasul 1: Hardening & Pre-validare
- Citește [`docs/pre_validation.md`](file:///Users/cristian/web-project-app/docs/pre_validation.md).
- Confirmă că mediul este sănătos.

## Pasul 2: Step Planning
- Împarte sarcina în pași atomici, independenți și mici.
- Pentru task-uri complexe, notează pașii în `step_plan.json` sau în [`docs/working_memory.md`](file:///Users/cristian/web-project-app/docs/working_memory.md).

## Pasul 3: Execuție Unică
- Lucrează **doar la un singur pas odată**.
- Nu sări peste pași.
- Respectă regulile din `docs/conventions.md` și `docs/things_to_avoid.md`.

## Pasul 4: Validare Riguroasă
- După terminarea fiecărui pas critic:
  - Rulează `npm run lint` sau verificările de tipuri.
  - Verifică cerințele inițiale față de ce s-a produs.
  - Actualizează starea în `docs/working_memory.md`.
