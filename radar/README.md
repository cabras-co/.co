# Radar de copilotos de innovación

Qué skills de Claude prometen ayudarte a innovar, y hasta dónde te llevan de verdad.

15 skills leídas en GitHub el 5 de agosto de 2026, calificadas con una rúbrica de 6 dimensiones.

- [`rubrica.md`](rubrica.md): el sistema de calificación. Qué mide cada dimensión, los topes
  automáticos, y qué no mide.
- [`catalogo.md`](catalogo.md): las 15 fichas con evidencia y el veredicto de cada una.
- [`metodo.md`](metodo.md): cómo se buscaron y todo lo que este radar no cubre.
- [`../scripts/calificar.js`](../scripts/calificar.js): la rúbrica en código.
  `--tabla`, `--test`, `--nueva`.

## El hallazgo

De las 15, **14 nunca preguntan a cuánta gente puedes llegar de verdad.** Diez no lo mencionan
nunca. Cuatro dan un número de receta ("recluta de 5 a 10", "una entrevista por semana") sin
preguntar si tienes esas personas ni de dónde van a salir.

Y ninguna de las 14 dice qué puedes concluir con la cantidad de gente que sí vas a conseguir. El
tamaño de muestra no aparece en ningún archivo del muestreo. La que más lo roza lo hace afirmando
que 5 participantes descubren el 85% de los problemas de usabilidad, sin fuente.

Así queda la cadena:

| Eslabón | Cuántas lo cubren |
|---|---|
| Divergir: sacarte opciones nuevas | 3 de 15, por tipo |
| Ordenar: estructurar lo que ya sabes | 7 de 15, por tipo |
| Contacto: no avanza sin datos de gente real (G = 3) | 4 de 15 |
| **Alcance: cuenta a cuánta gente llegas de verdad (A = 3)** | **1 de 15** |
| Decidir: umbral firmado antes de correr (U = 3) | 2 de 15 |

El rubro está lleno de ordenadores. Sales de casi todas estas skills con un mapa de riesgos, un
árbol de oportunidades o un canvas lleno, y con exactamente la misma evidencia con la que entraste.

Segundo hallazgo, más corto: **la popularidad no predice nada.** La colección más instalada del
rubro (24,889 estrellas) saca 8. Una de una sola estrella saca 7. La de 267,279 estrellas saca 7 y
es excelente en lo suyo, que no es esto.

## La tabla

Generada con `node scripts/calificar.js --tabla`.

