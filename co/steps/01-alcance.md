# Step 1: where the people are going to come from

**What you get here:** how many customers the business needs, and a counted reach split in two
columns, the ones who know them and the ones who do not.
**When you are done:** load `steps/02-umbral.md`. If there is no channel at all, you stop here and
load nothing.

---

This runs **before** any number is signed. Reach is the ceiling on everything you can conclude.
Signing a threshold without knowing reach is signing a budget without knowing your income.

## A. How much do you need

> "¿Cuánto necesitas que esto te dé al mes, y a qué precio lo vas a vender?"

Two numbers. You divide. That gives the customers the business needs. This is arithmetic, not a
projection: say the result plainly.

> "Son 100 suscriptores pagando."

## B. The channels

> "Nómbrame los lugares donde vas a mostrarlo, uno por uno. No 'en redes', sino 'el grupo de
> WhatsApp de la generación', 'r/webdev', 'mi lista de correo'."

**Rejection:** a generic answer does not count. Ask again. A place with no name cannot be counted,
and what cannot be counted cannot hold a threshold.

For each place, four questions. All four are countable **by the user**, never estimated by you:

1. "¿Cuánta gente hay? El número que sale en tu pantalla, no tu cálculo."
2. "¿Has visto a alguien más publicar algo así ahí sin que se lo borren?"
3. "¿Cuántos de ahí te conocen?"
4. Only if it is their own audience: "¿ya les vendiste algo antes, y cuántos compraron?"

**Size is not reach.** A subreddit with 400,000 members does not give you 400,000 people. Ask for
something countable instead:

> "Abre los últimos cinco posts parecidos al tuyo en ese lugar. ¿Cuántas vistas o cuántos votos
> tienen? Ese es tu número, no el de miembros."

**Blind channels.** WhatsApp and Slack have no public counter. Do not estimate them. They get
solved in Step 3 with one link per channel, and until then they count as unknown, not as zero and
not as their member count.

## C. The two columns

Reach is never one number. It is **conocidos** and **fríos** (people who do not know you).

**The threshold gets signed on the cold column.** The ones who know you still take part and still
get measured, but they serve one purpose: if they do not respond, it is over.

## D. What you give back

Three fixed parts, in the user's language:

> "Tu alcance real es de 220 personas, y 130 te conocen.
>
> Necesitas 100 clientes. Con 220 personas eso pide que 45 de cada 100 te paguen. Eso no pasa con
> nada. Tu problema no es el experimento, es el canal: aunque midieras perfecto y todo saliera
> bien, por ahí no cabe el negocio que quieres.
>
> Lo que sí puedes hacer con 220: averiguar si alguna de las 90 que no te conocen suelta dinero."

Then two warnings, said once:

> "Ese grupo de 43 lo usas una vez. Si lo quemas hoy con algo a medias, no hay segundo
> experimento la próxima semana."

**If there is no channel at all, stop here.** Do not suggest one. Name the hole and hand it back:

> "No tienes dónde mostrarlo. Ese es tu problema hoy, no el producto. Cualquier número que
> firmemos ahora es fantasía. Consíguelo primero y volvemos."

## E. Special case: zero cold people

Someone with a big audience and no strangers cannot sign a threshold to keep going. They can sign
the best kill threshold there is:

> "Necesitas 100 clientes. Se los vas a ofrecer a las 12,000 personas que más te quieren en el
> mundo, que ya te leen gratis. Si esas 12,000 no producen 100 pagos, mato."

**The friendly sample measures your ceiling.** It is the most favorable scenario that will ever
exist. A ceiling below what you need closes the case.

**Say the caveat out loud.** That reasoning assumes their audience converts better than a
stranger. It is reasonable, it is not a measured law, and it has a known exception: an audience
gathered with free content can be filtered for wanting free things and pay worse than people who
already buy in that category. That is what question 4 is for. If they have never sold anything:

> "Tienes 12,000 lectores y cero compradores conocidos. Esa audiencia no es un activo hasta que
> alguien te pague. Este experimento va a medir dos cosas al mismo tiempo: si el producto sirve y
> si tu gente compra. Si sale mal, no vas a saber cuál de las dos falló."

---

**Output:** the counted reach written into the open entry of `experimentos-log.md`, in the block
"El alcance firmado": one row per channel with how many people were counted, whether they are
allowed to post there, how many of those know them and how many do not, plus the cold reach on its
own line. Numbers only, the way the user counted them, never your estimate.

**You write it here, before loading Step 2, even if the user never gets to Step 2.** This is where
a lot of people stop, and a reach that was counted but not written has to be counted from scratch
next time. With it in the file, whoever comes back lands straight in `steps/02-umbral.md` instead of
repeating this step.

If there is no channel at all, that also gets written: the block says there is no channel, the entry
stays open, and nothing else moves. If the user overrode a gate here, the override goes in the log
with its line, word for word, from the table in `SKILL.md`.

The status field stays empty. It only becomes `diseñado` in Step 2, when a threshold is signed.
