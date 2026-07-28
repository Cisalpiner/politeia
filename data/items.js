// POLITEIA — item bank (v0.2.0: 71 items)
//
// AUTHORING RULES (see docs/METHOD.md §3):
//   1. No item names an ideology, thinker, party, movement, or -ism. Ever.
//   2. Plain language. A respondent who has read no political theory must be able to
//      answer every item honestly. Difficult vocabulary measures education, not belief.
//   3. Every item is written from inside the position it tests, in that position's own
//      terms. No position is stated in its opponents' language.
//   4. Polarity balance: 40-60% of each axis's loadings are negative, so that "agree"
//      never trends consistently toward one pole.
//
// IDS ARE PERMANENT. They are identifiers, not positions. Gaps in the sequence are
// deliberate — a retired item's id is never reused, so that old result links and old
// anchor profiles never silently mean something different than they did.
//
// TO ADD ITEMS: append with a fresh id. Anchor profiles are keyed by id, so nothing
// existing shifts. `node tools/audit.mjs` will then list which anchors need a value for
// the new item; until they have one it is treated as an abstention for that anchor.
//
// `loadings` are signed weights in [-1, 1] against axis ids in data/axes.js.
// `mirror` names a logically-opposed item on the same axis, used to estimate
//   acquiescence bias. Mirrors are NOT coherence findings.
// `dyad` names coherence dyads (data/dyads.js): commitments that pull against each
//   other WITHOUT being logical contradictions.

