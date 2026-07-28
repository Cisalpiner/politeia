// POLITEIA — coherence dyads (v0.2.0: 14)
//
// A dyad pairs two commitments that are NOT logical contradictions but which pull
// against each other. Agreeing with both is not an error — many of the best political
// thinkers hold productive tensions deliberately — but it is worth being asked about.
//
// NOT mirror pairs (data/items.js), which ARE direct logical opposites and exist only
// to estimate acquiescence bias. Agreeing with both halves of a mirror pair is
// yea-saying: corrected for silently, never surfaced. The audit fails the build if a
// dyad pairs mirror items.
//
// TONE: Socratic throughout. State both commitments in the respondent's own terms,
// state why some would hold they conflict, and ask. The respondent may have a good
// answer. There is no consistency score, because a single number would imply that
// holding tensions is a defect.
//
// NEUTRALITY: `region` tags which part of the space each dyad catches, and the audit
// counts them. If the tensions cluster on one side, the instrument interrogates that
// side harder — invisibly, because each dyad looks perfectly fair on its own. This is
// the most important bias control in the project, because it turns a question of
// editorial judgement into an arithmetic one.

export const DYADS = [
  {
    id: 'd01',
    items: ['i25', 'i28'],
    rule: { i25: '>=1', i28: '>=1' },
    region: 'left',
    tension:
      'You hold that where a person happened to be born is morally irrelevant, and also ' +
      'that a group which has been wronged has claims on the rest of society that others ' +
      'do not have.',
    question:
      'If the accident of birth carries no moral weight, what gives a group membership ' +
      'someone was likewise born into the power to generate claims? And if inherited ' +
      'membership can generate claims, on what ground is birth elsewhere set aside as ' +
      'irrelevant?',
  },
  {
    id: 'd02',
    items: ['i02', 'i13'],
    rule: { i02: '>=1', i13: '>=1' },
    region: 'left',
    tension:
      'You hold that the productive property a society depends on should be held in ' +
      'common, and that nobody may bind you without your agreement.',
    question:
      'What happens to the person who withholds agreement? If the commons can be ' +
      'established over their objection, consent was never the standard. If it cannot, ' +
      'the commons is optional — and a commons one may opt out of is a club.',
  },
  {
    id: 'd03',
    items: ['i35', 'i75'],
    rule: { i35: '>=1', i75: '>=1' },
    region: 'mixed',
    tension:
      'You hold that there is an order in the world human beings did not invent, and ' +
      'also that what counts as knowledge depends on who is doing the counting.',
    question:
      'Both can be held — a real order that we only ever glimpse from somewhere in ' +
      'particular. But when two people disagree about that order, is one of them wrong? ' +
      'If yes, some standpoints are better than others and the counting is not merely ' +
      'positional. If no, what work is the order doing?',
  },
  {
    id: 'd04',
    items: ['i03', 'i61'],
    rule: { i03: '>=1', i61: '>=1' },
    region: 'mixed',
    tension:
      'You hold that ordinary people, taken together, judge better than any group of ' +
      'experts, and also that some questions are too important to be settled by a vote.',
    question:
      'Which questions, and who decides which they are? If the many judge best, the ' +
      'important questions are precisely the ones to put to them. If some matters are ' +
      'withheld from the vote, someone standing above the vote is doing the withholding.',
  },
  {
    id: 'd05',
    items: ['i47', 'i55'],
    rule: { i47: '>=1', i55: '>=1' },
    region: 'right',
    tension:
      'You hold that old customs deserve the benefit of the doubt simply for having ' +
      'lasted, and also that the present order must be swept away and built again.',
    question:
      'What survives the sweeping? Restoration is not preservation: the order you would ' +
      'rebuild is itself an inheritance, and you have chosen to interrupt the one you ' +
      'actually have. Which inherited practices earn the deference, and what disqualifies ' +
      'the rest?',
  },
  {
    id: 'd06',
    items: ['i15', 'i26'],
    rule: { i15: '>=1', i26: '>=1' },
    region: 'right',
    tension:
      'You hold that large differences in wealth are acceptable so long as they came ' +
      'about honestly, and also that a people is something you are born into rather than ' +
      'something you can join.',
    question:
      'A market does not care whose people you are. If your countrymen are ruined by ' +
      'exchanges that involved no theft and no fraud, which gives way — the obligation of ' +
      'kinship, or the legitimacy of the transaction?',
  },
  {
    id: 'd07',
    items: ['i55', 'i68'],
    rule: { i55: '>=1', i68: '>=1' },
    region: 'mixed',
    tension:
      'You hold that human selfishness is permanent and can only be designed around, and ' +
      'also that the present order must be swept away and built again.',
    question:
      'Who does the rebuilding? If selfishness is permanent, it is permanent in the ' +
      'builders too — and a revolution hands them power unusually free of the accumulated ' +
      'restraints that the old order, whatever its faults, had grown.',
  },
  {
    id: 'd08',
    items: ['i02', 'i39'],
    rule: { i02: '>=1', i39: '>=1' },
    region: 'right',
    tension:
      'You hold that the state should recognise one religion as true and order public ' +
      'life around it, and also that nobody may give you orders without your agreement.',
    question:
      'What of the citizen who does not share the recognised faith? Either the order ' +
      'binds them without their consent, or it is not really an ordering of public life ' +
      'at all.',
  },
  {
    id: 'd09',
    items: ['i29', 'i76'],
    rule: { i29: '>=1', i76: '>=1' },
    region: 'left',
    tension:
      'You hold that justice means treating people as individuals and never as members ' +
      'of a category, and also that people from different backgrounds can see truths ' +
      'that are invisible to others.',
    question:
      "If someone's background gives them sight that others lack, then their category " +
      'tells you something real about them. Once it does, treating them purely as an ' +
      'individual means discarding information you have just called genuine. Which is it?',
  },
  {
    id: 'd10',
    items: ['i05', 'i32'],
    rule: { i05: '>=1', i32: '>=1' },
    region: 'right',
    tension:
      'You hold that every restriction on what a person may do must justify itself, and ' +
      'also that a country may decide who enters it on whatever grounds it likes.',
    question:
      'A border is a restriction on what people may do — on the traveller, and equally on ' +
      'the citizen who wanted to hire, house, or marry them. What justifies it, and why ' +
      'is that the one restriction that need give no account of itself?',
  },
  {
    id: 'd11',
    items: ['i18', 'i19'],
    rule: { i18: '>=1', i19: '>=1' },
    region: 'mixed',
    tension:
      'You hold that everyone should be guaranteed the necessities of life whatever they ' +
      'contribute, and also that the wish to keep what you have made is natural and ' +
      'healthy rather than a flaw to be corrected.',
    question:
      'The guarantee is paid for out of what somebody made and wished to keep. Is that ' +
      'wish healthy right up until the moment it becomes inconvenient — or is the ' +
      'guarantee taking something to which it has no clean title?',
  },
  {
    id: 'd12',
    items: ['i06', 'i59'],
    rule: { i06: '>=1', i59: '>=1' },
    region: 'mixed',
    tension:
      'You hold that political violence is sometimes justified, and also that it is ' +
      'better for a hundred guilty people to go free than for the state to hold a power ' +
      'it might one day abuse.',
    question:
      'Both are claims about who may be trusted with force. If the state cannot be ' +
      'trusted with a power it might misuse, what makes a movement — with less ' +
      'accountability, no procedure, and no way to be voted out — more trustworthy with ' +
      'the same power?',
  },
  {
    id: 'd13',
    items: ['i23', 'i62'],
    rule: { i23: '>=1', i62: '>=1' },
    region: 'left',
    tension:
      'You hold that pay should follow what a person needs rather than what their work ' +
      'fetches, and also that most people cannot be trusted to know what is good for them.',
    question:
      'Who then determines need? If people judge their own good poorly, they judge their ' +
      'own need poorly too — and somebody else is settling it for them, with the entire ' +
      'product of a society in hand.',
  },
  {
    id: 'd14',
    items: ['i40', 'i43'],
    rule: { i40: '>=1', i43: '>=1' },
    region: 'mixed',
    tension:
      'You hold that the purpose of politics is to reduce suffering and increase ' +
      'wellbeing and nothing beyond that, and also that some things must not be done even ' +
      'if doing them would leave everyone better off.',
    question:
      'If wellbeing is the whole of it, the forbidden act is simply one that failed to ' +
      'deliver. But if something stays forbidden regardless of the sums, then something ' +
      'other than wellbeing is doing the forbidding. What is it?',
  },
  {
    id: 'd15',
    items: ['i35', 'i89'],
    rule: { i35: '>=1', i89: '>=1' },
    region: 'right',
    tension:
      'You hold that there is an order in the world human beings did not invent and ' +
      'cannot repeal, and also that the state is the highest form a people can take, with ' +
      'nothing standing above it.',
    question:
      'If there is an order above human will, then the state is under it, and there is a ' +
      'standard by which a state can be judged and found wanting. If the state really is ' +
      'the highest thing, then that order has nothing to say to it. Which one gives way?',
  },
  {
    id: 'd16',
    items: ['i04', 'i92'],
    rule: { i04: '>=1', i92: '>=1' },
    region: 'mixed',
    tension:
      'You hold that questions of meaning and purpose are private matters politics should ' +
      'stay out of, and also that a community may require its members to keep up practices ' +
      'they personally reject.',
    question:
      'A practice kept up against a member’s own judgement is precisely politics reaching ' +
      'into what you have just called private. What makes a custom different from a ' +
      'conviction, and who gets to decide which one is at stake?',
  },
  {
    id: 'd17',
    items: ['i67', 'i86'],
    rule: { i67: '>=1', i86: '>=1' },
    region: 'left',
    tension:
      'You hold that public ownership of industry is the goal itself rather than a remedy ' +
      'for market failure, and also that knowing a great deal about something gives a ' +
      'person no special authority over how others should live.',
    question:
      'Publicly owned industry is run by someone, and at scale that someone is a body of ' +
      'planners and administrators making decisions that shape how millions live. If ' +
      'expertise confers no authority, what is their warrant — and if the answer is that ' +
      'they are accountable, accountable to whom, and how often?',
  },
];

export const DYAD_BY_ID = Object.fromEntries(DYADS.map((d) => [d.id, d]));
