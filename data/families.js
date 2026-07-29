// POLITEIA — tradition families
//
// The short form places a respondent among FAMILIES rather than individual traditions.
// This is not a dumbed-down version of the long form; it is the honest resolution
// available from 34 items. Families sit far apart in the space, so 34 items separate
// them cleanly.
//
// A family's profile is the MEAN of its members' vectors — nothing is authored twice.
// One item bank, one anchor matrix, two resolutions. Adding an anchor automatically
// updates its family, and there is no second corpus to drift out of sync.
//
// GROUPING IS A NEUTRALITY SURFACE. Two decisions worth stating outright:
//
//   1. Aristocratic Vitalism is SEPARATE from Fascism. Putting Nietzsche under fascism
//      would encode the "Nietzsche caused the Nazis" reading, which most scholarship
//      rejects and which his sister's editing is the source of. They are near neighbours, 
//       but I still gave them separate families.
//   2. Christian Political Order holds Augustine, Aquinas, Social Catholicism, and
//      Integralism together on the ground that each subordinates temporal to spiritual
//      authority. Integralism is the most coercive of the four and the other three do not entail it.
//
// Families are checked by tools/families.mjs the same way anchors are checked by
// recovery: each family's own profile must return that family.

export const FAMILIES = [
  {
    id: 'f-classical',
    name: 'Classical Thought',
    members: ['platonic', 'aristotelian', 'ciceronian', 'stoic', 'epicurean'],
    emblem: 'aristotelian',
    glossary:
      'Politics is one of the means by which human beings pursue the good life, and the ' +
      'question is which arrangement of rule best forms them for it. Constitutions are ' +
      'judged by whether they serve the common good or the rulers, virtue is a public ' +
      'matter, and reason can, at least, in principle settle what justice requires.',
  },
  {
    id: 'f-christian',
    name: 'Christian Political Order',
    members: ['augustinian', 'thomistic', 'social-catholic', 'integralism', 'caesaropapism', 'christian-socialism', 'christian-democracy', 'liberation-theology', 'christian-nationalism'],
    emblem: 'thomistic',
    glossary:
      'Temporal authority is one thing, but there is still something above: it answers to an order it did not ' +
      'make, and to ends beyond the city of man. Human law, it derives its force from a higher ' +
      'law, the family and lesser associations come before the state, and no political ' +
      'settlement is the last word about human life.',
  },
  {
    id: 'f-hierarchical',
    name: 'Hierarchical Traditionalism',
    members: ['feudal', 'divine-right', 'throne-altar', 'traditionalism', 'proslavery'],
    emblem: 'throne-altar',
    glossary:
      'Legitimate order descends rather than ascends. It rests on inheritance, sworn ' +
      'obligation, and sacred sanction rather than consent, and it is held together by ' +
      'things its members could not justify in argument. Modernity is the death of order.',
  },
  {
    id: 'f-statecraft',
    name: 'Sovereigntist Statecraft',
    members: ['machiavellian', 'hobbesian', 'hamiltonian', 'neoreaction', 'physiocracy', 'public-choice'],
    emblem: 'hobbesian',
    glossary:
      'Sovereignty is the first political fact, and you cannot divide it or wish it ' +
      'away. Someone decides. The only real questions are who, and whether anyone is ' +
      'honest about it. What preserves the state gets judged on its own terms, apart ' +
      'from what we would admire in a private man, and energy counts for more here than ' +
      'the story told to justify it.',
  },
  {
    id: 'f-classical-liberal',
    name: 'Classical Liberalism',
    members: ['lockean', 'montesquieuan', 'scottish', 'manchester', 'millian', 'tocquevillian', 'ordoliberalism', 'reformed-resistance', 'harringtonian'],
    emblem: 'lockean',
    glossary:
      'Individuals hold inalienable rights prior to government, and the government exists to secure ' +
      'them. Liberty is protected by certain structures, like divided powers, rule of law, open ' +
      'exchange, as opposed to the virtue of rulers, and complex order arises without ' +
      'anyone designing it.',
  },
  {
    id: 'f-libertarian',
    name: 'Libertarianism',
    members: ['austrian', 'anarcho-capitalism', 'objectivism', 'technolibertarianism', 'individualist-anarchism'],
    emblem: 'austrian',
    glossary:
      'Self-ownership and voluntary exchange are the whole basis of just holdings, and ' +
      'coercion requires an argument that almost nothing supports. The knowledge a ' +
      'society runs on is dispersed beyond any planner’s reach, so the state should be ' +
      'minimal, exited, or dispensed with.',
  },
  {
    id: 'f-progressive-liberal',
    name: 'Progressive Liberalism',
    members: ['benthamite', 'rawlsian', 'new-deal', 'georgist', 'saint-simonian', 'third-way', 'longtermism'],
    emblem: 'rawlsian',
    glossary:
      'Liberal institutions are worth keeping, and keeping them means correcting them. ' +
      'Inherited advantage is not the same thing as deserving something, markets fail in ' +
      'ways we can see coming, and a competent administration working from public ' +
      'reasons can fix a great deal without ever touching private life or private ' +
      'property.',
  },
  {
    id: 'f-republican',
    name: 'Republican Radicalism',
    members: ['rousseauian', 'jacobin', 'jeffersonian', 'levellers', 'blanquism'],
    emblem: 'rousseauian',
    glossary:
      'A free people governs itself directly and owes nothing to inherited rank. ' +
      'Sovereignty rests with the citizens assembled, and the standing threats are ' +
      'corruption and dependence. The earth belongs to the living: no generation is ' +
      'bound by the arrangements of the one before it.',
  },
  {
    id: 'f-state-socialist',
    name: 'Marxism and State Socialism',
    members: ['marxism', 'leninist', 'stalinist', 'fabian', 'market-socialism', 'social-democracy', 'trotskyism', 'maoism', 'owenite'],
    emblem: 'marxism',
    glossary:
      'Productive property in private hands is the root of domination, and abolishing ' +
      'it requires taking and using state power, whether we do it at once or have it accumulated ' +
      'through administration. Class, not creed or nation, is the engine of history. The rest are superstructures projecting from it.',
  },
  {
    id: 'f-anarchist',
    name: 'Anarchism',
    members: ['mutualism', 'bakuninist', 'anarcho-communism', 'stirnerite', 'syndicalism', 'council-communism', 'guild-socialism', 'communalism', 'anarcho-primitivism'],
    emblem: 'anarcho-communism',
    glossary:
      'Domination is the enemy, and the state is its permanent form, including a state ' +
      'run in the name of the oppressed. Society should be rebuilt from below out of ' +
      'unions, councils, communes, and free agreement, with no standing body entitled to ' +
      'compel.',
  },
  {
    id: 'f-critical',
    name: 'Critical and Emancipatory Left',
    members: ['frankfurt', 'foucauldian', 'radical-feminism', 'identitarian-progressivism', 'left-populism'],
    emblem: 'frankfurt',
    glossary:
      'Much of domination survives in culture, knowledge, and the categories through which ' +
      'people understand themselves, not only in law and property. What appears natural ' +
      'is the residue of a cultural settlement, and critique that exposes how it came to seem ' +
      'natural is itself political work.',
  },
  {
    id: 'f-conservative',
    name: 'Conservatism',
    members: ['burkean', 'neoconservatism', 'communitarianism', 'distributism', 'tory-radicalism'],
    emblem: 'burkean',
    glossary:
      'Institutions carry accumulated wisdom that no individual reasoner could supply, ' +
      'and the self that liberal theory imagines — the unencumbered one, choosing his own ' +
      'ends from nowhere — simply does not exist. Reform should be gradual and grounded ' +
      'in what is already there.',
  },
  {
    id: 'f-national-right',
    name: 'National Right',
    members: ['romantic-nationalism', 'paleoconservatism', 'natcon', 'nouvelle-droite', 'zionism'],
    emblem: 'natcon',
    glossary:
      'The nation is the unit in which political life is actually lived, and each people ' +
      'has a character worth preserving against both empire and the global market that ' +
      'flattens differences. Obligation runs first to one’s own, and the state may act ' +
      'vigorously to defend an inheritance.',
  },
  {
    id: 'f-fascist',
    name: 'Fascism',
    members: ['italian-fascism', 'national-socialism', 'authoritarian-corporatism'],
    emblem: 'italian-fascism',
    glossary:
      'The community, a national organism-- be it state, race, or both — is the absolute, and the ' +
      'individual has reality only within it. Constant deliberation is a weakness, and struggle is the ' +
      'condition of life, and a single will expresses the whole better than any ' +
      'assembly can.',
  },
  {
    id: 'f-vitalist',
    name: 'Aristocratic Vitalism',
    members: ['nietzschean', 'vitalist-right'],
    emblem: 'nietzschean',
    glossary:
      'Moralities are symptoms of the life that produced them, and the dominant one is ' +
      'a levelling revolt against everything above it. Value is steeped in strength, ' +
      'beauty, and vital excellence rather than in swathes of moral law, and a civilisation is ' +
      'justified by the exceptional individuals it makes possible.',
  },
  {
    id: 'f-ecological',
    name: 'Ecological Politics',
    members: ['deep-ecology', 'degrowth'],
    emblem: 'deep-ecology',
    glossary:
      'Nonhuman life is worth something in itself, and not only for what we can get out ' +
      'of it. The crisis runs deeper than any technical fix: it is a question about what ' +
      'a civilisation is even for. Whatever the answer, it involves a smaller scale, less ' +
      'throughput, and living inside a place instead of on top of it.',
  },
];