export const ITEMS = [
  // ======================= AUTHORITY / LIBERTY =======================
  {
    id: 'i01',
    short: true,
    text: 'A society works best when clear lines of command run from top to bottom, and everyone knows where they stand in them.',
    kind: 'principle',
    loadings: { authority: 0.9 },
    mirror: 'i02',
  },
  {
    id: 'i02',
    short: true,
    text: 'Nobody has the right to give me orders unless I have agreed to be bound.',
    kind: 'principle',
    loadings: { authority: -0.9 },
    mirror: 'i01',
    dyad: ['d02', 'd08'],
  },
  {
    id: 'i03',
    short: true,
    text: 'Some questions are too important to be settled by a vote.',
    kind: 'principle',
    loadings: { authority: 0.7, vanguard: 0.7 },
    dyad: ['d04'],
  },
  {
    id: 'i04',
    text: 'A community may require its members to keep up practices they personally reject.',
    kind: 'principle',
    loadings: { authority: 0.8, organic: 0.5 },
    mirror: 'i05',
    dyad: ['d16'],
  },
  {
    id: 'i05',
    text: 'Every restriction on what a person may do has to justify itself. Freedom is what you start from.',
    kind: 'principle',
    loadings: { authority: -0.8 },
    mirror: 'i04',
    dyad: ['d10'],
  },
  {
    id: 'i06',
    text: 'Better that a hundred guilty people go free than that the state hold a power it might one day abuse.',
    kind: 'principle',
    loadings: { authority: -0.7, constrained: 0.4 },
    dyad: ['d12'],
  },
  {
    id: 'i07',
    text: 'Obedience to lawful authority is a virtue in itself, not merely a convenience.',
    kind: 'principle',
    loadings: { authority: 0.8, transcendent: 0.3 },
    mirror: 'i08',
  },
  {
    id: 'i08',
    text: "A person's home and conscience should be beyond the reach of any authority whatsoever.",
    kind: 'principle',
    loadings: { authority: -0.8 },
    mirror: 'i07',
  },
  {
    id: 'i09',
    text: 'A chamber of the legislature whose members inherit their seats can serve a country better than one elected every few years.',
    kind: 'institutional',
    loadings: { authority: 0.6, restoration: 0.7, vanguard: 0.5 },
  },
  {
    id: 'i10',
    text: 'A country would be better run if it were managed like a company, with a single owner answerable for the results.',
    kind: 'institutional',
    loadings: { authority: 0.9, vanguard: 0.8, communal: -0.4 },
    mirror: 'i11',
  },
  {
    id: 'i11',
    short: true,
    text: 'Power should be divided among rival institutions even when that makes government slow and frustrating.',
    kind: 'institutional',
    loadings: { authority: -0.8, constrained: 0.5 },
    mirror: 'i10',
  },

  // ======================= COMMUNAL / PRIVATE =======================
  {
    id: 'i13',
    short: true,
    text: 'The land, factories, and machines a society depends on should belong to everyone in common.',
    kind: 'institutional',
    loadings: { communal: 1.0 },
    mirror: 'i14',
    dyad: ['d02'],
  },
  {
    id: 'i14',
    short: true,
    text: 'What a person builds or earns is theirs, and no one may take it from them for the general good.',
    kind: 'principle',
    loadings: { communal: -0.9 },
    mirror: 'i13',
  },
  {
    id: 'i15',
    short: true,
    text: 'Large differences in wealth are acceptable so long as they came about without theft or fraud.',
    kind: 'principle',
    loadings: { communal: -0.8, constrained: 0.2 },
    dyad: ['d06'],
  },
  {
    id: 'i16',
    text: 'Someone who inherits a great fortune has done nothing to deserve it.',
    kind: 'principle',
    loadings: { communal: 0.7, restoration: -0.2 },
  },
  {
    id: 'i17',
    text: 'No one should be able to profit from merely owning a thing while others do the work on it.',
    kind: 'principle',
    loadings: { communal: 0.8 },
    mirror: 'i18',
  },
  {
    id: 'i18',
    text: 'The wish to keep what you have made is natural and healthy, not a flaw to be corrected.',
    kind: 'principle',
    loadings: { communal: -0.7, constrained: 0.5 },
    mirror: 'i17',
    dyad: ['d11'],
  },
  {
    id: 'i19',
    short: true,
    text: 'Everyone should be guaranteed the necessities of life regardless of what they contribute.',
    kind: 'principle',
    loadings: { communal: 0.8, constrained: -0.3 },
    mirror: 'i121',
    dyad: ['d11'],
  },
  {
    id: 'i21',
    text: 'The most important industries should be run for the public rather than sold for profit.',
    kind: 'institutional',
    loadings: { communal: 0.8, authority: 0.3 },
  },
  {
    id: 'i22',
    text: 'Property spread widely among many small owners is better than either state ownership or a few large private concentrations.',
    kind: 'institutional',
    loadings: { communal: -0.3, organic: 0.4, restoration: 0.4 },
  },
  {
    id: 'i23',
    text: 'How much a person is paid should depend on what they need, not on what their work fetches.',
    kind: 'principle',
    loadings: { communal: 0.9 },
    mirror: 'i118',
    dyad: ['d13'],
  },

  // ======================= ORGANIC / UNIVERSAL =======================
  {
    id: 'i24',
    short: true,
    text: 'I owe more to people I share a homeland, a language, and ancestors with than to strangers far away.',
    kind: 'principle',
    loadings: { organic: 1.0 },
    mirror: 'i25',
  },
  {
    id: 'i25',
    short: true,
    text: 'Where a person happened to be born is morally irrelevant.',
    kind: 'principle',
    loadings: { organic: -0.9 },
    mirror: 'i24',
    dyad: ['d01'],
  },
  {
    id: 'i26',
    short: true,
    text: 'A people is something you are born into, not something you can join.',
    kind: 'principle',
    loadings: { organic: 0.9, constrained: 0.3 },
    mirror: 'i27',
    dyad: ['d06'],
  },
  {
    id: 'i27',
    short: true,
    text: "Anyone who accepts a country's laws and speaks its language is as much a member of it as anyone born there.",
    kind: 'principle',
    loadings: { organic: -0.9 },
    mirror: 'i26',
  },
  {
    id: 'i28',
    text: 'A group that has been wronged has claims on the rest of society that people outside that group do not have.',
    kind: 'principle',
    loadings: { organic: 0.6, communal: 0.4, restoration: -0.4 },
    mirror: 'i29',
    dyad: ['d01'],
  },
  {
    id: 'i29',
    text: 'Justice means treating people as individuals and never as members of a category.',
    kind: 'principle',
    loadings: { organic: -0.8, objectivist: 0.3 },
    mirror: 'i28',
    dyad: ['d09'],
  },
  {
    id: 'i30',
    text: 'A society that loses its inherited customs and language has lost something nothing else can replace.',
    kind: 'principle',
    loadings: { organic: 0.8, restoration: 0.6 },
    mirror: 'i119',
  },
  {
    id: 'i32',
    text: 'A country is entitled to decide who may enter it, on whatever grounds it likes.',
    kind: 'institutional',
    loadings: { organic: 0.8, authority: 0.4 },
    mirror: 'i122',
    dyad: ['d10'],
  },
  {
    id: 'i33',
    text: "Loyalty to one's own group is the source of most of the world's cruelty.",
    kind: 'principle',
    loadings: { organic: -0.7, constrained: -0.3 },
  },
  {
    id: 'i34',
    text: 'The dead and the unborn have a claim on how we live now.',
    kind: 'principle',
    loadings: { organic: 0.6, restoration: 0.7, transcendent: 0.3 },
    mirror: 'i120',
  },

  // ======================= TRANSCENDENT / IMMANENT =======================
  {
    id: 'i35',
    short: true,
    text: 'There is an order in the world that human beings did not invent and cannot repeal.',
    kind: 'principle',
    loadings: { transcendent: 1.0, objectivist: 0.4 },
    mirror: 'i36',
    dyad: ['d03', 'd15'],
  },
  {
    id: 'i36',
    short: true,
    text: 'Right and wrong are things people made up, and people can unmake them.',
    kind: 'principle',
    loadings: { transcendent: -0.9, objectivist: -0.5 },
    mirror: 'i35',
  },
  {
    id: 'i37',
    text: 'A law that conflicts with a higher moral order is not really a law at all.',
    kind: 'principle',
    loadings: { transcendent: 0.9, objectivist: 0.4 },
    mirror: 'i38',
  },
  {
    id: 'i38',
    text: 'Nothing is sacred. Everything may be examined, and nothing is owed reverence.',
    kind: 'principle',
    loadings: { transcendent: -0.8 },
    mirror: 'i37',
  },
  {
    id: 'i39',
    short: true,
    text: 'The state should recognise one religion as true and order public life around it.',
    kind: 'institutional',
    loadings: { transcendent: 1.0, authority: 0.7 },
    dyad: ['d08'],
  },
  {
    id: 'i40',
    text: 'The purpose of politics is to reduce suffering and increase wellbeing, and nothing beyond that.',
    kind: 'principle',
    loadings: { transcendent: -0.8 },
    dyad: ['d14'],
  },
  {
    id: 'i41',
    text: 'Human beings have a purpose they did not choose, and a good life consists in fulfilling it.',
    kind: 'principle',
    loadings: { transcendent: 0.9, constrained: 0.3 },
    mirror: 'i42',
  },
  {
    id: 'i42',
    short: true,
    text: 'The universe has no plan for us, and that is not a loss.',
    kind: 'principle',
    loadings: { transcendent: -0.9 },
    mirror: 'i41',
  },
  {
    id: 'i43',
    text: 'Some things must not be done even if doing them would leave everyone better off.',
    kind: 'principle',
    loadings: { transcendent: 0.6, objectivist: 0.5 },
    dyad: ['d14'],
  },

  // ======================= RESTORATION / PROGRESS =======================
  {
    id: 'i45',
    short: true,
    text: 'Most of what has changed in the last two hundred years has been decline dressed up as improvement.',
    kind: 'principle',
    loadings: { restoration: 1.0 },
    mirror: 'i46',
  },
  {
    id: 'i46',
    short: true,
    text: 'Human life has got better over time, and will keep getting better.',
    kind: 'principle',
    loadings: { restoration: -0.9, constrained: -0.4 },
    mirror: 'i45',
  },
  {
    id: 'i47',
    short: true,
    text: 'Old customs deserve the benefit of the doubt simply because they have lasted.',
    kind: 'principle',
    loadings: { restoration: 0.7, constrained: 0.6 },
    mirror: 'i48',
    dyad: ['d05'],
  },
  {
    id: 'i48',
    short: true,
    text: 'That something has always been done a certain way is no reason at all to keep doing it.',
    kind: 'principle',
    loadings: { restoration: -0.8 },
    mirror: 'i47',
  },
  {
    id: 'i51',
    text: 'The proper response to a broken institution is usually to repair it rather than replace it.',
    kind: 'principle',
    loadings: { restoration: 0.4, revolutionary: -0.7, constrained: 0.5 },
  },
  {
    id: 'i52',
    text: 'Every generation should be free to remake its arrangements from scratch, owing nothing to the last.',
    kind: 'principle',
    loadings: { restoration: -0.8, organic: -0.5, revolutionary: 0.5 },
  },
  {
    id: 'i53',
    text: 'Beauty in buildings, music, and manners has declined, and this is a political matter and not merely a matter of taste.',
    kind: 'principle',
    loadings: { restoration: 0.8, transcendent: 0.3 },
  },
  {
    id: 'i54',
    text: 'Technology will dissolve most of the problems politics currently argues about.',
    kind: 'principle',
    loadings: { restoration: -0.7, constrained: -0.5 },
  },

  // ======================= REVOLUTIONARY / REFORMIST =======================
  {
    id: 'i55',
    short: true,
    text: 'The present order cannot be repaired. It has to be swept away and built again.',
    kind: 'principle',
    loadings: { revolutionary: 1.0 },
    mirror: 'i56',
    dyad: ['d05', 'd07'],
  },
  {
    id: 'i56',
    short: true,
    text: 'Change should come slowly and in small steps, so that mistakes can be caught before they spread.',
    kind: 'principle',
    loadings: { revolutionary: -0.9, constrained: 0.5 },
    mirror: 'i55',
  },
  {
    id: 'i57',
    short: true,
    text: 'Real change has never been granted by those in power. It has always been taken from them.',
    kind: 'principle',
    loadings: { revolutionary: 0.8 },
    mirror: 'i58',
  },
  {
    id: 'i58',
    short: true,
    text: 'Any change worth making can be made through the institutions we already have, given enough patience.',
    kind: 'principle',
    loadings: { revolutionary: -0.8 },
    mirror: 'i57',
  },
  {
    id: 'i59',
    text: 'There are circumstances in which political violence is justified.',
    kind: 'principle',
    loadings: { revolutionary: 0.8, constrained: -0.2 },
    dyad: ['d12'],
  },
  {
    id: 'i60',
    text: 'Whatever its faults, an order that exists is worth more than the risk of whatever would replace it.',
    kind: 'principle',
    loadings: { revolutionary: -0.8, constrained: 0.6 },
  },

  // ======================= VANGUARD / POPULIST =======================
  {
    id: 'i61',
    short: true,
    text: 'Ordinary people, taken together, judge better than any group of experts.',
    kind: 'principle',
    loadings: { vanguard: -1.0 },
    mirror: 'i62',
    dyad: ['d04'],
  },
  {
    id: 'i62',
    short: true,
    text: 'Most people cannot be trusted to know what is good for them.',
    kind: 'principle',
    loadings: { vanguard: 0.9, constrained: 0.3 },
    mirror: 'i61',
    dyad: ['d13'],
  },
  {
    id: 'i63',
    short: true,
    text: 'Great changes are made by small determined minorities, never by majorities.',
    kind: 'principle',
    loadings: { vanguard: 0.8 },
    mirror: 'i64',
  },
  {
    id: 'i64',
    short: true,
    text: 'The instincts of ordinary people are a better guide than the theories of the educated.',
    kind: 'principle',
    loadings: { vanguard: -0.9, restoration: 0.4 },
    mirror: 'i63',
  },
  {
    id: 'i65',
    text: 'Anyone affected by a decision should have an equal say in it, whatever they happen to know about it.',
    kind: 'principle',
    loadings: { vanguard: -0.8, authority: -0.4 },
  },
  {
    id: 'i66',
    text: 'Strength, health, and beauty are better guides to who should lead than any examination or election.',
    kind: 'principle',
    loadings: { vanguard: 0.7, organic: 0.5, restoration: 0.5, transcendent: -0.3 },
  },
  {
    id: 'i67',
    text: 'Knowing a great deal about a subject gives a person no special authority over how others should live.',
    kind: 'principle',
    loadings: { vanguard: -0.8, objectivist: -0.3 },
    dyad: ['d17'],
  },

  // ======================= CONSTRAINED / UNCONSTRAINED =======================
  {
    id: 'i68',
    short: true,
    text: 'Human selfishness is permanent. The most we can do is design around it.',
    kind: 'principle',
    loadings: { constrained: 1.0 },
    mirror: 'i69',
    dyad: ['d07'],
  },
  {
    id: 'i69',
    short: true,
    text: 'People are cruel or greedy because of how they were raised and what they lack. Change the conditions and you change the person.',
    kind: 'principle',
    loadings: { constrained: -1.0 },
    mirror: 'i68',
  },
  {
    id: 'i70',
    short: true,
    text: 'Every society will have people at the bottom of it, whatever is tried.',
    kind: 'principle',
    loadings: { constrained: 0.8 },
    mirror: 'i71',
  },
  {
    id: 'i71',
    short: true,
    text: 'There is no limit to how much better people could become.',
    kind: 'principle',
    loadings: { constrained: -0.9 },
    mirror: 'i70',
  },
  {
    id: 'i72',
    short: true,
    text: 'Most of what people call human nature is just habit picked up from the society around them.',
    kind: 'principle',
    loadings: { constrained: -0.8 },
  },
  {
    id: 'i73',
    short: true,
    text: 'Given the right institutions, people would mostly stop wanting to dominate one another.',
    kind: 'principle',
    loadings: { constrained: -0.9, revolutionary: 0.3 },
  },

  // ======================= OBJECTIVIST / PERSPECTIVIST =======================
  {
    id: 'i74',
    short: true,
    text: 'There is one true answer to how people ought to live, whether or not anyone has found it.',
    kind: 'principle',
    loadings: { objectivist: 1.0 },
    mirror: 'i75',
  },
  {
    id: 'i75',
    short: true,
    text: 'What counts as knowledge depends on who is doing the counting.',
    kind: 'principle',
    loadings: { objectivist: -0.9 },
    mirror: 'i74',
    dyad: ['d03'],
  },
  {
    id: 'i76',
    text: 'People from different backgrounds can see truths that are simply invisible to others.',
    kind: 'principle',
    loadings: { objectivist: -0.7, organic: 0.3 },
    mirror: 'i77',
    dyad: ['d09'],
  },
  {
    id: 'i77',
    text: 'Reason is the same for everyone, and a good argument does not depend on who is making it.',
    kind: 'principle',
    loadings: { objectivist: 0.9 },
    mirror: 'i76',
  },

  // ======================= DISCRIMINATORS =======================
  // Authored to prise apart specific near-degenerate anchor pairs. Each names the pair
  // it exists to separate. These carry modest axis loadings on purpose: their job is
  // anchor discrimination, not axis coverage, and an item that scored heavily on an axis
  // while separating two neighbours would distort placement for everyone else.

  {
    id: 'i78',
    text: 'In a society without bosses, people should still be paid according to how much they actually produce.',
    kind: 'principle',
    loadings: { communal: -0.4 },
    separates: 'Collectivist Anarchism / Anarcho-Communism — by labour vs. by need',
  },
  {
    id: 'i79',
    text: 'A revolt is worth having even when it fails, because of what it does to the people who take part.',
    kind: 'principle',
    loadings: { revolutionary: 0.8, constrained: -0.2 },
    separates: 'Collectivist Anarchism / Anarcho-Communism — insurrection as intrinsically clarifying',
  },
  {
    id: 'i80',
    text: 'Societies are held together by things their members could never justify in an argument.',
    kind: 'principle',
    loadings: { transcendent: 0.4, objectivist: -0.5, constrained: 0.5 },
    separates: 'Divine-Right Absolutism / Throne and Altar — providential irrationalism',
  },
  {
    id: 'i81',
    text: 'The authority of a ruler comes down through a family line, and that lineage is itself the justification.',
    kind: 'principle',
    loadings: { authority: 0.6, restoration: 0.6 },
    separates: 'Divine-Right Absolutism / Throne and Altar — scriptural patriarchy',
  },
  {
    id: 'i82',
    text: 'After a revolution there must still be a body with the power to compel, at least for a time.',
    kind: 'institutional',
    loadings: { authority: 0.6, revolutionary: 0.3 },
    separates: 'Anarcho-Communism / Council Communism — councils as a transitional state form',
  },
  {
    id: 'i83',
    text: 'Workplaces, not neighbourhoods, are where a new society should be organised from.',
    kind: 'institutional',
    loadings: { communal: 0.4 },
    separates: 'Anarcho-Communism / Council Communism — the unit of organisation',
  },
  {
    id: 'i84',
    text: 'The people who really run a country are its administrators and professionals, not whoever wins elections.',
    kind: 'principle',
    loadings: { vanguard: 0.3, authority: -0.2 },
    separates: 'Paleoconservatism / National Conservatism — the managerial-elite analysis',
  },
  {
    id: 'i85',
    text: 'A country should not send its soldiers abroad except when it is itself attacked.',
    kind: 'institutional',
    loadings: { revolutionary: -0.2 },
    separates: 'Paleoconservatism / National Conservatism — non-intervention',
  },
  {
    id: 'i86',
    text: 'Public ownership of industry is the goal itself, not merely a tool for when markets fail.',
    kind: 'institutional',
    loadings: { communal: 0.8 },
    dyad: ['d17'],
    separates: 'Fabianism / New Deal Liberalism — social ownership as destination',
  },
  {
    id: 'i87',
    text: 'A wage can be unjust even when it was freely agreed to, if it leaves a family unable to live decently.',
    kind: 'principle',
    loadings: { communal: 0.5, transcendent: 0.3 },
    separates: 'Thomism / Social Catholicism — the just wage',
  },
  {
    id: 'i88',
    text: 'Working people should organise into bodies that bargain on their behalf.',
    kind: 'institutional',
    loadings: { communal: 0.5 },
    separates: 'Thomism / Social Catholicism — the modern social question',
  },
  {
    id: 'i89',
    text: 'The state is the highest form a people can take, and nothing stands above it.',
    kind: 'principle',
    loadings: { authority: 0.8, transcendent: -0.3 },
    dyad: ['d15'],
    separates: 'Italian Fascism / National Socialism — state-as-absolute',
  },
  {
    id: 'i90',
    text: 'Ancestry is a better guide to who belongs than language, law, or loyalty.',
    kind: 'principle',
    loadings: { organic: 0.9 },
    mirror: 'i91',
    separates: 'Italian Fascism / National Socialism — race-as-absolute',
  },
  {
    id: 'i91',
    text: 'The idea that a people has a shared character is mostly something invented later and read backwards into the past.',
    kind: 'principle',
    loadings: { organic: -0.9, restoration: -0.4, objectivist: -0.3, transcendent: -0.3 },
    mirror: 'i90',
  },
  {
    id: 'i92',
    text: 'Questions about meaning and purpose are private matters that politics should stay out of.',
    kind: 'principle',
    loadings: { transcendent: -0.8, authority: -0.3 },
    dyad: ['d16'],
  },
  {
    id: 'i93',
    text: 'Nothing of value has been lost that is worth trying to recover.',
    kind: 'principle',
    loadings: { restoration: -0.9 },
  },
  {
    id: 'i94',
    text: "Attachment to one's own nation is a habit like any other, and no more binding than any other habit.",
    kind: 'principle',
    loadings: { organic: -0.8, constrained: -0.3 },
  },
  {
    id: 'i95',
    text: 'Which country a person is a citizen of should not determine what they are owed.',
    kind: 'principle',
    loadings: { organic: -0.9 },
  },

  // Second pass. The first round of discriminators barely moved two pairs —
  // Divine-Right / Throne and Altar (0.940 -> 0.931) and Paleoconservatism /
  // National Conservatism (0.924 -> 0.914) — because the seams chosen were too
  // shallow. These cut deeper. i99/i100/i101 also restore polarity balance on
  // `communal` and `vanguard`, which the first round pushed out of band.
  {
    id: 'i96',
    text: 'Punishment has a sacred quality about it, and the executioner is a cornerstone of social order.',
    kind: 'principle',
    loadings: { transcendent: 0.5, authority: 0.4 },
    separates: 'Divine-Right Absolutism / Throne and Altar — sacrificial and providential order',
  },
  {
    id: 'i97',
    text: 'A constitution that has been written down is already weakened by the writing.',
    kind: 'principle',
    loadings: { restoration: 0.6, objectivist: -0.4 },
    separates: 'Divine-Right Absolutism / Throne and Altar — hostility to codification',
  },
  {
    id: 'i98',
    text: "A nation's identity is carried by its majority ethnic stock, not by its constitution or its creed.",
    kind: 'principle',
    loadings: { organic: 0.9 },
    separates: 'Paleoconservatism / National Conservatism — ethnic vs. civic ground of the nation',
  },
  {
    id: 'i99',
    text: 'Trade between two people who each want what the other has is the fairest arrangement there is.',
    kind: 'principle',
    loadings: { communal: -0.7 },
  },
  {
    id: 'i100',
    text: 'A person with no schooling can judge a political question as well as any professor can.',
    kind: 'principle',
    loadings: { vanguard: -0.8, authority: -0.3 },
  },
  {
    id: 'i101',
    text: 'Someone who saves and invests rather than spending deserves the return on it.',
    kind: 'principle',
    loadings: { communal: -0.7 },
  },

  // ======================= NICHE OPENERS =======================
  // Authored alongside the v0.5 roster expansion. Each opens a region of the space no
  // existing item could reach — an apolitical quietism, a church subordinate to the
  // state, a revolution that distrusts its own vanguard — and without them the new
  // anchors would pile onto neighbours they do not actually resemble.

  { id: 'i102', text: 'The best life is lived out of public view, and politics is a trap for anyone who wants to be happy.',
    kind: 'principle', loadings: { authority: -0.3, revolutionary: -0.4 },
    separates: 'Epicurean Quietism — withdrawal as a political stance' },
  { id: 'i103', text: 'A revolution confined to one country will curdle into a new ruling class.',
    kind: 'principle', loadings: { revolutionary: 0.6, vanguard: -0.3 },
    separates: 'Trotskyism / Stalinism — permanent revolution and the bureaucracy' },
  { id: 'i104', text: 'A transformed society will be reached by winning elections and passing laws, not by seizing power.',
    kind: 'principle', loadings: { revolutionary: -0.9, communal: 0.3 },
    separates: 'Social Democracy / Leninism — the parliamentary road' },
  { id: 'i105', text: 'The church should answer to the political ruler, not the ruler to the church.',
    kind: 'institutional', loadings: { authority: 0.6, transcendent: -0.3 },
    separates: 'Caesaropapism / Integralism — which power is subordinate' },
  { id: 'i106', text: 'Officials pursue their own advantage exactly as merchants do, and should be assumed to.',
    kind: 'principle', loadings: { constrained: 0.8, vanguard: -0.4 },
    separates: 'Public Choice / Austrian School — politics as exchange' },
  { id: 'i107', text: 'Industrial technology is itself the problem, not merely who happens to own it.',
    kind: 'principle', loadings: { restoration: 0.7 },
    separates: 'Anarcho-Primitivism / Deep Ecology — the machine as such' },
  { id: 'i108', text: 'An economy that has stopped growing is not for that reason a failing economy.',
    kind: 'principle', loadings: { communal: 0.3, restoration: 0.3 },
    separates: 'Degrowth / Deep Ecology — planned contraction' },
  { id: 'i109', text: 'A people scattered among others needs a state of its own before it can be safe.',
    kind: 'principle', loadings: { organic: 0.8 },
    separates: 'Zionism / Romantic Nationalism — nationhood as refuge' },
  { id: 'i110', text: 'Someone bound to the land and cared for by a master may be better off than a labourer paid by the hour.',
    kind: 'principle', loadings: { organic: 0.5, restoration: 0.7, communal: 0.2 },
    separates: 'Pro-Slavery Reaction — the anti-capitalist case for bondage' },
  { id: 'i111', text: 'God has a covenant with this nation in particular.',
    kind: 'principle', loadings: { transcendent: 0.8, organic: 0.7 },
    separates: 'Christian Nationalism / Integralism — a chosen nation vs. a universal church' },
  { id: 'i112', text: 'The church should take the side of the poor in political conflicts rather than stand above them.',
    kind: 'principle', loadings: { communal: 0.6, transcendent: 0.3 },
    separates: 'Liberation Theology / Social Catholicism — the preferential option' },
  { id: 'i113', text: 'What matters most is the enormous number of people who will live in the future.',
    kind: 'principle', loadings: { restoration: -0.7, objectivist: 0.3 },
    separates: 'Longtermism — the moral weight of the unborn future' },
  { id: 'i114', text: 'Political life should be organised at the level of the town, with larger bodies federated upward from there.',
    kind: 'institutional', loadings: { authority: -0.6, organic: 0.3 },
    separates: 'Communalism / Anarcho-Communism — the municipality as the unit' },
  { id: 'i115', text: 'The countryside and its way of life are worth protecting even at a cost to national wealth.',
    kind: 'principle', loadings: { organic: 0.6, restoration: 0.7 },
    separates: 'Southern Agrarianism / Agrarian Republicanism' },
  { id: 'i116', text: 'There is no such thing as a national interest, only the interests of those who claim to speak for one.',
    kind: 'principle', loadings: { organic: -0.8, vanguard: -0.3 } },
  { id: 'i117', text: 'A government should be judged by outcomes it can measure, not by the ideals it professes.',
    kind: 'principle', loadings: { transcendent: -0.6, objectivist: -0.2 } },

  // ======================= POLARITY MIRRORS =======================
  // Reverse-coded counterparts to items that previously had none, added to bring
  // `communal`, `organic`, and `restoration` back inside the 40-60% band. Each is the
  // logical negation of its partner, so every anchor's answer is the negation of its
  // answer there — the profiles below were generated that way rather than guessed, and
  // the pairs double as acquiescence probes.

  { id: 'i118', text: 'How much a person is paid should follow what their work fetches, not what they happen to need.',
    kind: 'principle', loadings: { communal: -0.9 }, mirror: 'i23' },
  { id: 'i119', text: 'A society that sheds its inherited customs has usually lost nothing worth keeping.',
    kind: 'principle', loadings: { organic: -0.8, restoration: -0.6 }, mirror: 'i30' },
  { id: 'i120', text: 'We owe nothing to the dead, and the unborn can look after themselves.',
    kind: 'principle', loadings: { organic: -0.6, restoration: -0.7 }, mirror: 'i34' },
  { id: 'i121', text: 'Nobody is owed the necessities of life by anyone else.',
    kind: 'principle', loadings: { communal: -0.8, constrained: 0.3 }, mirror: 'i19' },
  { id: 'i122', text: 'A country has no right to turn away peaceful people who want to enter.',
    kind: 'principle', loadings: { organic: -0.8, authority: -0.4 }, mirror: 'i32' },
];



/** The short form's subset. See data/families.js for why 34 items is a real
 *  instrument rather than a truncated one. */
export const SHORT_ITEMS = ITEMS.filter((i) => i.short);
export const SHORT_IDS = new Set(SHORT_ITEMS.map((i) => i.id));

export const ITEM_IDS = ITEMS.map((i) => i.id);
export const ITEM_INDEX = Object.fromEntries(ITEMS.map((it, n) => [it.id, n]));
export const ITEM_BY_ID = Object.fromEntries(ITEMS.map((it) => [it.id, it]));

/** Unique mirror pairs, as [indexA, indexB]. Used for acquiescence correction. */
export const MIRROR_PAIRS = (() => {
  const seen = new Set();
  const out = [];
  for (const it of ITEMS) {
    if (!it.mirror) continue;
    const key = [it.id, it.mirror].sort().join('|');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push([ITEM_INDEX[it.id], ITEM_INDEX[it.mirror]]);
  }
  return out;
})();

if (new Set(ITEM_IDS).size !== ITEM_IDS.length) {
  throw new Error('items.js: duplicate item id');
}
