#!/usr/bin/env node
/**
 * alcance.js: qué puedes concluir con la gente que realmente tienes.
 *
 * Herramienta de autor, no dependencia de la skill. Sirve para GENERAR la tabla que vive en
 * `co/references/alcance.md`. La skill lee esa tabla; nunca corre esto en vivo.
 *
 * Cero dependencias. Node >= 14.
 *
 *   node scripts/alcance.js --tabla     imprime la tabla en markdown
 *   node scripts/alcance.js --test      verifica el cálculo contra valores conocidos
 *   node scripts/alcance.js 90          qué puedes concluir con 90 personas
 *   node scripts/alcance.js 90 1        idem, habiendo observado 1 conversión
 *
 * Dos cálculos, los dos estándar:
 *
 * 1. Regla de tres. Si observas 0 eventos en n intentos, el límite superior del intervalo de
 *    confianza del 95% es aproximadamente 3/n. El exacto es 1 - 0.05^(1/n).
 *    Referencia: Hanley JA, Lippman-Hand A. "If nothing goes wrong, is everything all right?"
 *    JAMA. 1983;249(13):1743-1745. https://doi.org/10.1001/jama.1983.03330370053031
 *
 * 2. Intervalo de Wilson (score) para una proporción. Se comporta bien con muestras chicas y
 *    con proporciones cerca de 0, donde el intervalo de Wald da resultados absurdos.
 *    Referencia: Wilson EB. "Probable inference, the law of succession, and statistical
 *    inference." JASA. 1927;22(158):209-212. https://doi.org/10.1080/01621459.1927.10502953
 */

const Z = 1.959963984540054; // normal estándar, dos colas, 95%

/** Límite superior con cero eventos en n intentos. Devuelve proporción (0 a 1). */
function reglaDeTres(n) {
  if (!Number.isInteger(n) || n < 1) throw new Error('n tiene que ser un entero >= 1');
  return {
    exacto: 1 - Math.pow(0.05, 1 / n),
    aproximado: 3 / n,
  };
}

/** Intervalo de Wilson al 95% para k eventos en n intentos. Devuelve proporciones (0 a 1). */
function wilson(k, n, z = Z) {
  if (!Number.isInteger(n) || n < 1) throw new Error('n tiene que ser un entero >= 1');
  if (!Number.isInteger(k) || k < 0 || k > n) throw new Error('k tiene que ser un entero entre 0 y n');
  const z2 = z * z;
  const denom = n + z2;
  const centro = (k + z2 / 2) / denom;
  const mitad = (z / denom) * Math.sqrt((k * (n - k)) / n + z2 / 4);
  return {
    bajo: Math.max(0, centro - mitad),
    alto: Math.min(1, centro + mitad),
    puntual: k / n,
  };
}

const pct = (x, d = 1) => `${(x * 100).toFixed(d)}%`;

/** Cuántas personas hacen falta para que 0 conversiones descarte una tasa dada. */
function nParaDescartar(tasa) {
  return Math.ceil(Math.log(0.05) / Math.log(1 - tasa));
}

function explicar(n, k) {
  const lineas = [];
  if (k === 0 || k === undefined) {
    const r = reglaDeTres(n);
    lineas.push(`Con ${n} personas y CERO conversiones:`);
    lineas.push(`  descartas tasas por encima de ${pct(r.exacto, 2)} (aprox. 3/n = ${pct(r.aproximado, 2)}).`);
    lineas.push(`  o sea: si de verdad convirtiera más que eso, era muy improbable ver cero.`);
    lineas.push(`  lo que NO puedes: afirmar que la tasa es cero.`);
  }
  if (k !== undefined && k > 0) {
    const w = wilson(k, n);
    lineas.push(`Con ${k} de ${n}:`);
    lineas.push(`  puntual ${pct(w.puntual, 2)}, pero el rango real va de ${pct(w.bajo, 2)} a ${pct(w.alto, 2)}.`);
    lineas.push(`  lo que sabes: existe al menos una persona que sí.`);
    lineas.push(`  lo que NO sabes: tu tasa. Esos dos extremos son negocios distintos.`);
  }
  return lineas.join('\n');
}

