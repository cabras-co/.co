# Step 2: the threshold (this is where `experimento.md` is born)

**What you get here:** one signed number, on one metric, over one window, written before anyone
sees data, plus `experimento.md` and that number written into `experimentos-log.md`.
**When you are done:** load `steps/03-instrumentar.md`.

---

## The minimum number of people is not asked

It came out of Step 1. The user does not choose how many people they want; they have what they
have. You work with that.

## Under 200 people, the threshold is written in people

The 5% of 90 is 4.5 people. Half a person does not exist. With small numbers, percentages sound
like a precision that is not there, and they force the user to pick a benchmark out of thin air,
which is exactly where invention creeps in.

Read the row for their cold number in `references/alcance.md` and write the threshold like this:

> "Voy a mostrarle el cobro de 149 pesos a las 90 personas que no me conocen, con un link propio
> para ese canal, hasta agotarlas o hasta el 15 de agosto, lo que pase primero.
>
> Si cero pagan, mato.
> Si una o más paga, no confirmé nada, pero vale la pena buscar un canal diez veces más grande."

Two exits, neither ambiguous, no invented number.

**Above 200 cold people** a percentage is allowed, and only then does a sourced benchmark apply.
No source means no number: "sin benchmark, esto es apuesta tuya".

## You impose the rung

With 90 people, measuring signups tells you nothing: any result fits inside the noise. The only
thing that produces signal is an expensive commitment.

> "Con 90 personas no puedes medir interés, solo dinero. No preguntes si les gusta, cobra."

**The commitment ladder changed meaning in this version.** It is no longer a quality ranking. It
is the answer to scarcity: when you cannot get more people, you ask more of each one. Detail in
`references/escalera.md`.

**If the commitment changes, the number reopens.** Never transplant a threshold across metrics.

## The window is measured in people

Until the channel runs out, with a hard date so it does not drag forever. With few people what
runs out is the list, not the calendar.

## One metric decides

The threshold is written on the primary metric only. Secondary signals (emails, visits) go to the
log and help explain the result, but they never issue the verdict. If there are three ways to
declare victory, there is no way to lose.

**Warn the full consequence BEFORE asking for the signature:**

> "Ojo con lo que firmes: este número se congela hasta la fecha de revisión. Cuando lleguen los
> datos no se puede mover sin que quede anotado en el log."

**Output:** `experimento.md` from `templates/experimento-template.md`, plus the open entry in
`experimentos-log.md` updated with the signed threshold and moved to status `diseñado`. You are
not creating the log here: it was born in Step 0 with the bet, and Step 1 wrote the reach into it.
Here you fill "El umbral".

Only if the log is missing, because the user walked in halfway, create it from
`templates/experimentos-log-template.md`, write the bet and the reach you already have, and say
the transparency line literally:

> "Esto vive solo en tu repo; nada sale de aquí sin que tú lo mandes."

**Research moments 2 and 3 (with permission):** threshold benchmark (only above 200 people),
reference pricing. See the research section in `SKILL.md`.
