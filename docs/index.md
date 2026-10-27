# Documentation & Knowledge Base Orchestration

Această structură modulară asigură că AI-ul încarcă doar fișierele relevante pentru sarcina curentă, fără a polua contextul cu informații inutile.

## 🧭 Harta Documentației (Context Router)

| Subiect | Fișier | Când trebuie citit de AI |
|---|---|---|
| **Reguli Generale & Orchestrare** | [`/AGENTS.md`](file:///Users/cristian/web-project-app/AGENTS.md) | La începutul oricărei sesiuni de lucru |
| **Arhitectură & Tehnologii** | [`docs/architecture.md`](file:///Users/cristian/web-project-app/docs/architecture.md) | Când se creează module noi, rute, pagini sau integrări Supabase |
| **Convenții de Cod (Karpathy-style)** | [`docs/conventions.md`](file:///Users/cristian/web-project-app/docs/conventions.md) | Înainte de a scrie orice linie de cod sau refactorizare |
| **Lucruri de Evitat (Anti-Patterns)** | [`docs/things_to_avoid.md`](file:///Users/cristian/web-project-app/docs/things_to_avoid.md) | Pentru a preveni erori comune de AI (hallucinații Next 16, slop) |
| **Pre-validare & Hardening** | [`docs/pre_validation.md`](file:///Users/cristian/web-project-app/docs/pre_validation.md) | Înainte de a începe orice task nou (verificare mediu/git) |
| **Planificare & Execuție** | [`docs/execution_and_planning.md`](file:///Users/cristian/web-project-app/docs/execution_and_planning.md) | Pentru task-uri de implementare compuse din mai mulți pași |
| **Strategie de Testare (E2E / Lint)** | [`docs/testing.md`](file:///Users/cristian/web-project-app/docs/testing.md) | La adăugarea sau validarea testelor automate |
| **Standarde Code Review** | [`docs/code_review.md`](file:///Users/cristian/web-project-app/docs/code_review.md) | Înainte de a finaliza o etapă de cod |
| **Memorie de Lucru (Working Memory)** | [`docs/working_memory.md`](file:///Users/cristian/web-project-app/docs/working_memory.md) | Pe parcursul task-urilor lungi, pentru păstrarea stării |
