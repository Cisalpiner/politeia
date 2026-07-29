// POLITEIA — anchors: Classical and Medieval (7)

import { prof } from './prof.js';

export const CLASSICAL = [
  {
    id: 'platonic',
    name: 'Platonic Guardianship',
    era: 'Classical',
    figure: {
      name: 'Plato',
      dates: 'c. 428 – 348 BC',
      quote: 'Until philosophers rule as kings, cities will have no rest from evils.',
      quoteSource: 'Republic, 473d',
    },
    glossary:
      'Rule belongs to those who know the Good, and knowledge of it is rare, difficult, ' +
      'and unevenly distributed. The city is therefore ordered into classes according to the part ' +
      'of the soul that governs each, and its rulers are bred, selected, and educated for ' +
      'the task rather than chosen by those they rule.',
    sources: ['Plato, Republic', 'Plato, Laws', 'Plato, Statesman'],
    p: prof(`
      i01:2 i02:-2 i03:2 i04:2 i05:-2 i06:-1 i07:2 i08:-2 i09:1 i10:1 i11:-2
      i13:1 i14:-1 i15:-1 i16:0 i17:1 i18:-1 i19:1 i21:2 i22:-1 i23:1
      i24:0 i25:0 i26:1 i27:-1 i28:-1 i29:0 i30:1 i32:1 i33:0 i34:1
      i35:2 i36:-2 i37:2 i38:-2 i39:1 i40:-2 i41:2 i42:-2 i43:2
      i45:1 i46:-1 i47:0 i48:0 i51:0 i52:-2 i53:2 i54:-1
      i55:1 i56:0 i57:0 i58:-1 i59:0 i60:-1
      i61:-2 i62:2 i63:2 i64:-2 i65:-2 i66:0 i67:-2
      i68:1 i69:0 i70:2 i71:-1 i72:0 i73:-1
      i74:2 i75:-2 i76:-2 i77:2
      i78:0 i79:0 i80:1 i81:-1 i82:2 i83:-1 i84:0 i85:0 i86:1 i87:1 i88:-1 i89:1 i90:0 i91:0 i92:-2 i93:-1 i94:0 i95:0
      i96:-1 i97:-1 i98:0 i99:-1 i100:-2 i101:-1
      i102:-1 i103:0 i104:0 i105:1 i106:-1 i107:0 i108:0 i109:0 i110:1 i111:0 i112:-1 i113:0 i114:-1 i115:0 i116:0 i117:0
      i118:-1 i119:-1 i120:-1 i121:-1 i122:-1
    `),
  },
  {
    id: 'aristotelian',
    name: 'Aristotelianism',
    era: 'Classical',
    figure: {
      name: 'Aristotle',
      dates: '384 – 322 BC',
      quote: 'Man is by nature a political animal.',
      quoteSource: 'Politics, I.2',
    },
    glossary:
      'The city exists by nature and for the sake of the good life, not merely for ' +
      'survival or exchange. The most durable constitution mixes the claims of the one, ' +
      'the few, and the many, and rests on a large middle class; virtue is a habit formed ' +
      'by law rather than a private preference.',
    sources: ['Aristotle, Politics', 'Aristotle, Nicomachean Ethics'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:1 i05:-1 i06:0 i07:1 i08:-1 i09:1 i10:-1 i11:2
      i13:-1 i14:0 i15:-1 i16:0 i17:-1 i18:1 i19:1 i21:0 i22:2 i23:0
      i24:1 i25:-1 i26:1 i27:-1 i28:0 i29:0 i30:1 i32:1 i33:0 i34:1
      i35:2 i36:-2 i37:1 i38:-1 i39:1 i40:-1 i41:2 i42:-2 i43:1
      i45:0 i46:0 i47:1 i48:-1 i51:2 i52:-2 i53:1 i54:-1
      i55:-2 i56:2 i57:0 i58:1 i59:-1 i60:1
      i61:0 i62:1 i63:0 i64:0 i65:-1 i66:0 i67:-1
      i68:1 i69:0 i70:1 i71:-1 i72:0 i73:-1
      i74:2 i75:-1 i76:-1 i77:2
      i78:0 i79:-1 i80:1 i81:0 i82:2 i83:-1 i84:0 i85:0 i86:-1 i87:1 i88:0 i89:1 i90:0 i91:-1 i92:-2 i93:-1 i94:-1 i95:-1
      i96:-1 i97:0 i98:0 i99:0 i100:-1 i101:0
      i102:-1 i103:0 i104:0 i105:0 i106:0 i107:0 i108:0 i109:0 i110:0 i111:0 i112:0 i113:-1 i114:1 i115:1 i116:-1 i117:0
      i118:0 i119:-1 i120:-1 i121:-1 i122:-1
    `),
  },
  {
    id: 'ciceronian',
    name: 'Civic Republicanism',
    era: 'Classical',
    figure: {
      name: 'Marcus Tullius Cicero',
      dates: '106 – 43 BC',
      quote: 'We are all servants of the laws in order that we may be free.',
      quoteSource: 'Pro Cluentio, 146',
    },
    glossary:
      'A commonwealth is the property of its people, held together by agreement on law ' +
      'and shared advantage. Liberty consists in not being subject to arbitrary will, ' +
      'which requires mixed institutions, the rule of law, and citizens formed to place ' +
      'the republic above their own advancement.',
    sources: ['Cicero, De Re Publica', 'Cicero, De Legibus', 'Cicero, De Officiis'],
    p: prof(`
      i01:0 i02:0 i03:1 i04:1 i05:0 i06:1 i07:2 i08:0 i09:1 i10:-2 i11:2
      i13:-1 i14:1 i15:0 i16:0 i17:-1 i18:1 i19:0 i21:0 i22:1 i23:-1
      i24:2 i25:-1 i26:1 i27:0 i28:0 i29:1 i30:1 i32:1 i33:-1 i34:2
      i35:2 i36:-2 i37:2 i38:-1 i39:1 i40:-1 i41:1 i42:-2 i43:1
      i45:1 i46:-1 i47:2 i48:-1 i51:2 i52:-2 i53:1 i54:-1
      i55:-2 i56:2 i57:0 i58:1 i59:0 i60:1
      i61:0 i62:0 i63:0 i64:1 i65:-1 i66:0 i67:0
      i68:1 i69:-1 i70:1 i71:-1 i72:-1 i73:-1
      i74:2 i75:-2 i76:-1 i77:2
      i78:0 i79:0 i80:1 i81:0 i82:2 i83:-1 i84:0 i85:0 i86:-1 i87:0 i88:0 i89:1 i90:0 i91:-1 i92:-1 i93:-1 i94:-2 i95:-1
      i96:-1 i97:0 i98:0 i99:0 i100:0 i101:0
      i102:-2 i103:0 i104:0 i105:1 i106:0 i107:0 i108:0 i109:0 i110:0 i111:0 i112:0 i113:-1 i114:1 i115:1 i116:-2 i117:0
      i118:1 i119:-1 i120:-2 i121:0 i122:-1
    `),
  },
  {
    id: 'stoic',
    name: 'Stoic Cosmopolitanism',
    era: 'Classical',
    figure: {
      name: 'Marcus Aurelius',
      dates: '121 – 180',
      quote: 'That which is not good for the hive is not good for the bee.',
      quoteSource: 'Meditations, VI.54',
    },
    glossary:
      'A rational order pervades the cosmos, and every human being participates in it ' +
      'equally, so the wise are citizens of the world before they are citizens of any ' +
      'city. External goods and social station are indifferent; what is owed to a ' +
      'stranger differs in circumstance but not in kind from what is owed to a kinsman.',
    sources: ['Marcus Aurelius, Meditations', 'Epictetus, Discourses', 'Cicero, De Finibus III'],
    p: prof(`
      i01:0 i02:0 i03:0 i04:0 i05:0 i06:1 i07:1 i08:2 i09:0 i10:-1 i11:0
      i13:0 i14:-1 i15:0 i16:1 i17:0 i18:-1 i19:1 i21:0 i22:0 i23:0
      i24:-2 i25:2 i26:-2 i27:2 i28:-1 i29:2 i30:-1 i32:-1 i33:1 i34:0
      i35:2 i36:-2 i37:2 i38:-1 i39:0 i40:-1 i41:2 i42:-2 i43:2
      i45:0 i46:0 i47:0 i48:0 i51:1 i52:-1 i53:0 i54:-1
      i55:-1 i56:1 i57:0 i58:0 i59:-1 i60:1
      i61:0 i62:1 i63:0 i64:0 i65:0 i66:-1 i67:-1
      i68:1 i69:-1 i70:1 i71:0 i72:-1 i73:-1
      i74:2 i75:-2 i76:-1 i77:2
      i78:0 i79:0 i80:-1 i81:-2 i82:0 i83:0 i84:0 i85:1 i86:0 i87:1 i88:0 i89:-1 i90:-2 i91:1 i92:0 i93:0 i94:1 i95:2
      i96:-2 i97:-1 i98:-2 i99:0 i100:1 i101:0
      i102:0 i103:0 i104:0 i105:0 i106:0 i107:0 i108:0 i109:-1 i110:-1 i111:-2 i112:1 i113:1 i114:0 i115:0 i116:1 i117:0
      i118:0 i119:1 i120:0 i121:-1 i122:1
    `),
  },
  {
    id: 'augustinian',
    name: 'Augustinianism',
    era: 'Medieval',
    figure: {
      name: 'Augustine of Hippo',
      dates: '354 – 430',
      quote: 'Remove justice, and what are kingdoms but great bands of robbers?',
      quoteSource: 'City of God, IV.4',
    },
    glossary:
      'Two cities are intermixed in history, one built on love of God and one on love of ' +
      'self, and they will not be separated until the end. Earthly politics can secure a ' +
      'provisional peace but never justice or perfection; expecting salvation from it is ' +
      'the characteristic political error.',
    sources: ['Augustine, City of God', 'Augustine, Confessions'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:1 i05:-1 i06:1 i07:2 i08:0 i09:0 i10:-1 i11:0
      i13:0 i14:0 i15:-1 i16:0 i17:0 i18:-1 i19:1 i21:0 i22:0 i23:0
      i24:-1 i25:1 i26:-1 i27:1 i28:0 i29:1 i30:0 i32:0 i33:0 i34:1
      i35:2 i36:-2 i37:1 i38:-2 i39:1 i40:-2 i41:2 i42:-2 i43:2
      i45:1 i46:-2 i47:1 i48:0 i51:1 i52:-2 i53:1 i54:-2
      i55:-2 i56:1 i57:0 i58:0 i59:-1 i60:2
      i61:-1 i62:2 i63:0 i64:0 i65:-1 i66:-2 i67:0
      i68:2 i69:-2 i70:2 i71:-2 i72:-2 i73:-2
      i74:2 i75:-2 i76:-1 i77:1
      i78:0 i79:-1 i80:2 i81:0 i82:2 i83:0 i84:0 i85:0 i86:0 i87:1 i88:0 i89:-2 i90:-1 i91:0 i92:-1 i93:-2 i94:0 i95:1
      i96:0 i97:0 i98:-1 i99:0 i100:0 i101:0
      i102:1 i103:0 i104:0 i105:-1 i106:1 i107:0 i108:0 i109:0 i110:0 i111:-1 i112:1 i113:-1 i114:0 i115:0 i116:1 i117:-1
      i118:0 i119:0 i120:-1 i121:-1 i122:0
    `),
  },
  {
    id: 'thomistic',
    name: 'Thomism',
    era: 'Medieval',
    figure: {
      name: 'Thomas Aquinas',
      dates: '1225 – 1274',
      quote: 'Law is an ordinance of reason for the common good, made by one who has care of the community.',
      quoteSource: 'Summa Theologiae, I-II q.90 a.4',
    },
    glossary:
      'Political authority is natural rather than merely conventional, and is ordered ' +
      'toward the common good. Human law derives its force from a natural law knowable by ' +
      'reason and grounded in an eternal law; a statute that contradicts it binds nobody ' +
      'in conscience.',
    sources: ['Aquinas, Summa Theologiae I-II qq.90–97', 'Aquinas, De Regno'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:1 i05:-1 i06:0 i07:2 i08:0 i09:1 i10:-1 i11:1
      i13:0 i14:-1 i15:-1 i16:0 i17:-1 i18:1 i19:2 i21:0 i22:2 i23:1
      i24:1 i25:-1 i26:0 i27:1 i28:0 i29:1 i30:1 i32:1 i33:0 i34:2
      i35:2 i36:-2 i37:2 i38:-2 i39:2 i40:-2 i41:2 i42:-2 i43:2
      i45:1 i46:-1 i47:1 i48:-1 i51:2 i52:-2 i53:1 i54:-1
      i55:-2 i56:2 i57:0 i58:1 i59:-1 i60:1
      i61:-1 i62:1 i63:0 i64:0 i65:-1 i66:-1 i67:0
      i68:1 i69:-1 i70:1 i71:-1 i72:-1 i73:-1
      i74:2 i75:-2 i76:-1 i77:2
      i78:0 i79:-1 i80:1 i81:0 i82:2 i83:0 i84:0 i85:0 i86:-1 i87:1 i88:0 i89:-1 i90:-1 i91:0 i92:-2 i93:-1 i94:-1 i95:0
      i96:-1 i97:0 i98:-1 i99:0 i100:0 i101:0
      i102:-1 i103:0 i104:0 i105:-1 i106:0 i107:0 i108:0 i109:0 i110:0 i111:0 i112:1 i113:-1 i114:1 i115:1 i116:0 i117:-1
      i118:-1 i119:-1 i120:-2 i121:-2 i122:-1
    `),
  },
  {
    id: 'feudal',
    name: 'Feudalism',
    era: 'Medieval',
    figure: {
      name: 'Charlemagne',
      dates: '748 – 814',
      quote: null,
      quoteSource: null,
    },
    glossary:
      'Authority is personal rather than territorial, held through sworn bonds of homage ' +
      'and service running down a chain of lords and vassals. Land carries obligation ' +
      'rather than clean title, custom outranks legislation, and the community is a body ' +
      'of estates each with its own duties and privileges.',
    sources: ['Philippe de Beaumanoir, Coutumes de Beauvaisis', 'Bracton, De Legibus et Consuetudinibus Angliae', 'Fulbert of Chartres, Letter on the Obligations of Vassals (1020)'],
    p: prof(`
      i01:2 i02:0 i03:1 i04:2 i05:-1 i06:0 i07:2 i08:0 i09:2 i10:-1 i11:1
      i13:-1 i14:0 i15:1 i16:-2 i17:1 i18:1 i19:1 i21:-1 i22:0 i23:0
      i24:2 i25:-2 i26:2 i27:-2 i28:0 i29:-1 i30:2 i32:1 i33:-1 i34:2
      i35:2 i36:-2 i37:1 i38:-2 i39:2 i40:-2 i41:2 i42:-2 i43:1
      i45:2 i46:-2 i47:2 i48:-2 i51:1 i52:-2 i53:2 i54:-2
      i55:-2 i56:1 i57:0 i58:0 i59:0 i60:2
      i61:-1 i62:1 i63:0 i64:1 i65:-2 i66:1 i67:1
      i68:1 i69:-1 i70:2 i71:-2 i72:-1 i73:-2
      i74:2 i75:-2 i76:-1 i77:0
      i78:0 i79:0 i80:2 i81:2 i82:2 i83:-1 i84:0 i85:0 i86:-1 i87:0 i88:1 i89:0 i90:2 i91:-2 i92:-1 i93:-2 i94:-2 i95:-2
      i96:1 i97:1 i98:1 i99:0 i100:1 i101:0
      i102:-1 i103:0 i104:-2 i105:0 i106:0 i107:1 i108:1 i109:0 i110:2 i111:1 i112:0 i113:-2 i114:1 i115:2 i116:-1 i117:-1
      i118:0 i119:-2 i120:-2 i121:-1 i122:-1
    `),
  },
];