function tabla() {
  const ns = [20, 30, 50, 75, 90, 100, 150, 200, 300, 500, 1000];
  const out = [];
  out.push('| Personas | Si CERO convierten, descartas tasas por encima de | Si UNA convierte, tu tasa real está entre |');
  out.push('|---|---|---|');
  for (const n of ns) {
    const r = reglaDeTres(n);
    const w = wilson(1, n);
    out.push(`| ${n} | ${pct(r.exacto, 1)} | ${pct(w.bajo, 1)} y ${pct(w.alto, 1)} |`);
  }
  out.push('');
  out.push('| Para descartar una tasa de | Necesitas al menos |');
  out.push('|---|---|');
  for (const t of [0.20, 0.10, 0.05, 0.03, 0.02, 0.01, 0.005]) {
    out.push(`| ${pct(t, 1)} | ${nParaDescartar(t)} personas con cero conversiones |`);
  }
  return out.join('\n');
}

function test() {
  const casos = [];
  const casi = (a, b, tol, etiqueta) => casos.push({ ok: Math.abs(a - b) < tol, etiqueta, a, b });

  // Regla de tres: la aproximación 3/n contra el exacto, n grande.
  casi(reglaDeTres(100).exacto, 0.0295, 0.0002, 'regla de tres exacta n=100 ~ 2.95%');
  casi(reglaDeTres(100).aproximado, 0.03, 1e-12, 'regla de tres aproximada n=100 = 3%');
  casi(reglaDeTres(75).aproximado, 0.04, 1e-12, 'regla de tres aproximada n=75 = 4%');

  // Wilson contra valores publicados. 0 de 50.
  const w0 = wilson(0, 50);
  casi(w0.bajo, 0, 1e-9, 'Wilson 0/50 límite inferior = 0');
  casi(w0.alto, 0.0713, 0.0005, 'Wilson 0/50 límite superior ~ 7.13%');

  // 1 de 90: el caso del ejemplo de la skill.
  const w1 = wilson(1, 90);
  casi(w1.bajo, 0.0020, 0.0005, 'Wilson 1/90 límite inferior ~ 0.2%');
  casi(w1.alto, 0.0603, 0.0005, 'Wilson 1/90 límite superior ~ 6.0%');

  // Caso clásico de libro: 5 de 100. Publicado como aprox 2.2% a 11.2%.
  const w5 = wilson(5, 100);
  casi(w5.bajo, 0.0216, 0.0010, 'Wilson 5/100 límite inferior ~ 2.2%');
  casi(w5.alto, 0.1119, 0.0010, 'Wilson 5/100 límite superior ~ 11.2%');

  // Simetría: k = n/2 debe dar intervalo centrado en 0.5.
  const wm = wilson(50, 100);
  casi((wm.bajo + wm.alto) / 2, 0.5, 1e-9, 'Wilson 50/100 centrado en 50%');

  let fallas = 0;
  for (const c of casos) {
    if (!c.ok) fallas++;
    console.log(`${c.ok ? 'PASS' : 'FAIL'}  ${c.etiqueta}  (obtenido ${c.a})`);
  }
  console.log(fallas === 0 ? '\nPASS: todos los casos.' : `\nFAIL: ${fallas} caso(s).`);
  process.exit(fallas === 0 ? 0 : 1);
}

const args = process.argv.slice(2);
if (args.includes('--test')) {
  test();
} else if (args.includes('--tabla')) {
  console.log(tabla());
} else if (args.length >= 1) {
  const n = parseInt(args[0], 10);
  const k = args[1] !== undefined ? parseInt(args[1], 10) : 0;
  console.log(explicar(n, k));
} else {
  console.log('uso: node alcance.js <personas> [conversiones] | --tabla | --test');
  process.exit(1);
}
