# La rúbrica

Cómo se califica un copiloto de innovación. Seis dimensiones, 0 a 3 cada una, 18 posibles.

Los puntajes de las skills ya calificadas viven en [`catalogo.md`](catalogo.md) y en
[`../scripts/calificar.js`](../scripts/calificar.js), que es la misma rúbrica en código:
`node scripts/calificar.js --test` verifica que ningún puntaje rompa las reglas de este archivo.

## La pregunta que califica

Todas las skills de este rubro prometen lo mismo con distintas palabras: ayudarte a innovar.
La rúbrica no pregunta si la skill está bien escrita ni si el framework es prestigioso.
Pregunta una sola cosa:

> **¿Esto me acerca a saber si mi idea funciona con gente real, o me deja con documentos más bonitos?**

Es una pregunta injusta para la mitad de las skills, y por eso antes de calificar hay que
clasificar.

## Primero el tipo, luego el puntaje

Un martillo no se mide con termómetro. Cuatro tipos, según en qué parte de la cadena trabajan:

| Tipo | Qué hace | Ejemplo del catálogo |
|---|---|---|
| **Divergente** | Te saca opciones que no se te habían ocurrido | `scamper`, `brainstorming` |
| **Ordenador** | Estructura lo que ya sabes: supuestos, riesgos, árboles, canvas | `pm-product-discovery`, `design-thinking` |
| **Contacto** | Te pone frente a personas reales | `continuous-discovery`, `opportunity-solution-trees` |
| **Juez** | Te fuerza a matar o seguir | `lean-startup`, `co` |

Una Divergente que saca 5 no está mal hecha. Está haciendo su trabajo, que no es este.
El puntaje no es una nota escolar: es **hasta dónde te lleva de la cadena**. Lo que la rúbrica
detecta es dónde se rompe la cadena, no quién es más listo.

## Las seis dimensiones

### G. Gente real

¿La skill te obliga a poner esto frente a personas que no son tú ni el modelo?

- **0.** Todo pasa dentro de la conversación. El único humano consultado eres tú.
- **1.** Menciona hablar con usuarios como buena práctica, y sigue sin ellos.
- **2.** Pide datos de gente real, pero avanza igual si le das lo que imaginas.
- **3.** No avanza sin datos de gente real, y rechaza de frente lo inventado en la sala de juntas.

Cae a 0 automáticamente si presenta personas simuladas por el modelo como si fueran evidencia.

### A. Alcance

¿Cuenta a cuánta gente puedes llegar de verdad, y qué se puede concluir con esa cantidad?

- **0.** Nunca aparece la pregunta de cuántas personas vas a conseguir.
- **1.** Da un número de receta ("recluta de 5 a 10", "entrevista una por semana") sin preguntarte si
  los tienes ni de dónde van a salir.
- **2.** Te hace listar tus canales concretos antes de diseñar nada.
- **3.** Cuenta tu alcance real antes de que firmes cualquier número, separa a los que ya te conocen
  de los que no, y te dice qué queda descartado y qué no con esa cantidad de personas.

