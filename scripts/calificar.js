#!/usr/bin/env node
/**
 * calificar.js: la rúbrica del radar, ejecutable.
 *
 * Herramienta de autor, no dependencia de la skill. Sirve para GENERAR la tabla que vive en
 * `radar/README.md` y para verificar que los puntajes de `radar/catalogo.md` cumplen las reglas
 * de `radar/rubrica.md`. La skill `co` nunca corre esto.
 *
 * Cero dependencias. Node >= 14.
 *
 *   node scripts/calificar.js --tabla       imprime la tabla ordenada en markdown
 *   node scripts/calificar.js --test        verifica puntajes, topes y bandas
 *   node scripts/calificar.js --nueva       imprime el formulario en blanco para calificar otra
 *   node scripts/calificar.js co            imprime la ficha de una skill
 *
 * Seis dimensiones, 0 a 3 cada una, 18 posibles. Las definiciones completas de cada nivel
 * viven en `radar/rubrica.md`. Aquí solo están los puntajes y las reglas que los validan.
 *
 * Los puntajes salen de leer el `SKILL.md` de cada una el 5 de agosto de 2026. No de correrlas.
 * Eso está declarado en `radar/metodo.md` y es la limitación principal de todo esto.
 */

const DIMENSIONES = [
  ['G', 'Gente real', 'te obliga a poner esto frente a personas que no son tú ni el modelo'],
  ['A', 'Alcance', 'cuenta a cuánta gente puedes llegar de verdad, y qué se puede concluir con esa cantidad'],
  ['U', 'Umbral firmado', 'escribes el número de éxito antes de correr, no después'],
  ['D', 'Decisión', 'termina en matar o seguir con fecha, no en un documento'],
  ['H', 'Honestidad de la fuente', 'sus números traen fuente, y lo que es apuesta se llama apuesta'],
  ['C', 'Costo para uno solo', 'lo corre una persona sola en una sesión, sin equipo ni semanas'],
];

const BANDAS = [
  [15, 18, 'Te lleva a una decisión con gente real.'],
  [11, 14, 'Te deja en la puerta: falta que alguien cuente tu alcance.'],
  [7, 10, 'Te ordena la cabeza. Sales con mejores documentos, no con más evidencia.'],
  [0, 6, 'Sirve para generar o para alinear. No toca el mundo real.'],
];

/**
 * Topes automáticos. Se aplican al calificar, no después.
 * Cada bandera declara qué dimensión queda clavada o qué tope tiene el total.
 */
const BANDERAS = {
  'usuarios-simulados': { tope: 6, texto: 'presenta gente inventada por el modelo como evidencia' },
  'cifra-sin-fuente': { clava: { H: 0 }, texto: 'afirma una cifra de comportamiento humano sin fuente' },
  'umbral-tardio': { techo: { U: 1 }, texto: 'el umbral se puede escribir después de ver los datos' },
};