// ---- Derivation and integrity ---------------------------------------------------

import { ANCHORS, ANCHOR_BY_ID } from './anchors.js';

const assigned = new Set();
for (const f of FAMILIES) {
  for (const m of f.members) {
    if (!ANCHOR_BY_ID[m]) throw new Error(`families: ${f.id} names unknown anchor "${m}"`);
    if (assigned.has(m)) throw new Error(`families: anchor "${m}" is in more than one family`);
    assigned.add(m);
  }
  if (!f.members.includes(f.emblem)) throw new Error(`families: ${f.id} emblem is not a member`);
}
const orphans = ANCHORS.filter((a) => !assigned.has(a.id)).map((a) => a.id);
if (orphans.length) throw new Error(`families: anchors in no family: ${orphans.join(', ')}`);

/**
 * Each family carries the componentwise MEAN of its members' vectors, and borrows the
 * emblem member's figure so the verdict block has a face and a quotation.
 */
export const FAMILY_VECTORS = FAMILIES.map((f) => {
  const members = f.members.map((m) => ANCHOR_BY_ID[m]);
  const n = members[0].vector.length;
  const vector = Array.from({ length: n }, (_, i) =>
    members.reduce((s, m) => s + m.vector[i], 0) / members.length
  );
  return {
    ...f,
    era: 'Family',
    figure: ANCHOR_BY_ID[f.emblem].figure,
    memberNames: members.map((m) => m.name),
    vector,
  };
});

export const FAMILY_BY_ID = Object.fromEntries(FAMILY_VECTORS.map((f) => [f.id, f]));
