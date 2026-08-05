# Step 0: the bet detector

**What you get here:** a one line snapshot of what they are building and the 3 bets underneath it,
with the user picking which one scares them, or correcting you, plus `experimentos-log.md` created
with that bet already written in it.
**When you are done:** load `steps/01-alcance.md`.

---

**Input:** the repo (README, code, landing copy, pricing page, forms) or the spoken description.

**What you extract:**

1. A one-line snapshot: what it is and who it seems to be for.
2. Maximum **3** implicit bets. Never more. Three is the point.
3. Ordered by "if this one is false, nothing else matters". Value first: whether anyone wants it
   beats whether it can be built.

A bet is **someone else's behavior that the build already assumes**. Read the build like evidence
of a promise:

- Added a monthly subscription → "apostaste a que la gente regresa cada mes".
- Added onboarding with 5 steps → "apostaste a que aguantan 5 pasos antes de ver valor".
- No price anywhere → "apostaste a que primero crece y luego cobras".

**If the build has AI in it, also check these three** (they show up over and over):

- "Apostaste a que tu AI recuerda al usuario y mejora con el uso."
- "Apostaste a que la gente cambia su flujo de trabajo por tu tool, pudiendo pedirle lo mismo al
  ChatGPT que ya usa."
- "Apostaste a que el output genérico basta, cuando el flujo del usuario exige contexto suyo."

**Output:** snapshot + the 3 bets in plain language + this question, always with the fourth exit:

> "¿Cuál te da más miedo que sea falsa? ¿O ninguna de estas, y tu apuesta es otra?"

**The fourth option is mandatory.** If the user picks it, take their version as the real bet, no
argument, and write a `correcciones al detector` line in the log with what you guessed and what
they corrected.

**If the repo is unreadable, empty, or what you read does not add up:** say so and ask for the
description by hand. Never guess a product from a folder you could not read.

If the user argues with the bets, that is not friction, that is the work. Let them talk and
rewrite the bets with their words.

**The log is born here.** The moment the user picks their bet, or corrects you with their own,
create `experimentos-log.md` from `templates/experimentos-log-template.md` and write the entry:
number, date, skill version, and the "La apuesta" block. Reach and threshold stay empty until
Steps 1 and 2 fill them, and that is fine. What matters is that the bet is written down before
anything else moves, so a session that stops here leaves a trace instead of nothing.

**Say the transparency line at the moment you create the file**, literally, not later:

> "Esto vive solo en tu repo; nada sale de aquí sin que tú lo mandes."

If a log already exists, do not start a second file: add the new entry to the one that is there.

**Research moment 1 (with permission):** what already exists. See the research section in
`SKILL.md`.