const SKILLS = [
  {
    id: 'co',
    nombre: 'co',
    repo: 'cabras-co/.co',
    url: 'https://github.com/cabras-co/.co',
    estrellas: null, // nuestra, no se compara por estrellas
    tipo: 'Juez',
    leido: 'co/SKILL.md + steps/ + references/alcance.md',
    dims: { G: 3, A: 3, U: 3, D: 3, H: 3, C: 3 },
    veredicto: 'Saca 18 porque la rúbrica salió de sus valores. Ese 18 no es evidencia de nada: ver el conflicto de interés en radar/rubrica.md. No genera ideas ni ordena talleres.',
  },
  {
    id: 'lean-startup',
    nombre: 'lean-startup',
    repo: 'getagentseal/founder-playbook',
    url: 'https://github.com/getagentseal/founder-playbook/blob/main/lean-startup/SKILL.md',
    estrellas: 420,
    tipo: 'Juez',
    leido: 'lean-startup/SKILL.md',
    dims: { G: 3, A: 1, U: 3, D: 3, H: 2, C: 1 },
    veredicto: 'La única del muestreo que exige métricas de usuarios reales y fuerza pivotar o seguir con fecha. Asume que ya tienes flujo de usuarios: si tienes 90 personas, la mitad no aplica.',
  },
  {
    id: 'discovery-process',
    nombre: 'discovery-process',
    repo: 'deanpeters/Product-Manager-Skills',
    url: 'https://github.com/deanpeters/Product-Manager-Skills/blob/main/skills/discovery-process/SKILL.md',
    estrellas: 6273,
    tipo: 'Ordenador',
    leido: 'skills/discovery-process/SKILL.md',
    dims: { G: 2, A: 1, U: 2, D: 2, H: 2, C: 1 },
    veredicto: 'Ciclo completo con puertas explícitas y fuentes citadas. Te dice recluta 5 a 10 personas sin preguntarte nunca si las tienes, y pide 3 o 4 semanas y un equipo.',
  },
  {
    id: 'product-coach',
    nombre: 'product-coach',
    repo: 'razbakov/skills',
    url: 'https://github.com/razbakov/skills/blob/main/skills/product-coach/SKILL.md',
    estrellas: 3,
    tipo: 'Juez',
    leido: 'skills/product-coach/SKILL.md',
    dims: { G: 2, A: 0, U: 1, D: 3, H: 1, C: 2 },
    veredicto: 'Tiene la mejor puerta del muestreo: antes de esto todo era barato, después de esto todo es caro. Cruza esa puerta con feedback cualitativo y sin número firmado.',
  },
  {
    id: 'orca-business-ideation',
    nombre: 'orca-business-ideation',
    repo: 'henryvn27/orca-framework',
    url: 'https://github.com/henryvn27/orca-framework/blob/main/skills/orca-business-ideation/SKILL.md',
    estrellas: 4,
    tipo: 'Ordenador',
    leido: 'skills/orca-business-ideation/SKILL.md',
    dims: { G: 1, A: 0, U: 1, D: 2, H: 2, C: 3 },
    veredicto: 'Prohíbe explícitamente inventar tamaños de mercado y manda a investigar en vez de fingir certeza. Es la regla correcta. Después no la aterriza en ningún número tuyo.',
  },
  {
    id: 'pm-product-discovery',
    nombre: 'pm-product-discovery (identify-assumptions, brainstorm-experiments)',
    repo: 'phuryn/pm-skills',
    url: 'https://github.com/phuryn/pm-skills/tree/main/pm-product-discovery',
    estrellas: 24889,
    tipo: 'Ordenador',
    leido: 'identify-assumptions-new/SKILL.md + brainstorm-experiments-existing/SKILL.md',
    dims: { G: 1, A: 0, U: 2, D: 1, H: 1, C: 3 },
    veredicto: 'La más instalada del rubro y la más barata de correr: describes la idea y salen supuestos por 8 categorías de riesgo. Todo el trabajo pasa dentro de la conversación.',
  },
  {
    id: 'opportunity-solution-trees',
    nombre: 'opportunity-solution-trees',
    repo: 'wdavidturner/product-skills',
    url: 'https://github.com/wdavidturner/product-skills/blob/main/skills/opportunity-solution-trees/SKILL.md',
    estrellas: 17,
    tipo: 'Contacto',
    leido: 'skills/opportunity-solution-trees/SKILL.md',
    dims: { G: 3, A: 0, U: 1, D: 1, H: 1, C: 2 },
    veredicto: 'Rechaza de frente las oportunidades inventadas en una sala de juntas: solo acepta las que salen de entrevistas reales. Ese filtro es lo mejor que tiene. No cierra en decisión.',
  },
  {
    id: 'design-thinking',
    nombre: 'design-thinking',
    repo: 'rastian/design-thinking-skills',
    url: 'https://github.com/rastian/design-thinking-skills',
    estrellas: 13,
    tipo: 'Ordenador',
    leido: 'SKILL.md',
    banderas: ['cifra-sin-fuente'],
    dims: { G: 2, A: 1, U: 2, D: 2, H: 0, C: 1 },
    veredicto: 'La más completa del muestreo y la que peor trata sus números: afirma que 5 participantes descubren el 85% de los problemas de usabilidad, sin fuente. Con esa cifra se toman decisiones.',
  },
  {
    id: 'derisk-measurement-advisor',
    nombre: 'derisk-measurement-advisor',
    repo: 'deanpeters/Product-Manager-Skills',
    url: 'https://github.com/deanpeters/Product-Manager-Skills/blob/main/skills/derisk-measurement-advisor/SKILL.md',
    estrellas: 6273,
    tipo: 'Ordenador',
    leido: 'skills/derisk-measurement-advisor/SKILL.md',
    dims: { G: 1, A: 0, U: 1, D: 1, H: 2, C: 2 },
    veredicto: 'No inventa nada y sale con un registro de riesgos priorizado. Te dice corre una prueba sin decirte nunca con cuánta gente ni qué vas a poder concluir.',
  },
  {
    id: 'continuous-discovery',
    nombre: 'continuous-discovery',
    repo: 'RefoundAI/lenny-skills',
    url: 'https://github.com/RefoundAI/lenny-skills/blob/main/skills/continuous-discovery/SKILL.md',
    estrellas: 1220,
    tipo: 'Contacto',
    leido: 'skills/continuous-discovery/SKILL.md',
    dims: { G: 3, A: 1, U: 1, D: 0, H: 1, C: 1 },
    veredicto: 'Pregunta lo más incómodo de todo el muestreo: cuántas horas viste a un cliente trabajar la semana pasada. Es un hábito de equipo, no una decisión: nunca mata nada.',
  },
  {
    id: 'innovation-beckman',
    nombre: 'innovation (Beckman, Berkeley Haas)',
    repo: 'ebowman/business-frameworks',
    url: 'https://github.com/ebowman/business-frameworks/blob/main/skills/innovation/SKILL.md',
    estrellas: 1,
    tipo: 'Ordenador',
    leido: 'skills/innovation/SKILL.md',
    dims: { G: 2, A: 0, U: 1, D: 1, H: 1, C: 2 },
    veredicto: 'Ciclo entender, reencuadrar, diseñar, probar, con observación directa de clientes. Se queda en modelos mentales: no deja archivo ni criterio para matar.',
  },
  {
    id: 'brainstorming',
    nombre: 'brainstorming',
    repo: 'obra/superpowers',
    url: 'https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md',
    estrellas: 267279,
    tipo: 'Divergente',
    leido: 'skills/brainstorming/SKILL.md',
    dims: { G: 0, A: 0, U: 1, D: 2, H: 1, C: 3 },
    veredicto: 'La más instalada de todas y la mejor en lo suyo: no dejarte escribir código antes de acordar qué construyes. El usuario real ahí eres tú. No es un copiloto de validación y no pretende serlo.',
  },
  {
    id: 'innovation-portfolio',
    nombre: 'innovation (gestión y portafolio)',
    repo: 'travisjneuman/.claude',
    url: 'https://github.com/travisjneuman/.claude/blob/main/skills/innovation/SKILL.md',
    estrellas: null,
    tipo: 'Ordenador',
    leido: 'skills/innovation/SKILL.md',
    banderas: ['cifra-sin-fuente'],
    dims: { G: 1, A: 0, U: 2, D: 2, H: 0, C: 1 },
    veredicto: 'Horizontes, Stage-Gate y portafolio: sirve si tienes una organización que innova. Reparte rangos de referencia sin decir de dónde salieron.',
  },
  {
    id: 'mitre-itk',
    nombre: 'MITRE ITK (27 herramientas)',
    repo: 'deanpeters/MITRE-ITK-Skills',
    url: 'https://github.com/deanpeters/MITRE-ITK-Skills',
    estrellas: 10,
    tipo: 'Divergente',
    leido: 'README.md + índice de las 27',
    dims: { G: 1, A: 0, U: 0, D: 1, H: 3, C: 1 },
    veredicto: 'La mejor atribución del muestreo: cada herramienta enlaza a la fuente primaria y respeta su licencia. Son herramientas de taller con grupo: no hay umbral ni decisión en ninguna.',
  },
  {
    id: 'scamper',
    nombre: 'scamper',
    repo: 'neurofoo/agent-skills',
    url: 'https://github.com/neurofoo/agent-skills/blob/main/scamper/SKILL.md',
    estrellas: 106,
    tipo: 'Divergente',
    leido: 'scamper/SKILL.md',
    dims: { G: 0, A: 0, U: 0, D: 1, H: 1, C: 3 },
    veredicto: 'Siete preguntas para sacar ideas de donde ya no salían. Hace eso y nada más, y no finge lo contrario. Calificarla por evidencia es medir un martillo con un termómetro.',
  },
];