Esta es la dimensión que separa. Ver [el hallazgo](README.md#el-hallazgo).

### U. Umbral firmado

¿Escribes el número de éxito antes de correr, o después de ver los datos?

- **0.** No hay número en ninguna parte.
- **1.** Sugiere métricas, pero se pueden elegir cuando ya viste el resultado.
- **2.** Pide criterio de éxito al diseñar el experimento.
- **3.** Umbral firmado antes de correr, congelado hasta una fecha, y verificación de que corriste
  lo que firmaste.

Techo de 1 si el umbral se puede escribir después de ver los datos, aunque el documento lo pida
antes. Un umbral que se mueve no es un umbral.

### D. Decisión

¿Termina en matar o seguir con fecha, o termina en un documento?

- **0.** Termina en artefactos. La decisión queda de tu lado, sin fecha.
- **1.** La decisión es opcional o es una calificación de confianza.
- **2.** Hay puerta explícita de seguir, pivotar o matar.
- **3.** Fuerza la decisión con fecha y no te deja en cero: siempre sale con la siguiente apuesta.

### H. Honestidad de la fuente

¿De dónde salen sus números, y distingue apuesta de dato?

- **0.** Afirma cifras de comportamiento humano sin fuente. El caso típico: "5 usuarios encuentran
  el 85% de los problemas".
- **1.** Cita autores y libros, pero ninguna cifra concreta tiene referencia.
- **2.** Cita fuentes de lo que afirma, o se prohíbe explícitamente inventar números.
- **3.** Fuente por número, con enlace o referencia verificable, y lo que es apuesta se llama apuesta.

Una skill que no usa ningún número no puede sacar 3 aquí, pero tampoco 0: sacar 1 significa que
no mintió porque no habló.

### C. Costo para uno solo

¿Cuánto pide antes de servir para algo?

- **0.** Asume una organización: portafolio, comité, participantes reclutados.
- **1.** Asume equipo o semanas. Un builder solo no puede correrlo completo.
- **2.** Se puede correr solo, con lectura larga o varias sesiones.
- **3.** Una persona sola, una sesión, sin dependencias.

Esta dimensión existe porque el usuario de este radar es alguien construyendo solo. Para un equipo
de producto con presupuesto de research, esta columna se ignora y el total se lee sobre 15.

## Topes automáticos

Se aplican al calificar, no al final. Están codificados en `calificar.js` y el `--test` falla si
alguien los rompe:

| Bandera | Efecto |
|---|---|
| Presenta gente inventada por el modelo como evidencia | Total con tope de 6 |
| Afirma una cifra de comportamiento humano sin fuente | H clavado en 0 |
| El umbral se puede escribir después de ver los datos | U con techo de 1 |

## Las bandas

| Total | Qué significa |
|---|---|
| 15 a 18 | Te lleva a una decisión con gente real. |
| 11 a 14 | Te deja en la puerta: falta que alguien cuente tu alcance. |
| 7 a 10 | Te ordena la cabeza. Sales con mejores documentos, no con más evidencia. |
| 0 a 6 | Sirve para generar o para alinear. No toca el mundo real. |

Las bandas describen hasta dónde llega, no qué tan buena es. `brainstorming` de superpowers saca 7
y es la skill más instalada del mundo: hace excelente lo que hace, que no es validar.

## Cómo calificar una skill nueva

Veinte minutos, sin instalarla. `node scripts/calificar.js --nueva` imprime el formulario en blanco.

1. **Lee el `SKILL.md` completo.** No el README del repo: el README vende, el `SKILL.md` es lo que
   Claude va a obedecer.
2. **Clasifica el tipo** antes de tocar los puntajes.
3. **Busca las tres cosas que casi nadie tiene**, en este orden: una cifra sobre comportamiento
   humano con fuente, una pregunta sobre cuánta gente vas a conseguir, y un número de éxito que se
   escriba antes de correr. Encontrar una sola ya te ubica arriba de la mitad del catálogo.
4. **Califica las seis dimensiones** con la definición del nivel enfrente, no de memoria.
5. **Aplica los topes.**
6. **Escribe el veredicto de una línea**, y que la línea diga qué hace bien y dónde se rompe la
   cadena. Si tu veredicto no menciona nada bueno, lo leíste mal o no lo leíste.
7. **Agrégala a `SKILLS` en `calificar.js`** y corre `--test`. Si el test falla, tu puntaje rompe
   una regla de este archivo, no al revés.

## Qué NO mide esta rúbrica

Que quede escrito, porque un sistema de calificación que no declara sus puntos ciegos es
propaganda:

- **La calidad de las ideas que genera.** No sé medir eso sin correr las skills con gente real, y
  no lo hice.
- **Si la skill se dispara cuando debe.** Una `description` mal escrita hace que Claude nunca la
  cargue. Eso no aparece en el puntaje y probablemente importe más que tres dimensiones juntas.
- **La facilitación de talleres y el trabajo en equipo.** Las de MITRE son buenas herramientas de
  grupo y aquí salen bajas por medirlas con la vara de un builder solo.
- **Mantenimiento, licencia y comunidad del repo.**
- **Si funciona.** Nadie corrió estas skills contra un producto real y comparó resultados. Esto
  califica lo que la skill promete y exige, no lo que produce.

## El conflicto de interés

Esta rúbrica la escribió la gente que hizo `co`, y `co` saca 18 de 18.

Eso no es evidencia de que `co` sea mejor. Es evidencia de que el examen lo escribió el alumno.
Las seis dimensiones salieron de las reglas que ya estaban en `co/SKILL.md` antes de leer una sola
skill ajena: contar el alcance antes de firmar, firmar el umbral antes de correr, nunca inventar
datos, cerrar en decisión. Cualquier rúbrica construida así premia a quien la escribió.

Lo que sí se puede leer sin sesgo son las columnas sueltas, porque cada una se verifica leyendo el
archivo ajeno: quién cita sus números y quién no, quién pregunta cuánta gente tienes y quién no,
quién te deja moverle al umbral después. Ahí `co` no tiene ventaja de árbitro: tiene la misma
pregunta que todos, respondida en el mismo lugar.

Y para no dejarlo bonito: `co` saca 18 en una rúbrica donde no existe la columna que mediría lo que
`co` no hace. No genera ideas, no ordena un taller, no sirve para un equipo de research. Las tres
Divergentes del catálogo hacen algo que `co` no sabe hacer, y de las cuatro cosas que necesita
alguien innovando, `co` cubre dos.
