<!-- Reference for the model. Written in Spanish; mirror the user's language when relaying it. -->

# Qué puedes concluir con la gente que realmente tienes

Esta tabla responde la única pregunta que importa cuando tienes poca gente: **con estas
personas, ¿qué puedo afirmar sin mentir?**

Se lee, no se calcula. Busca la fila del número de personas que el usuario tiene de verdad.
Nunca interpoles a ojo entre dos filas y nunca recuerdes un número de memoria.

## La asimetría, que es lo único que hay que entender

**Matar es barato. Confirmar es carísimo.**

Con 75 personas y cero conversiones ya puedes descartar que la tasa sea del 4%. Con esas mismas
75 personas no puedes confirmar absolutamente nada.

Por eso un experimento chico casi siempre se diseña para matar, no para aprobar. Y por eso un
umbral que **se cumple** con muestra chica es más peligroso que uno que falla: el que falla te
frena, el que se cumple te lanza a construir sobre un número que no existe.

## La tabla

| Personas | Si CERO convierten, descartas tasas por encima de | Si UNA convierte, tu tasa real está entre |
|---|---|---|
| 20 | 13.9% | 0.9% y 23.6% |
| 30 | 9.5% | 0.6% y 16.7% |
| 50 | 5.8% | 0.4% y 10.5% |
| 75 | 3.9% | 0.2% y 7.2% |
| 90 | 3.3% | 0.2% y 6.0% |
| 100 | 3.0% | 0.2% y 5.4% |
| 150 | 2.0% | 0.1% y 3.7% |
| 200 | 1.5% | 0.1% y 2.8% |
| 300 | 1.0% | 0.1% y 1.9% |
| 500 | 0.6% | 0.0% y 1.1% |
| 1000 | 0.3% | 0.0% y 0.6% |

Y al revés, cuando el usuario ya sabe qué tasa necesita su negocio:

| Para descartar una tasa de | Necesitas al menos |
|---|---|
| 20% | 14 personas con cero conversiones |
| 10% | 29 personas con cero conversiones |
| 5% | 59 personas con cero conversiones |
| 3% | 99 personas con cero conversiones |
| 2% | 149 personas con cero conversiones |
| 1% | 299 personas con cero conversiones |
| 0.5% | 598 personas con cero conversiones |

## Cómo usarla en cada paso

**Paso 1, al ver el alcance.** Compara la gente que el usuario tiene contra la tasa que necesita
su negocio. Si necesita 100 clientes y tiene 220 personas, eso pide 45% de conversión: no hay
tabla que lo salve, el problema es el canal.

**Paso 2, al firmar.** Con menos de 200 personas, el umbral se escribe en personas, no en
porcentaje. El 5% de 90 son 4.5 personas, y media persona no existe. En números chicos los
porcentajes suenan a una precisión que no está ahí.

**Paso 3, al leer.** Si convirtió una sola persona, di el rango completo en voz alta. "Una de 90"
no es "1.1%": es algo entre 0.2% y 6%, y esos dos extremos son negocios distintos.

## Lo que la tabla no arregla

**El tamaño arregla el ruido, no arregla el sesgo.** Si las 200 personas llegaron de un lugar
donde ya te quieren, tener 200 en vez de 20 no te acerca a la verdad: te da la misma mentira con
más decimales.

El caso extremo está medido. UK Biobank invitó a 9,238,453 personas y entraron 503,317, un 5.45%.
Contra la población general de su misma edad, esos voluntarios tuvieron 46.2% menos mortalidad en
hombres y 55.5% menos en mujeres. Medio millón de personas y el sesgo intacto.
Fuente: Fry A. et al., *American Journal of Epidemiology*, 2017.
https://academic.oup.com/aje/article/186/9/1026/3883629

Por eso el umbral se firma sobre la columna fría, no sobre el total.

## De dónde salen los números

**Columna de descartar:** regla de tres. Si observas 0 eventos en n intentos, el límite superior
del intervalo de confianza del 95% es aproximadamente 3/n. El exacto es 1 menos 0.05 elevado a
1/n, y es el que está en la tabla.
Hanley JA, Lippman-Hand A. "If nothing goes wrong, is everything all right?" *JAMA*.
1983;249(13):1743-1745. https://doi.org/10.1001/jama.1983.03330370053031

**Columna de rango:** intervalo de Wilson (score) al 95%. Se usa este y no el de Wald porque con
muestras chicas y proporciones cerca de cero el de Wald da resultados absurdos, incluso negativos.
Wilson EB. *Journal of the American Statistical Association*. 1927;22(158):209-212.
https://doi.org/10.1080/01621459.1927.10502953

## Cómo se regeneró esta tabla

Cada número salió de correr el script, ninguno se escribió a mano:

```bash
node scripts/alcance.js --tabla     # imprime esta tabla
node scripts/alcance.js --test      # verifica el cálculo contra valores conocidos
node scripts/alcance.js 90 1        # un caso suelto: 1 conversión de 90 personas
```

El script es herramienta de autor. **La skill nunca lo corre**: lee esta tabla y ya. Así el flujo
del usuario no ejecuta código y la skill se puede auditar leyendo texto.

## Si el caso no está en la tabla

Redondea **hacia abajo** al número de personas de la fila anterior. Quedarse corto de muestra es
un error conservador: te hace afirmar menos de lo que podrías. Inventar un número intermedio es
un error que no se ve y que se propaga a la decisión.

Si el usuario tiene 140 personas, usa la fila de 100. Si tiene 12,000, usa la de 1,000 y di que
está muy por encima de la tabla.
