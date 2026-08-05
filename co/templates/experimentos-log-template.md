<!--
Template de `experimentos-log.md`, la memoria. Se genera EN EL IDIOMA DEL USUARIO.

Vive en el repo del usuario. Se crea en el paso 0, con la apuesta escrita y nada más, y se
actualiza en CADA paso, no solo al final.
Al crearlo, la skill dice en voz alta, literal: "esto vive solo en tu repo; nada sale de aquí sin
que tú lo mandes".

Regla dura: DATO CRUDO, NUNCA CONCLUSIÓN. No se escribe "salió mal", se escribe "61 personas
llegaron por el link de LinkedIn, 0 pagaron, en 9 días". Una conclusión no se puede releer con
ojos nuevos; un número sí.

Estados: diseñado (escrito) -> lanzado (instrumentado, con links y fecha) -> corrido (con datos y
veredicto).

El bloque "Experimento [00N+1]" de abajo ilustra la repetición: NO se copia vacío al archivo real.
-->

# Experimentos

Esto vive solo en tu repo; nada sale de aquí sin que tú lo mandes.

## Lo que ya sé de mis canales

Se llena solo, con los datos reales de cada experimento corrido. A partir del tercero, esto
reemplaza cualquier estimación: es tu propio número, no el de un libro.

| Canal | Gente que me ha dado | Promedio |
|---|---|---|
| [canal] | [180, 210, 160] | [183] |

---

## Experimento [00N]: [nombre corto]

**La apuesta**

- **Fecha:** [fecha absoluta, ej. 26 jul 2026]
- **Versión de la skill:** [ej. v1.2.3]
- **Apuesta:** [el comportamiento ajeno que el build asume]
- **Necesito al mes:** [monto] · **Precio:** [precio] · **Clientes que necesito:** [número]

**El alcance firmado**

| Canal | Cuántos hay | ¿Me dejan publicar? | Me conocen | NO me conocen |
|---|---|---|---|---|
| [canal] | [número] | [sí / no] | [número] | [número] |

- **Alcance frío firmado:** [número]

**El umbral (firmado antes de ver datos)**

- **Qué les pedí:** [peldaño; ej. "pago de 149 pesos"]
- **Métrica principal (la que decide):** [una sola]
- **Señales secundarias (se anotan, no deciden):** [opcional, o "ninguna"]
- **Umbral:** [ej. "si 0 pagan, mato; si 1 o más, sigo buscando"] hasta el [fecha]

**Lo que pasó**

| Canal | Gente que llegó (del link) | Convirtieron | Días |
|---|---|---|---|
| [canal] | [número real] | [número] | [número] |

- **Desviaciones de lo firmado:** [qué no cuadró. Si nada, "ninguna"]
- **Excepciones (overrides):** [una línea por cada compuerta que el usuario decidió saltarse, tal cual. Ej: "sin atribución por canal, decisión del usuario". Si no hubo, "ninguna"]
- **Correcciones al detector:** [qué apuesta propuso la skill y cuál era la real. Si no hubo, "ninguna"]

**El cierre**

- **Veredicto:** [no alcanza para decidir / maté / sigo buscando]
- **Resultado con su población:** [nunca un porcentaje solo; ej. "1 de 61 personas frías del canal de LinkedIn"]
- **Rango real:** [de `references/alcance.md`, si convirtió alguien]
- **Qué aprendí:** [una o dos frases]
- **Siguiente apuesta:** [qué hago el lunes. Nunca vacío]
- **Estado:** [diseñado / lanzado / corrido]

---

## Experimento [00N+1]: [nombre corto]

[misma estructura]

---

## Sección compartible

Esta es la única parte pensada para salir de aquí, y solo si tú la mandas. Copiar, pegar, y tachar
lo que quieras antes de compartirla.

Campos permitidos, no hay otros: fecha, tipo de experimento, alcance frío, métrica, umbral,
resultado, decisión, versión.

Nunca va aquí: el nombre de tu producto, tu código, notas privadas, nombres de clientes, cifras de
ingresos, ni el nombre de tus canales.

| Fecha | Tipo de experimento | Alcance frío | Métrica | Umbral | Resultado | Decisión | Versión |
|---|---|---|---|---|---|---|---|
| [fecha] | [landing con cobro / form de registro / ...] | [número] | [métrica principal] | [umbral firmado] | [números crudos] | [no alcanza / maté / sigo buscando] | [versión] |
| | | | | | | | |
