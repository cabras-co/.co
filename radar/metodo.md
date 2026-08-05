# Método

Cómo se armó este radar, y todo lo que no cubre. Va primero lo segundo, porque es lo que le quita
tamaño a las conclusiones.

## Lo que esto NO es

**No es un censo.** Son 15 skills de un universo de miles. Las búsquedas por `filename:SKILL.md`
devolvieron 38,336 archivos con la palabra "innovation", 7,168 con "brainstorming" y 1,540 con
"product discovery". Este catálogo es una muestra elegida a mano, no la lista completa ni la lista
de las mejores.

**No se corrió ninguna skill.** Nadie las instaló ni las usó contra un producto real. Se califica
lo que el archivo promete y exige, no lo que produce. Una skill puede estar bien escrita y
comportarse mal, o al revés, y este radar no lo detectaría.

**No se leyeron los repos completos.** `phuryn/pm-skills` tiene más de 100 skills y aquí se leyeron
2. `deanpeters/Product-Manager-Skills` tiene decenas y se leyeron 2. Cada ficha del catálogo
declara qué archivo se leyó. El puntaje es del archivo, no del repo.

**La lectura fue asistida.** Cada `SKILL.md` se descargó crudo y se extrajo con una batería fija de
7 preguntas (frontmatter, pasos, si exige datos reales, si genera números, si deja archivo, si
fuerza decisión, si cita fuentes). Las citas textuales del catálogo vienen de esa extracción. No se
auditó línea por línea cada archivo de 2,800 líneas.

**Sesgo de idioma.** Todas las búsquedas fueron en inglés. Si existen copilotos de innovación
publicados en español, portugués o chino, no aparecieron.

**Solo GitHub público.** No cubre marketplaces cerrados, skills privadas de empresas, ni lo que
Anthropic distribuye de fábrica.

## Cómo se buscó

Búsqueda de código en GitHub, 5 de agosto de 2026, restringida a `filename:SKILL.md` que es el
archivo que define una skill de Claude:

| Consulta | Resultados |
|---|---|
| `innovation filename:SKILL.md` | 38,336 |
| `ideation OR brainstorming filename:SKILL.md` | 7,168 |
| `"product discovery" OR "assumption" filename:SKILL.md` | 1,540 |
| `"jobs to be done" OR "design thinking" filename:SKILL.md` | 63 |
| `"blue ocean" OR "first principles" OR "lateral thinking" filename:SKILL.md` | 9 |

Más búsqueda de repositorios para estrellas y actividad, y lectura del archivo crudo de cada
candidata en `raw.githubusercontent.com`.

## Cómo se eligieron las 15

De los primeros 30 resultados de cada consulta, se descartaron los espejos (hay al menos dos repos
que reempaquetan cientos de skills ajenas: `majiayu000/claude-skill-registry` y
`ComeOnOliver/skillshub`) y lo que solo tocaba innovación de lado (redacción de propuestas
académicas, patentes, temas de UI).

Se buscó cubrir el rango completo, no las mejores. Por eso están adentro:

- Las dos más instaladas del rubro: `obra/superpowers` con 267 mil estrellas y `phuryn/pm-skills`
  con 24.8 mil.
- Colecciones grandes y activas: `deanpeters/Product-Manager-Skills`, `RefoundAI/lenny-skills`.
- Repos de una estrella, para ver si el tamaño cambia algo. No lo cambia:
  `ebowman/business-frameworks` saca 7 y `phuryn/pm-skills`, con 24 mil veces más estrellas,
  saca 8.
- Un extremo de cada tipo: una de pura divergencia (`scamper`), una de puro contacto
  (`continuous-discovery`), una de pura decisión (`lean-startup`).

Las estrellas del catálogo son del 5 de agosto de 2026 y envejecen rápido. No entran al puntaje:
están para que se vea que el puntaje y la popularidad no correlacionan.

## Qué se hizo con `co`

Se calificó con la misma rúbrica y saca 18 de 18, lo cual dice más de la rúbrica que de `co`. Está
declarado en [el conflicto de interés](rubrica.md#el-conflicto-de-interés) y repetido en su ficha.
La forma honesta de leer este catálogo es por columna, no por total.

## Cómo actualizarlo

1. Corre la búsqueda de arriba otra vez y quédate con lo que no esté en el catálogo.
2. `node scripts/calificar.js --nueva` para el formulario en blanco.
3. Lee el `SKILL.md`, no el README del repo.
4. Agrega la entrada a `SKILLS` en `scripts/calificar.js`, con `leido` diciendo exactamente qué
   archivo leíste.
5. `node scripts/calificar.js --test`. Si falla, el puntaje rompe una regla de la rúbrica.
6. `node scripts/calificar.js --tabla` y pega el resultado en `radar/README.md`.

Si encuentras una skill que cuenta el alcance del usuario antes de firmar un umbral, ábrela en
[Discussions](https://github.com/cabras-co/.co/discussions). Sería la primera que no escribimos
nosotros.
