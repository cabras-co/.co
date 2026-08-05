# co · by [cabras.co](https://cabras.co)

**El cofounder honesto que te faltaba.**

Todos tienen un copilot para construir. `co` es lo contrario: el cofounder que te dice qué puedes concluir de verdad con la poca gente a la que vas a llegar. Casi siempre eso es permiso para tirar algo, y una pista de qué construir en su lugar.

Es una skill para Claude (Claude Code y claude.ai).

## Por qué existe

Construir se volvió barato. Conseguir que alguien lo vea, no.

Quien está construyendo hoy tiene tres problemas que no puede cambiar: tiene poca gente a quien mostrarle su producto, la poca gente que consigue llega torcida (filtrada por el canal que la trajo), y se va a mentir a sí mismo al leer el resultado.

Bajo esas condiciones, casi nunca vas a poder **confirmar** que tu idea funciona. Casi siempre vas a poder **descartar** algo. `co` está construida alrededor de eso.

## Para quién

Para cualquiera que esté construyendo un producto, una app o un side project (casi siempre con AI) y se haya hecho la pregunta: "¿esto lo va a querer alguien? ¿alguien pagaría?". Diseñadores que ya vibecodean, founders, makers. No necesitas saber de metodologías: `co` habla en cristiano.

## Qué hace

1. **Detecta tus apuestas.** Lee tu proyecto y te dice qué apostaste sin darte cuenta: "agregaste suscripción mensual: apostaste a que la gente regresa cada mes. ¿Tienes una sola evidencia de eso?"
2. **Cuenta a cuánta gente puedes llegar de verdad, antes de firmar nada.** Cuánto necesitas ganar, a qué precio, y de qué lugares concretos va a salir la gente. No estima: tú lees los números de tu pantalla y `co` suma. Y separa a los que ya te conocen de los que no.
3. **Te hace firmar un umbral que sí quepa en tu alcance.** Con poca gente, el número se escribe en personas, no en porcentajes: "si cero de mis 90 pagan, mato". Se congela hasta la fecha de revisión.
4. **Instrumenta tu build.** Un link distinto por canal, para que sepas de dónde salió cada persona en vez de adivinarlo. Cobro real, captura de correos.
5. **Verifica que corriste lo que firmaste, y te fuerza a decidir.** No alcanza para decidir, maté, o sigo buscando. Y siempre cierra con la siguiente apuesta, nunca en cero.

Todo queda en un log en tu repo. A partir del tercer experimento, `co` deja de estimar tu alcance y usa tus propios números: "tu LinkedIn te ha dado 180, 210 y 160 personas; no firmes nada que necesite 500".

## Lo que casi nadie te va a decir

**Matar es barato, confirmar es carísimo.** Con 75 personas y cero conversiones ya descartaste una tasa del 4%. Confirmar una del 5% te pide más de mil personas.

**Más audiencia no te da más poder de confirmar, te da más poder de matar.** Si tienes 12,000 seguidores y ninguno paga, se acabó. Si pagan, no sabes nada del mercado, solo de tu relación con ellos.

**El tamaño arregla el ruido, no arregla el sesgo.** Los números están en [`co/references/alcance.md`](co/references/alcance.md), con sus fuentes.

## Qué NO hace

- No opina si tu idea es buena. Te ayuda a escribir el número que lo responde con gente real.
- No genera ideas. No te faltan ideas, te sobran.
- No consigue tráfico ni te sugiere en qué subreddit publicar. Esa información cambia cada semana y no tiene fuente estable: inventarla sería mentirte con cara de ayuda.
- No inventa usuarios simulados como evidencia. Gente inventada no es data.
- No corre scripts durante tu sesión. Todo lo que necesita ya está en texto dentro del repo.
- No manda nada a ningún lado. Todo vive en tu repo; nada sale sin que tú lo mandes.
- No te bloquea. Cada regla tiene salida de un click: tú decides, y queda anotado.

## Instalar

```bash
git clone https://github.com/cabras-co/.co.git co-skill
cp -r co-skill/co ~/.claude/skills/co
```

En una sesión nueva de Claude Code escribe `/co`, o simplemente pregunta "¿cómo sé si esto funciona?".

En claude.ai la skill se sube como archivo `.zip`, no como carpeta:

1. Descarga el `.zip` del repo, o comprime tú la carpeta `co/`. Guárdalo tal cual: no lo descomprimas.
2. Entra a [claude.ai](https://claude.ai).
3. Abre **Configuración**.
4. Entra a **Capacidades**.
5. Entra a **Habilidades**.
6. Sube el archivo `.zip`.

## Ejemplo (60 segundos)

> **Tú:** /co
> **co:** Estás construyendo un convertidor de notas de junta en pendientes. Apuestas que ya hiciste sin decirlo: (a) que la gente paga por esto pudiendo pedírselo gratis al ChatGPT que ya usa, (b) que confían en una AI con sus juntas, (c) que el problema duele lo suficiente para cambiar su forma de trabajar. ¿Cuál te da más miedo que sea falsa?

Después de contar sus canales:

> **co:** Reddit queda fuera, ahí no te dejan publicar. Tu alcance contable son 220 personas y 130 te conocen. Necesitas 100 clientes: eso pide que 45 de cada 100 te paguen, y eso no pasa con nada. Tu problema no es el experimento, es el canal.

Dos semanas después, con datos:

> **co:** Pagó una de 61 personas frías. Eso no es "1.6% de conversión". En la tabla no hay fila de 61, así que se redondea hacia abajo y se lee la de 50: con un solo caso tu tasa real está entre 0.4% y 10.5%, y esos dos extremos son negocios distintos. Sabes que existe al menos un humano que paga por esto. Siguiente apuesta: encontrar un lugar con 600 personas como esa.

## Comparte tu experimento

Si `co` te sirvió, comparte tu experimento (sin el nombre de tu producto, sin tu código: el log trae una sección compartible lista para copiar) en [Discussions](https://github.com/cabras-co/.co/discussions). Cada experimento compartido mejora la siguiente versión.

## English

`co` speaks your language: run it in English and everything (dialogue and files) comes out in English. Same skill, same honesty.

---

Hecho por [cabras.co](https://cabras.co). La **co** es de colaboración, cocreación, codiseño: y de cofounder. MIT License.