| Skill | Repo | ★ | Tipo | G | A | U | D | H | C | Total |
|---|---|---|---|---|---|---|---|---|---|---|
| [co](https://github.com/cabras-co/.co) | `cabras-co/.co` | - | Juez | 3 | 3 | 3 | 3 | 3 | 3 | **18**/18 |
| [lean-startup](https://github.com/getagentseal/founder-playbook/blob/main/lean-startup/SKILL.md) | `getagentseal/founder-playbook` | 420 | Juez | 3 | 1 | 3 | 3 | 2 | 1 | **13**/18 |
| [discovery-process](https://github.com/deanpeters/Product-Manager-Skills/blob/main/skills/discovery-process/SKILL.md) | `deanpeters/Product-Manager-Skills` | 6273 | Ordenador | 2 | 1 | 2 | 2 | 2 | 1 | **10**/18 |
| [orca-business-ideation](https://github.com/henryvn27/orca-framework/blob/main/skills/orca-business-ideation/SKILL.md) | `henryvn27/orca-framework` | 4 | Ordenador | 1 | 0 | 1 | 2 | 2 | 3 | **9**/18 |
| [product-coach](https://github.com/razbakov/skills/blob/main/skills/product-coach/SKILL.md) | `razbakov/skills` | 3 | Juez | 2 | 0 | 1 | 3 | 1 | 2 | **9**/18 |
| [design-thinking](https://github.com/rastian/design-thinking-skills) | `rastian/design-thinking-skills` | 13 | Ordenador | 2 | 1 | 2 | 2 | 0 | 1 | **8**/18 |
| [opportunity-solution-trees](https://github.com/wdavidturner/product-skills/blob/main/skills/opportunity-solution-trees/SKILL.md) | `wdavidturner/product-skills` | 17 | Contacto | 3 | 0 | 1 | 1 | 1 | 2 | **8**/18 |
| [pm-product-discovery (identify-assumptions, brainstorm-experiments)](https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery) | `phuryn/pm-skills` | 24889 | Ordenador | 1 | 0 | 2 | 1 | 1 | 3 | **8**/18 |
| [brainstorming](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md) | `obra/superpowers` | 267279 | Divergente | 0 | 0 | 1 | 2 | 1 | 3 | **7**/18 |
| [continuous-discovery](https://github.com/RefoundAI/lenny-skills/blob/main/skills/continuous-discovery/SKILL.md) | `RefoundAI/lenny-skills` | 1220 | Contacto | 3 | 1 | 1 | 0 | 1 | 1 | **7**/18 |
| [derisk-measurement-advisor](https://github.com/deanpeters/Product-Manager-Skills/blob/main/skills/derisk-measurement-advisor/SKILL.md) | `deanpeters/Product-Manager-Skills` | 6273 | Ordenador | 1 | 0 | 1 | 1 | 2 | 2 | **7**/18 |
| [innovation (Beckman, Berkeley Haas)](https://github.com/ebowman/business-frameworks/blob/main/skills/innovation/SKILL.md) | `ebowman/business-frameworks` | 1 | Ordenador | 2 | 0 | 1 | 1 | 1 | 2 | **7**/18 |
| [innovation (gestión y portafolio)](https://github.com/travisjneuman/.claude/blob/main/skills/innovation/SKILL.md) | `travisjneuman/.claude` | - | Ordenador | 1 | 0 | 2 | 2 | 0 | 1 | **6**/18 |
| [MITRE ITK (27 herramientas)](https://github.com/deanpeters/MITRE-ITK-Skills) | `deanpeters/MITRE-ITK-Skills` | 10 | Divergente | 1 | 0 | 0 | 1 | 3 | 1 | **6**/18 |
| [scamper](https://github.com/neurofoo/agent-skills/blob/main/scamper/SKILL.md) | `neurofoo/agent-skills` | 106 | Divergente | 0 | 0 | 0 | 1 | 1 | 3 | **5**/18 |

G gente real · A alcance · U umbral firmado · D decisión · H honestidad de la fuente · C costo para
uno solo. Cada nivel está definido en [`rubrica.md`](rubrica.md).

## Cómo leer esto sin que te engañe

**El total no es una nota escolar.** Es hasta dónde te lleva de la cadena. `scamper` saca 5 y es
una buena herramienta de divergencia: medir un martillo con termómetro da 5 grados.

**Lee las columnas, no el total.** Cada columna se verifica abriendo el archivo ajeno: quién cita
sus números, quién pregunta cuánta gente tienes, quién te deja moverle al umbral después de ver los
datos. Ahí no hay opinión.

**`co` saca 18 y eso no prueba nada.** La rúbrica la escribimos nosotros y salió de las reglas que
ya estaban en `co`. Es un examen escrito por el alumno, está declarado en
[el conflicto de interés](rubrica.md#el-conflicto-de-interés), y `co` tampoco hace lo que hacen
las tres Divergentes de esta lista.

**Nadie corrió estas skills.** Se califica lo que exigen y prometen, no lo que producen. Los
límites completos están en [`metodo.md`](metodo.md).

## Qué hacer con esto si estás construyendo

Las cuatro cosas no las hace ninguna sola. Se combinan:

1. Para sacar opciones cuando ya no se te ocurre nada: `scamper` o las de MITRE.
2. Para alinear qué vas a construir antes de escribir código: `brainstorming` de superpowers.
3. Para ordenar tus supuestos y riesgos: `pm-product-discovery` si quieres algo barato,
   `discovery-process` si tienes equipo y tres semanas.
4. Para contar a cuánta gente llegas y firmar el número que mata: por ahora `co`, que para eso se
   escribió. Si encuentras otra, [dilo](https://github.com/cabras-co/.co/discussions) y entra al
   catálogo.
