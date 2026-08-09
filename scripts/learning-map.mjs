#!/usr/bin/env node
// Reports on the invisible learning map. The map renders nowhere, so this is
// the only way to read it. Zero dependencies by design — plain JSON.
//
//   npm run learning:map            full report
//   npm run learning:map -- queue   just the study queue
//   npm run learning:map -- gaps    audience x level coverage holes
//
// See Portfolio/MARGINALIA-PLAN.md
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const map = JSON.parse(
  readFileSync(join(root, 'src/content/learning-map.json'), 'utf8')
);

// Published Marginalia entries count toward coverage too.
const publishedDir = join(root, 'src/content/marginalia');
const published = readdirSync(publishedDir).filter((f) => f.endsWith('.md'));

const LEVELS = ['foundation', 'practitioner', 'advanced'];
const STATUSES = ['backlog', 'learning', 'confident', 'taught'];

const terms = map.filter((e) => (e.type ?? 'term') === 'term');
const content = map.filter((e) => (e.type ?? 'term') !== 'term');

const count = (arr, key) =>
  arr.reduce((acc, e) => {
    const k = e[key] ?? '(unset)';
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});

const bar = (n, max, width = 24) =>
  '█'.repeat(Math.max(1, Math.round((n / Math.max(max, 1)) * width)));

const pad = (s, n) => String(s).padEnd(n);
const arg = process.argv[2];

const section = (title) => console.log(`\n\x1b[1m${title}\x1b[0m`);

// ---------------------------------------------------------------- overview
if (!arg || arg === 'all') {
  section('LEARNING MAP');
  console.log(`  invisible terms   ${terms.length}`);
  console.log(`  published terms   ${published.length}  (Marginalia)`);
  console.log(`  tagged content    ${content.length}  (essays + case studies)`);
  console.log(`  total mapped      ${terms.length + published.length}`);

  section('MASTERY');
  const byStatus = count(terms, 'status');
  const maxS = Math.max(...Object.values(byStatus));
  for (const s of STATUSES) {
    const n = byStatus[s] ?? 0;
    console.log(`  ${pad(s, 11)} ${pad(n, 4)} ${bar(n, maxS)}`);
  }

  section('LEVEL');
  const byLevel = count(terms, 'level');
  const maxL = Math.max(...Object.values(byLevel));
  for (const l of LEVELS) {
    const n = byLevel[l] ?? 0;
    console.log(`  ${pad(l, 14)} ${pad(n, 4)} ${bar(n, maxL)}`);
  }

  section('SOURCE');
  const bySource = count(terms, 'source');
  for (const [k, v] of Object.entries(bySource)) {
    console.log(`  ${pad(k === '(unset)' ? 'harvested' : k, 12)} ${v}`);
  }
}

// ------------------------------------------------------------ study queue
const PRIORITIES = ['now', 'next', 'later', 'someday'];

const rankedQueue = terms
  .filter((e) => (e.status ?? 'backlog') === 'backlog' || e.status === 'learning')
  .sort(
    (a, b) =>
      PRIORITIES.indexOf(a.priority ?? 'someday') -
        PRIORITIES.indexOf(b.priority ?? 'someday') ||
      LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) ||
      a.term.localeCompare(b.term)
  );

// `next` on its own: the five things to actually pick up, not the whole list.
if (arg === 'next') {
  const n = Number(process.argv[3] ?? 5);
  section(`NEXT ${n}`);
  for (const e of rankedQueue.slice(0, n)) {
    console.log(`  ${pad(e.priority ?? '—', 8)} ${pad(e.level, 13)} ${e.term}`);
    console.log(`  ${pad('', 8)} ${e.short ?? ''}`);
    console.log(`  ${pad('', 8)} \x1b[2m${e.audience.join(' · ')}  [${e.id}]\x1b[0m\n`);
  }
  console.log(`  ${rankedQueue.length - n} more in the queue.\n`);
  process.exit(0);
}

if (!arg || arg === 'all' || arg === 'queue') {
  section(`STUDY QUEUE  (${rankedQueue.length})`);
  if (rankedQueue.length === 0) {
    console.log('  empty — every mapped term is confident or taught.');
  } else {
    const byPriority = count(rankedQueue, 'priority');
    console.log(
      '  ' +
        PRIORITIES.map((p) => `${p} ${byPriority[p] ?? 0}`).join('   ') +
        '\n'
    );
    let shown = null;
    for (const e of rankedQueue) {
      const p = e.priority ?? '—';
      if (p !== shown) {
        console.log(`  \x1b[1m${p.toUpperCase()}\x1b[0m`);
        shown = p;
      }
      const flag = (e.source ?? 'harvested') === 'curriculum' ? '✎' : ' ';
      console.log(
        `   ${flag} ${pad(e.status ?? 'backlog', 9)} ${pad(e.level, 13)} ${e.term}`
      );
    }
    console.log('\n  ✎ = not yet used in any essay');
    console.log('  npm run learning:map -- next 5   the five to pick up now');
  }
}

// ------------------------------------------------------------------- gaps
if (!arg || arg === 'all' || arg === 'gaps') {
  const audiences = [...new Set(map.flatMap((e) => e.audience))].sort();
  section('COVERAGE  (audience × level)');
  console.log(
    `  ${pad('', 30)}${LEVELS.map((l) => pad(l.slice(0, 5), 7)).join('')}total`
  );
  for (const a of audiences) {
    const mine = terms.filter((e) => e.audience.includes(a));
    const cells = LEVELS.map((l) =>
      pad(mine.filter((e) => e.level === l).length || '·', 7)
    ).join('');
    console.log(`  ${pad(a, 30)}${cells}${mine.length}`);
  }
  console.log('\n  · = no terms mapped at that level yet');
}

console.log('');
