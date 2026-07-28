// POLITEIA — axis definitions
//
// Three layers. Layer 1 is plotted; Layers 2 and 3 are reported separately.
// Sign convention: POSITIVE score = the `pos` pole. Negative = the `neg` pole.
// This convention is arbitrary and carries no evaluative weight. It is fixed here
// so that item loadings and anchor profiles can be written against it consistently.

export const AXES = [
  // ---- Layer 1: Values (plotted) ----
  {
    id: 'authority',
    layer: 1,
    pos: 'Authority',
    neg: 'Liberty',
    question: 'Who decides, and by what right may they compel?',
    posGloss:
      'Legitimate power is concentrated and hierarchical and is owed obedience. ' +
      'Order is prior to freedom. The community may bind the individual.',
    negGloss:
      'Legitimate power is dispersed, revocable, and minimal. Freedom is prior to ' +
      'order. The individual is prior to the community.',
  },
  {
    id: 'communal',
    layer: 1,
    pos: 'Communal',
    neg: 'Private',
    question: 'Who owns, and who captures the product?',
    posGloss:
      'Productive property is held in common. Distribution follows need, ' +
      'contribution, or collective decision.',
    negGloss:
      'Productive property is held individually. Distribution follows exchange, ' +
      'inheritance, or desert.',
  },
  {
    id: 'organic',
    layer: 1,
    pos: 'Organic',
    neg: 'Universal',
    question: 'Who counts as "us," and what grounds obligation?',
    posGloss:
      'Obligation is thickest toward a particular people bound by descent, place, ' +
      'language, and memory. A community is an inheritance, not a contract.',
    negGloss:
      'Obligation runs to persons as such. Membership is granted, not inherited. ' +
      'The boundaries of peoples are morally arbitrary.',
  },
  {
    id: 'transcendent',
    layer: 1,
    pos: 'Transcendent',
    neg: 'Immanent',
    question: 'What grounds authority and value?',
    posGloss:
      'There is an order above human will — divine, natural, or teleological — and ' +
      'political arrangements answer to it.',
    negGloss:
      'Value is generated within human life. There is no appeal beyond human purposes.',
  },
  {
    id: 'restoration',
    layer: 1,
    pos: 'Restoration',
    neg: 'Progress',
    question: 'Where in time does the good lie?',
    posGloss:
      'The good has been achieved and lost. The task is recovery, preservation, and ' +
      'resistance to decay.',
    negGloss:
      'The good lies ahead. History is, or can be made, improvement. The task is ' +
      'construction.',
  },

  // ---- Layer 2: Temperament (reported, not plotted) ----
  {
    id: 'revolutionary',
    layer: 2,
    pos: 'Revolutionary',
    neg: 'Reformist',
    question: 'Rupture, or gradual correction?',
    posGloss: 'The present order cannot be repaired from within. It must be replaced.',
    negGloss: 'Change should be incremental, reversible, and tested as it goes.',
  },
  {
    id: 'vanguard',
    layer: 2,
    pos: 'Vanguard',
    neg: 'Populist',
    question: 'Is political judgement the property of the qualified few, or of the many?',
    posGloss:
      'Sound political judgement is rare and unevenly distributed. Those who have it ' +
      'should lead.',
    negGloss:
      'The many, taken together, judge better than any select group. Expertise is not ' +
      'authority.',
  },
  {
    id: 'constrained',
    layer: 2,
    pos: 'Constrained',
    neg: 'Unconstrained',
    question: 'Is human deficiency permanent, or correctable?',
    posGloss:
      'Human limitation is permanent and must be managed through institutions, ' +
      'incentives, and inherited practice. Politics is damage control.',
    negGloss:
      'Human limitation is contingent on circumstance and correctable through reason, ' +
      'education, and restructuring. Politics is improvement.',
  },

  // ---- Layer 3: Epistemics ----
  {
    id: 'objectivist',
    layer: 3,
    pos: 'Objectivist',
    neg: 'Perspectivist',
    question: 'Is there a truth about the good, independent of who is asking?',
    posGloss:
      'There is a fact of the matter about how people should live, whether or not ' +
      'anyone has found it.',
    negGloss:
      'Claims about the good are situated. What counts as knowledge depends on the ' +
      'position from which it is claimed.',
  },
];

export const AXIS_BY_ID = Object.fromEntries(AXES.map((a) => [a.id, a]));
export const LAYER = (n) => AXES.filter((a) => a.layer === n);
