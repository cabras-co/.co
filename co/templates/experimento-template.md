<!--
Template de `experimento.md`. Se genera EN EL IDIOMA DEL USUARIO: si escribe en inglés, los
títulos de campo van en inglés. Los corchetes son placeholders, se reemplazan; los que no
apliquen se borran, no se dejan vacíos.

Reglas al llenarlo:
- El alcance se cuenta ANTES de firmar el umbral. Nunca al revés.
- El umbral se firma sobre la columna fría (los que no te conocen), no sobre el total.
- Con menos de 200 personas frías, el umbral se escribe en PERSONAS, no en porcentaje.
- El umbral se congela hasta la fecha de revisión. Si se mueve después de ver datos, este archivo
  conserva el ORIGINAL y el cambio se anota en `experimentos-log.md`.
- La numeración (001, 002, 003...) sale del log, no de la memoria.
- Un `experimento.md` a la vez: el vigente. La historia vive en el log.
-->

# Experimento [00N]: [nombre corto]

## Lo que apuesto

Apuesta que probamos: [el comportamiento ajeno que el build asume; ej. "que pagan por esto pudiendo pedírselo gratis al ChatGPT que ya usan"]
Cuánto necesito al mes: [monto; ej. "15,000 pesos"]
A qué precio: [precio; ej. "149 pesos al mes"]
Clientes que necesito: [el resultado de dividir; ej. "100 suscriptores"]

## De dónde va a salir la gente

| Canal | Cuántos hay | ¿Me dejan publicar? | Cuántos me conocen | Cuántos NO me conocen |
|---|---|---|---|---|
| [nombre concreto del lugar] | [número de su pantalla] | [sí / no] | [número] | [número] |
| | | | | |

Alcance total contable: [suma]
**Alcance frío (los que no me conocen): [suma de la última columna]**

[Si algún canal es ciego, sin contador público, se anota "sin contar hasta tener el link" en vez de un número inventado]

## El umbral (firmado antes de ver datos)

Quién: [las personas frías de qué canal; ej. "las 90 que no me conocen, de LinkedIn y WhatsApp"]
Qué les voy a pedir: [el peldaño concreto; ej. "que paguen 149 pesos"]
Métrica principal (la que decide): [una sola; ej. "pagos completados"]
Señales secundarias (se anotan, no deciden): [opcional; ej. "correos dejados"]

**Si [número] o menos, mato.**
**Si [número] o más, [qué significa exactamente, sin exagerar; ej. "no confirmé nada, pero vale la pena buscar un canal diez veces más grande"].**

Ventana: hasta agotar el canal o hasta el [fecha absoluta], lo que pase primero.
Versión de la skill: [ej. v1.2.3]

## Instrumentación

| Canal | Link propio | Instalado |
|---|---|---|
| [canal] | [url con su parámetro] | [ ] |

Checklist de lanzamiento (máx. 3):
- [ ] [item 1]
- [ ] [item 2]
- [ ] [item 3]

Día de lanzamiento: [fecha absoluta]
Fecha de revisión: [fecha absoluta]

--- (se llena después)

## Lo que pasó

| Canal | Gente que llegó (del link) | Convirtieron |
|---|---|---|
| [canal] | [número real, no estimado] | [número] |

Desviaciones de lo firmado: [qué no cuadró entre lo firmado y lo que corrió. Si todo cuadró, "ninguna"]

## Cierre

Veredicto: no alcanza para decidir / maté / sigo buscando
Resultado con su población: [nunca un porcentaje solo; ej. "1 de 61 personas frías del canal de LinkedIn"]
Rango real (si convirtió alguien): [se LEE la fila de `references/alcance.md`, redondeando hacia abajo cuando no hay fila exacta; ej. "1 de 61 personas: no hay fila de 61, se lee la de 50, entre 0.4% y 10.5%"]
Qué aprendí: [una o dos frases]
**Siguiente apuesta: [qué hago el lunes. Nunca se deja vacío]**
