# co · by [cabras.co](https://cabras.co)

**El cofounder honesto que te faltaba.**

Todos tienen un copilot para construir. `co` es lo contrario: el cofounder que te pregunta si alguien lo quiere, antes de que gastes otro fin de semana.

Es una skill para Claude (Claude Code y claude.ai) que convierte lo que ya estás construyendo en un experimento con un número firmado por adelantado. No te pide dejar de construir. Te pide que lo que construyas pueda demostrar si alguien lo quiere.

## Para quién

Para cualquiera que esté construyendo un producto, una app o un side project (casi siempre con AI) y se haya hecho la pregunta: "¿esto lo va a querer alguien? ¿alguien pagaría?". Diseñadores que ya vibecodean, founders, makers. No necesitas saber de metodologías: `co` habla en cristiano.

## Qué hace

1. **Detecta tus apuestas.** Lee tu proyecto y te dice qué apostaste sin darte cuenta: "agregaste suscripción mensual: apostaste a que la gente regresa cada mes. ¿Tienes una sola evidencia de eso?"
2. **Te hace firmar qué cuenta como éxito, antes.** Quién exactamente, qué número, para qué fecha, qué compromiso le vas a pedir a la gente. El número se congela: después de ver los datos no se mueve sin que quede anotado.
3. **Instrumenta tu build.** Botón de pago real, captura de correos, y la pregunta incómoda: ¿dónde lo vas a mostrar y qué día?
4. **Lee los datos y te fuerza a decidir.** Seguir, ajustar o matar. Sin "más o menos funcionó".

Todo queda en un log en tu repo. `co` lo lee cada vez que vuelve, y a la tercera vez te dice cosas como: "llevas 2 experimentos midiendo registros y ninguno te hizo decidir nada; sube a preorden".

## Qué NO hace

- No opina si tu idea es buena. Te ayuda a escribir el número que lo responde con gente real.
- No inventa usuarios simulados como evidencia. Gente inventada no es data.
- No manda nada a ningún lado. Todo vive en tu repo; nada sale sin que tú lo mandes.
- No te bloquea. Cada regla tiene salida de un click: tú decides, y queda anotado.

## Instalar

```bash
git clone https://github.com/cabras-co/.co.git co-skill
cp -r co-skill/co ~/.claude/skills/co
```

En una sesión nueva de Claude Code escribe `/co`, o simplemente pregunta "¿cómo sé si esto funciona?". En claude.ai: sube la carpeta `co/` como skill en tus ajustes de capacidades.

## Ejemplo (60 segundos)

> **Tú:** /co
> **co:** Estás construyendo un generador de meal plans con AI para gente que quiere comer sano. Apuestas que ya hiciste sin decirlo: (a) que pagarían por esto pudiendo pedírselo gratis a ChatGPT, (b) que aguantan 5 pasos de onboarding antes de ver valor, (c) que regresan cada mes. ¿Cuál te da más miedo que sea falsa?

Dos semanas después, con datos:

> **co:** El número que decide eran 2 preórdenes: quedó en cero. Los 9 correos son interés real en la promesa, pero no deciden. Veredicto: AJUSTAR. Un cambio, no cinco. Elige.

## Comparte tu experimento

Si `co` te sirvió, comparte tu experimento (sin el nombre de tu producto, sin tu código: el log trae una sección compartible lista para copiar) en [Discussions](https://github.com/cabras-co/.co/discussions). Cada experimento compartido mejora la siguiente versión.

## English

`co` speaks your language: run it in English and everything (dialogue and files) comes out in English. Same skill, same honesty.

---

Hecho por [cabras.co](https://cabras.co). La **co** es de colaboración, cocreación, codiseño: y de cofounder. MIT License.