const total = (s) => DIMENSIONES.reduce((acc, [k]) => acc + s.dims[k], 0);
const banda = (t) => BANDAS.find(([min, max]) => t >= min && t <= max)[2];

function ordenadas() {
  return [...SKILLS].sort((a, b) => total(b) - total(a) || a.nombre.localeCompare(b.nombre));
}

function tabla() {
  const out = [];
  out.push('| Skill | Repo | ★ | Tipo | G | A | U | D | H | C | Total |');
  out.push('|---|---|---|---|---|---|---|---|---|---|---|');
  for (const s of ordenadas()) {
    const d = s.dims;
    const est = s.estrellas === null ? '-' : String(s.estrellas);
    out.push(
      `| [${s.nombre}](${s.url}) | \`${s.repo}\` | ${est} | ${s.tipo} | ` +
        `${d.G} | ${d.A} | ${d.U} | ${d.D} | ${d.H} | ${d.C} | **${total(s)}**/18 |`
    );
  }
  return out.join('\n');
}

function ficha(id) {
  const s = SKILLS.find((x) => x.id === id);
  if (!s) {
    console.log(`No hay ninguna con id "${id}". Las que hay: ${SKILLS.map((x) => x.id).join(', ')}`);
    process.exit(1);
  }
  const out = [];
  out.push(`${s.nombre}  (${s.repo})`);
  out.push(s.url);
  out.push(`Tipo: ${s.tipo}   Estrellas: ${s.estrellas === null ? 'no aplica' : s.estrellas}`);
  out.push(`Leído: ${s.leido}`);
  out.push('');
  for (const [k, nombre, def] of DIMENSIONES) {
    out.push(`  ${k} ${s.dims[k]}/3  ${nombre}: ${def}`);
  }
  out.push('');
  out.push(`Total: ${total(s)}/18. ${banda(total(s))}`);
  if (s.banderas) {
    for (const b of s.banderas) out.push(`Bandera: ${b} (${BANDERAS[b].texto})`);
  }
  out.push('');
  out.push(s.veredicto);
  return out.join('\n');
}

