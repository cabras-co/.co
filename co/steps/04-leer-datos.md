# Step 4: read the data and decide

**What you get here:** the check of what ran against what was signed, one of three verdicts with
its population attached, and the next bet.
**When you are done:** the log entry moves to `corrido`. The next bet opens the next experiment:
back to `steps/00-detector.md` if the bet changed, or to `steps/01-alcance.md` if the bet is the
same and what changes is the channel.

---

With a threshold written in people, interpreting is trivial. The work moved somewhere else:
**checking that what ran is what was signed.** Almost nobody does this, which is why most
homemade experiments lie without meaning to.

## If there is no log, you create it here

This is the only step someone can walk into without passing through Step 0. Someone who already
launched and arrives with numbers has nothing written yet, so the file is created here, the same
way Step 2 creates it as a fallback when the user walked in halfway.

Create `experimentos-log.md` from `templates/experimentos-log-template.md` and say the transparency
line at the moment you create it, literally:

> "Esto vive solo en tu repo; nada sale de aquí sin que tú lo mandes."

Then open one entry and write only what the user actually has: date, skill version, the bet the
build was already making, where those people came from, and the raw numbers. Whatever was never
written before the data stays empty, and the threshold above all. An entry born here is honest
about being incomplete.

**With no signed threshold there is nothing to check**, so the field by field check below does not
apply and you do not invent the missing side of it. You read the numbers as a hint, you write them
with their population, and the number gets signed for the NEXT window in `steps/01-alcance.md`.
Say it plainly:

> "El umbral no se escribe para datos que ya viste. Leemos lo que hay como pista, y firmamos número
> para la SIGUIENTE ventana."

## The check, field by field, before looking at a single result

Compare two written things. No interpretation:

> "Firmaste 90 personas que no te conocen. Tu link registró 61. ¿Faltan 29 o el canal no dio para
> más?
>
> Firmaste cobro de 149 pesos. En tu página hoy hay un formulario de lista de espera. Eso no es lo
> que firmaste.
>
> Firmaste hasta el 15 de agosto. Estamos a 4 de agosto y me estás pidiendo el veredicto."

Anything that does not match goes in the log as a deviation, whatever the verdict ends up being.

## Three verdicts

**NO ALCANZA PARA DECIDIR** is the **default**. You stay here if the experiment did not run as
signed, or if the people never showed up. It is not a failure, it is an honest description. On the
second one in a row, name the structural problem:

> "Dos experimentos seguidos sin llegar a datos. El problema a resolver no es el siguiente
> feature, es de dónde va a salir la gente."

**MATÉ** has to be earned: it ran clean, the people showed up, zero converted.

**SIGO BUSCANDO** has to be earned: it ran clean and at least one converted.

There is no "ajustar" verdict. Adjusting describes what comes next, not what happened, and it was
the comfortable exit for people who did not want to kill anything. It lives in the next bet now.

## Every verdict carries its population

Never "convirtió 4%". Always "4% de los 90 que llegaron de ese grupo de Slack". The same sentence
with the population attached stops being a lie.

## The brake on enthusiasm

A threshold that **is met** on a small sample is more dangerous than one that fails. The one that
fails stops you; the one that is met launches you. Read the range from `references/alcance.md` and
say it out loud:

> "Pagó una persona de 90. Eso no es '1.1% de conversión'. Con un solo caso, tu tasa real está
> entre 0.2% y 6%, y esos dos extremos son negocios completamente distintos.
>
> No sabes tu tasa. Sabes que existe al menos un humano en el mundo que paga por esto. Eso es más
> de lo que sabías el lunes y es mucho menos que un negocio."

**If most of the sample came from people who know the user**, the asymmetry is even harder:

> "De los que respondieron, 8 de 11 ya te conocían. Con esa mezcla este dato puede matar, no puede
> confirmar. Si ni tus conocidos pagan, se acabó. Si pagan, no sabes nada del mercado."

## Every verdict ends with the next bet

The verdict says what happened. The next bet says what you do on Monday. A kill that ends at zero
leaves the user standing in front of a dead repo with no direction, and that is not discipline,
it is useless cruelty.

> "Siguiente apuesta: buscar un lugar con 900 personas como esa. Si ahí también paga uno de cada
> 90, entonces sí tienes algo."

## Anti self deception guardrail

In this step the threshold is frozen. If the user tries to move it after seeing the data ("bueno,
1 también está bien"), name it:

> "Eso es maquillar el resultado. El umbral se firmó antes justamente por esta razón."

Then apply locks with an exit (table in `SKILL.md`). `experimento.md` keeps the **original**
threshold, and the log gets the line "umbral movido después de ver datos".

**Output:** verdict and next bet written into `experimento.md`, log entry moved to `corrido`.

---

## Feedback to the creator (once, and only once)

Only **after the first experiment is closed with a verdict** here in Step 4, invite the user once:

> "¿Te sirvió? Si quieres, comparte tu experimento con el creador de la skill. Son 30 segundos:
> copias la sección compartible del log y la pegas aquí:
> https://github.com/cabras-co/.co/discussions
> Va sin el nombre de tu producto y sin tu código. Tú decides qué tachas."

Never ask before delivering value. Never ask twice. Never send anything yourself: every share is
an act of the user.
