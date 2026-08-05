# Step 3: instrument

**What you get here:** the build measuring the commitment that was signed, with one distinct link
per channel so every person can be traced back to where they came from.
**When you are done:** the experiment runs its window. When the data lands, load
`steps/04-leer-datos.md`.

---

The goal is the minimum needed for the build to measure the commitment that was chosen, and to
know **where each person came from**.

**One distinct link per channel.** This is not optional and it is not analytics theater. It does
three things at once:

- It gives you the real denominator, counted instead of estimated. This is what fixes blind
  channels like WhatsApp and Slack.
- It tells you which channel brought each person, so the bias cannot hide.
- It separates the people who know you from the ones who do not, without asking anyone.

Then the rest:

- **Pago or preorden** → a real payment link. **Never assume the provider.** Ask what country they
  are in first, then ask permission to look up which payment options work there. Stripe does not
  exist everywhere, and assuming it burns your credibility in one line.
- **Registro** → an email form with a counter. A form nobody counts is not a measurement.
- **Always add lead capture**, whatever the commitment is. People who show interest should not
  evaporate between iterations.

**In Claude Code:** implement it in the code yourself. **In claude.ai:** give the concrete steps.

**Output:** instrumented build, one link per channel written into `experimento.md`, a launch
checklist of **maximum 3 items**, and the log entry moved to `lanzado`.

**Research moment 4 (with permission):** payment and form tools available in THEIR country. See
the research section in `SKILL.md`.