function formulario() {
  const out = [];
  out.push('Formulario en blanco. Copia esto en radar/catalogo.md y llénalo leyendo el SKILL.md.');
  out.push('Cada nivel está definido en radar/rubrica.md. No califiques de memoria ni de reputación.');
  out.push('');
  out.push('Skill:            ');
  out.push('Repo:             ');
  out.push('URL:              ');
  out.push('Archivos leídos:  ');
  out.push('Tipo (Divergente / Ordenador / Contacto / Juez):  ');
  out.push('');
  for (const [k, nombre, def] of DIMENSIONES) out.push(`  ${k} _/3  ${nombre}: ${def}`);
  out.push('');
  out.push('Banderas (topes automáticos, ver rubrica.md):');
  for (const [k, v] of Object.entries(BANDERAS)) out.push(`  [ ] ${k}: ${v.texto}`);
  out.push('');
  out.push('Total: __/18');
  out.push('Veredicto de una línea (qué hace bien, y dónde se rompe la cadena):');
  return out.join('\n');
}

function test() {
  const casos = [];
  const check = (ok, etiqueta) => casos.push({ ok, etiqueta });

  const ids = new Set();
  for (const s of SKILLS) {
    check(!ids.has(s.id), `id único: ${s.id}`);
    ids.add(s.id);
    check(typeof s.url === 'string' && s.url.startsWith('https://'), `${s.id}: url presente`);
    check(typeof s.leido === 'string' && s.leido.length > 0, `${s.id}: declara qué se leyó`);
    check(['Divergente', 'Ordenador', 'Contacto', 'Juez'].includes(s.tipo), `${s.id}: tipo válido`);

    for (const [k] of DIMENSIONES) {
      const v = s.dims[k];
      check(Number.isInteger(v) && v >= 0 && v <= 3, `${s.id}: ${k} entero entre 0 y 3 (es ${v})`);
    }

    const t = total(s);
    check(t >= 0 && t <= 18, `${s.id}: total dentro de rango`);
    check(typeof banda(t) === 'string', `${s.id}: cae en una banda`);

    for (const b of s.banderas || []) {
      const regla = BANDERAS[b];
      check(!!regla, `${s.id}: bandera conocida "${b}"`);
      if (!regla) continue;
      if (regla.clava) {
        for (const [k, v] of Object.entries(regla.clava)) {
          check(s.dims[k] === v, `${s.id}: bandera ${b} clava ${k} en ${v} (es ${s.dims[k]})`);
        }
      }
      if (regla.techo) {
        for (const [k, v] of Object.entries(regla.techo)) {
          check(s.dims[k] <= v, `${s.id}: bandera ${b} pone techo ${v} a ${k} (es ${s.dims[k]})`);
        }
      }
      if (regla.tope) check(t <= regla.tope, `${s.id}: bandera ${b} pone tope ${regla.tope} al total (es ${t})`);
    }
  }

  // Las bandas cubren 0 a 18 sin huecos ni traslapes.
  for (let t = 0; t <= 18; t++) {
    const encajan = BANDAS.filter(([min, max]) => t >= min && t <= max);
    check(encajan.length === 1, `banda única para total ${t}`);
  }

  // El hallazgo que sostiene el radar: nadie fuera de co pasa de 1 en Alcance.
  const otras = SKILLS.filter((s) => s.id !== 'co');
  check(otras.every((s) => s.dims.A <= 1), 'ninguna otra skill del muestreo pasa de 1 en Alcance');

  let fallas = 0;
  for (const c of casos) {
    if (!c.ok) fallas++;
    if (!c.ok) console.log(`FAIL  ${c.etiqueta}`);
  }
  console.log(`${casos.length - fallas} de ${casos.length} casos.`);
  console.log(fallas === 0 ? 'PASS: todos los casos.' : `FAIL: ${fallas} caso(s).`);
  process.exit(fallas === 0 ? 0 : 1);
}

const args = process.argv.slice(2);
if (args.includes('--test')) {
  test();
} else if (args.includes('--tabla')) {
  console.log(tabla());
} else if (args.includes('--nueva')) {
  console.log(formulario());
} else if (args.length >= 1) {
  console.log(ficha(args[0]));
} else {
  console.log('uso: node calificar.js --tabla | --test | --nueva | <id de skill>');
  process.exit(1);
}
