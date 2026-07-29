// POLITEIA — anchors: Revolutionary Era (5)

import { prof } from './prof.js';

export const REVOLUTIONARY = [
  {
    id: 'jacobin',
    name: 'Jacobinism',
    era: 'Revolutionary Era',
    figure: {
      name: 'Maximilien Robespierre',
      dates: '1758 – 1794',
      quote: 'Terror is nothing but justice: prompt, severe, inflexible.',
      quoteSource: 'On the Principles of Political Morality, 1794',
    },
    glossary:
      'The republic is one and indivisible, founded on the sovereignty of a virtuous ' +
      'people and defended without hesitation against those who would restore privilege. ' +
      'Citizenship is universal and abstract rather than inherited; the old orders, ' +
      'church, and provincial particularity are obstacles to be swept away.',
    sources: ['Robespierre, Report on the Principles of Political Morality (1794)', 'Declaration of the Rights of Man and of the Citizen (1793)', 'Saint-Just, Fragments on Republican Institutions'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:2 i05:-1 i06:-2 i07:1 i08:-1 i09:-2 i10:-1 i11:-2
      i13:0 i14:-1 i15:-2 i16:2 i17:1 i18:-1 i19:2 i21:1 i22:1 i23:1
      i24:1 i25:1 i26:-2 i27:2 i28:0 i29:1 i30:-1 i32:0 i33:0 i34:-1
      i35:0 i36:0 i37:1 i38:1 i39:-2 i40:0 i41:0 i42:0 i43:-1
      i45:-2 i46:2 i47:-2 i48:2 i51:-2 i52:2 i53:-1 i54:0
      i55:2 i56:-2 i57:2 i58:-2 i59:2 i60:-2
      i61:1 i62:0 i63:1 i64:0 i65:1 i66:-1 i67:0
      i68:-1 i69:2 i70:-1 i71:2 i72:2 i73:2
      i74:2 i75:-2 i76:-1 i77:2
      i78:0 i79:2 i80:-1 i81:-2 i82:2 i83:0 i84:0 i85:-1 i86:0 i87:1 i88:1 i89:2 i90:-2 i91:1 i92:0 i93:1 i94:1 i95:1
      i96:1 i97:-2 i98:-1 i99:-1 i100:1 i101:-1
      i102:-2 i103:1 i104:-1 i105:2 i106:0 i107:0 i108:0 i109:0 i110:-2 i111:0 i112:0 i113:0 i114:-1 i115:-1 i116:0 i117:0
      i118:-1 i119:1 i120:1 i121:-2 i122:0
    `),
  },
  {
    id: 'burkean',
    name: 'Burkean Conservatism',
    era: 'Revolutionary Era',
    figure: {
      name: 'Edmund Burke',
      dates: '1729 – 1797',
      quote: 'Society is a partnership between those who are living, those who are dead, and those who are to be born.',
      quoteSource: 'Reflections on the Revolution in France',
    },
    glossary:
      'Society is a partnership across generations, and its institutions carry more ' +
      'accumulated wisdom than any individual reasoner can supply. Prescription and ' +
      'prejudice are forms of stored experience rather than failures of thought; reform ' +
      'should be gradual, particular, and grounded in inherited practice rather than in ' +
      'abstract right.',
    sources: ['Burke, Reflections on the Revolution in France', 'Burke, An Appeal from the New to the Old Whigs', 'Burke, Speech to the Electors of Bristol'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:1 i05:-1 i06:1 i07:2 i08:1 i09:2 i10:-1 i11:2
      i13:-2 i14:1 i15:1 i16:1 i17:-1 i18:1 i19:1 i21:-1 i22:1 i23:-1
      i24:2 i25:-1 i26:1 i27:-1 i28:-1 i29:0 i30:2 i32:1 i33:-1 i34:2
      i35:1 i36:-2 i37:1 i38:-2 i39:1 i40:-1 i41:1 i42:-2 i43:1
      i45:1 i46:-1 i47:2 i48:-2 i51:2 i52:-2 i53:1 i54:-1
      i55:-2 i56:2 i57:-1 i58:1 i59:-2 i60:2
      i61:-1 i62:1 i63:-1 i64:1 i65:-2 i66:-1 i67:0
      i68:2 i69:-2 i70:2 i71:-2 i72:-1 i73:-2
      i74:0 i75:0 i76:0 i77:-1
      i78:0 i79:-2 i80:2 i81:1 i82:2 i83:-1 i84:0 i85:0 i86:-2 i87:0 i88:0 i89:0 i90:1 i91:-2 i92:0 i93:-2 i94:-2 i95:-1
      i96:0 i97:2 i98:1 i99:1 i100:1 i101:1
      i102:0 i103:-1 i104:-1 i105:0 i106:1 i107:0 i108:0 i109:0 i110:1 i111:1 i112:0 i113:-2 i114:1 i115:2 i116:-1 i117:-1
      i118:1 i119:-2 i120:-2 i121:-1 i122:-1
    `),
  },
  {
    id: 'throne-altar',
    name: 'Throne and Altar',
    era: 'Revolutionary Era',
    figure: {
      name: 'Joseph de Maistre',
      dates: '1753 – 1821',
      quote: 'Every nation gets the government it deserves.',
      quoteSource: 'Lettres et Opuscules Inédits',
    },
    glossary:
      'The Revolution was a satanic event and the Enlightenment a disease of abstraction. ' +
      'Legitimate order rests on throne and altar together, on providence rather than ' +
      'consent, and on institutions no one designed; written constitutions are worthless ' +
      'precisely because someone wrote them.',
    sources: ['de Maistre, Considerations on France', 'de Maistre, St Petersburg Dialogues', 'de Bonald, Theory of Political and Religious Power'],
    p: prof(`
      i01:2 i02:-2 i03:2 i04:2 i05:-2 i06:-2 i07:2 i08:-1 i09:2 i10:0 i11:-1
      i13:-1 i14:0 i15:1 i16:-1 i17:0 i18:1 i19:0 i21:0 i22:1 i23:-1
      i24:2 i25:-2 i26:2 i27:-2 i28:-1 i29:-1 i30:2 i32:2 i33:-1 i34:2
      i35:2 i36:-2 i37:1 i38:-2 i39:2 i40:-2 i41:2 i42:-2 i43:2
      i45:2 i46:-2 i47:2 i48:-2 i51:0 i52:-2 i53:2 i54:-2
      i55:-1 i56:0 i57:0 i58:-1 i59:0 i60:2
      i61:-2 i62:2 i63:0 i64:1 i65:-2 i66:0 i67:0
      i68:2 i69:-2 i70:2 i71:-2 i72:-2 i73:-2
      i74:2 i75:-2 i76:-1 i77:-1
      i78:0 i79:-2 i80:2 i81:1 i82:2 i83:-1 i84:0 i85:0 i86:-1 i87:0 i88:0 i89:0 i90:1 i91:-2 i92:-2 i93:-2 i94:-2 i95:-2
      i96:2 i97:2 i98:1 i99:0 i100:-1 i101:0
      i102:0 i103:-1 i104:-2 i105:-1 i106:0 i107:1 i108:1 i109:0 i110:1 i111:1 i112:-1 i113:-2 i114:0 i115:2 i116:-1 i117:-2
      i118:1 i119:-2 i120:-2 i121:0 i122:-2
    `),
  },
  {
    id: 'jeffersonian',
    name: 'Agrarian Republicanism',
    era: 'Revolutionary Era',
    figure: {
      name: 'Thomas Jefferson',
      dates: '1743 – 1826',
      quote: 'The tree of liberty must be refreshed from time to time with the blood of patriots and tyrants.',
      quoteSource: 'Letter to William Smith, 1787',
    },
    glossary:
      'A republic is safest in the hands of independent cultivators who owe nothing to ' +
      'anyone. Power should stay near home, standing armies and public debt corrupt, ' +
      'commercial cities breed dependence, and each generation holds the earth in ' +
      'usufruct rather than being bound by the arrangements of the last.',
    sources: ['Jefferson, Notes on the State of Virginia', 'Jefferson, Letter to Madison (1789)', 'Jefferson, First Inaugural Address'],
    p: prof(`
      i01:-2 i02:2 i03:-1 i04:-1 i05:2 i06:2 i07:0 i08:2 i09:-2 i10:-2 i11:2
      i13:-1 i14:2 i15:0 i16:0 i17:-1 i18:2 i19:0 i21:-2 i22:2 i23:-1
      i24:1 i25:0 i26:0 i27:0 i28:-1 i29:1 i30:1 i32:0 i33:0 i34:0
      i35:1 i36:-1 i37:1 i38:0 i39:-2 i40:0 i41:1 i42:-1 i43:1
      i45:0 i46:1 i47:0 i48:1 i51:0 i52:2 i53:0 i54:-1
      i55:1 i56:0 i57:1 i58:0 i59:1 i60:-1
      i61:2 i62:-2 i63:-1 i64:2 i65:1 i66:-1 i67:1
      i68:0 i69:1 i70:-1 i71:1 i72:0 i73:0
      i74:1 i75:-1 i76:-1 i77:2
      i78:1 i79:1 i80:1 i81:-2 i82:0 i83:-1 i84:1 i85:2 i86:-2 i87:0 i88:0 i89:-1 i90:0 i91:0 i92:2 i93:0 i94:0 i95:0
      i96:-1 i97:0 i98:0 i99:2 i100:2 i101:1
      i102:1 i103:0 i104:0 i105:0 i106:1 i107:0 i108:0 i109:0 i110:0 i111:1 i112:0 i113:0 i114:2 i115:2 i116:0 i117:0
      i118:1 i119:-1 i120:0 i121:0 i122:0
    `),
  },
  {
    id: 'hamiltonian',
    name: 'Hamiltonian Nationalism',
    era: 'Revolutionary Era',
    figure: {
      name: 'Alexander Hamilton',
      dates: '1755 – 1804',
      quote: 'Energy in the executive is a leading character in the definition of good government.',
      quoteSource: 'Federalist No. 70',
    },
    glossary:
      'A nation becomes great through manufactures, credit, and an energetic central ' +
      'government capable of acting. Public debt funded properly is a blessing, ' +
      'commercial and financial interests should be bound to the state, and the ' +
      'turbulence of popular assemblies must be tempered by durable institutions and ' +
      'capable administration.',
    sources: ['Hamilton, The Federalist (esp. 6–9, 70–78)', 'Hamilton, Report on Manufactures', 'Hamilton, Report on Public Credit'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:0 i05:0 i06:-1 i07:1 i08:0 i09:0 i10:1 i11:0
      i13:-1 i14:1 i15:2 i16:0 i17:-1 i18:2 i19:-1 i21:1 i22:-1 i23:-2
      i24:2 i25:-1 i26:-1 i27:1 i28:-1 i29:1 i30:0 i32:1 i33:0 i34:1
      i35:1 i36:-1 i37:0 i38:0 i39:-1 i40:0 i41:0 i42:0 i43:0
      i45:-1 i46:2 i47:0 i48:1 i51:1 i52:-1 i53:0 i54:1
      i55:-2 i56:1 i57:0 i58:1 i59:-1 i60:1
      i61:-2 i62:2 i63:1 i64:-2 i65:-2 i66:-1 i67:-1
      i68:2 i69:-1 i70:1 i71:-1 i72:0 i73:-2
      i74:1 i75:-1 i76:-1 i77:2
      i78:0 i79:-1 i80:1 i81:0 i82:2 i83:0 i84:0 i85:-1 i86:-1 i87:-1 i88:-1 i89:1 i90:0 i91:0 i92:1 i93:0 i94:-1 i95:-1
      i96:0 i97:-1 i98:-1 i99:1 i100:-2 i101:2
      i102:-2 i103:0 i104:0 i105:1 i106:0 i107:-1 i108:-2 i109:0 i110:0 i111:0 i112:-1 i113:1 i114:-2 i115:-1 i116:-2 i117:2
      i118:2 i119:0 i120:-1 i121:1 i122:-1
    `),
  },
];
