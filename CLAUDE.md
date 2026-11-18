# Codeflow · reglas de trabajo

## TDD (obligatorio)
- Una historia de usuario a la vez (docs/historias.md). Dentro de ella, un criterio a la vez.
- Ciclo: ROJO (test que falla) → VERDE (código mínimo) → REFACTOR (con la suite en verde).
- Nunca escribas código de producción sin un test que falle antes.
- Muéstrame el test en ROJO y espera mi confirmación antes de implementar.
- Nunca modifiques, borres ni marques como skip un test para que pase. Si crees que un test está mal, para y pregúntame.
- Después de cada cambio ejecuta: npm test

## Arquitectura
- src/core: lógica pura (parsers, grafo, layout). Sin DOM, red ni base de datos.
- src/adapters: bordes (GitHub, Supabase, LLM). En tests se sustituyen por fakes.
- src/ui: render y eventos.
- Los tests viven junto al código: github.ts → github.test.ts

## Commits
- test: … (rojo) · feat: … (verde) · refactor: …
