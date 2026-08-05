<!-- Reference for the model. Written in Spanish; mirror the user's language when relaying it. -->

# La escalera de compromiso y las reglas de evidencia

## La escalera

De arriba (más fuerte) hacia abajo (más débil):

**pago > preorden > registro > click > opinión**

- **Pago:** te dieron dinero por algo que ya existe. Es lo más caro que alguien te puede dar.
- **Preorden:** te dieron dinero por algo que todavía no existe. Compromiso real con riesgo suyo.
- **Registro:** dejaron su correo o su teléfono. Cuesta poco, pero cuesta.
- **Click:** hicieron algo con el cursor. Casi gratis para ellos.
- **Opinión:** dijeron algo. Gratis, amable, y casi siempre inútil para decidir.

## Para qué sirve la escalera

No es una jerarquía de calidad. **Es la respuesta a que te falte gente.**

Cuando no puedes conseguir más personas, lo único que te queda es pedirle más a cada una. Con 90
personas, medir registros no dice nada: cualquier resultado cabe dentro del ruido. Con esas
mismas 90, un cobro sí produce una señal que se puede leer.

Por eso el peldaño no se propone, se impone, y se explica así:

> "Con 90 personas no puedes medir interés, solo dinero. No preguntes si les gusta, cobra."

Cuando el usuario sí tiene mucha gente, ahí la escalera vuelve a ser una sugerencia de subir un
peldaño, no una obligación.

**Regla de uso:** propón UN peldaño arriba del que la persona te dijo, no tres. Pedir el salto
completo hace que nadie te dé nada. Y siempre di la razón en una línea: "un correo te dice que le
interesó; 149 pesos te dicen que lo quiere".

Si aun así prefieren el peldaño bajo, adelante. Queda anotado en el log y seguimos.

## Las reglas de evidencia

**1. Conducta arriba de declaración, declaración arriba de opinión.**

- Conducta: lo que hicieron. Pagaron, se registraron, regresaron, lo usaron dos veces.
- Declaración: lo que dijeron que harían. "Sí lo compraría."
- Opinión: lo que sintieron. "Está padre", "buena idea", "yo lo usaría".

Solo la primera cuenta para decidir. Las otras dos se anotan, no deciden. Cuando alguien te
elogia, la pregunta siguiente no es "¿te gusta?", es "¿lo usaste esta semana?".

**2. El umbral se firma antes de ver los datos.**

Escribir el número después es escribir la respuesta que ya querías. Firmado antes, el resultado
te puede contradecir, que es justo para lo que sirve. Si el usuario quiere moverlo después de ver
los datos, eso se nombra de frente: es maquillar el resultado. La salida existe porque la decisión
es suya, pero `experimento.md` conserva el número original y el log anota "umbral movido después
de ver datos".

**3. Matar es barato, confirmar es carísimo.**

Con 75 personas y cero conversiones ya descartaste una tasa del 4%. Con esas mismas 75 no puedes
confirmar nada.

De ahí sale la regla incómoda: **el umbral que se cumple con muestra chica es más peligroso que
el que falla.** El que falla te frena. El que se cumple te lanza a construir sobre un número que
no existe. Cuando el umbral se cumple con pocos casos, di el rango completo en voz alta antes de
que el usuario se emocione. Los números están en `references/alcance.md`.

**4. De dónde salió la gente decide qué puedes concluir.**

Si la mayoría de tu muestra viene de un lugar donde ya te conocen o donde ya aman la categoría,
ese dato **solo puede matar, nunca confirmar**. Si ni tus conocidos pagan, se acabó. Si pagan, no
sabes nada del mercado.

Y el corolario que sorprende a todos: **más audiencia no te da más poder de confirmar, te da más
poder de matar.** Alguien con 12,000 seguidores y ningún desconocido tiene el mejor experimento
de matar que existe y ninguna forma de confirmar.

**5. Una métrica decide; las demás explican.**

Un experimento, una métrica principal, y solo ella da el veredicto. Las señales secundarias
(correos, visitas, comentarios) se anotan en el log y ayudan a entender el resultado, pero no lo
deciden. Si hay tres formas de declararte ganador, no hay ninguna de perder.

**6. Todo resultado se escribe con su población pegada.**

Nunca "convirtió 4%". Siempre "4% de los 90 que llegaron de ese grupo de Slack". La misma frase
con la población pegada deja de ser una mentira.
