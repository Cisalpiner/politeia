// POLITEIA — anchors: Early Modern (7)

import { prof } from './_prof.js';

export const EARLY_MODERN = [
  {
    id: 'machiavellian',
    name: "Raison d'État",
    era: 'Early Modern',
    figure: {
      name: 'Niccolò Machiavelli',
      dates: '1469 – 1527',
      quote: 'It is much safer to be feared than loved, if one must choose between them.',
      quoteSource: 'The Prince, XVII',
    },
    glossary:
      'Politics is judged by what preserves the state, not by what would be admirable in ' +
      'a private man. Fortune governs half of human affairs and skill the other half; a ' +
      'ruler must know how not to be good, and a free republic is sustained by armed ' +
      'citizens and useful conflict rather than by concord.',
    sources: ['Machiavelli, The Prince', 'Machiavelli, Discourses on Livy'],
    p: prof(`
      i01:1 i02:-1 i03:1 i04:1 i05:-1 i06:-2 i07:0 i08:-1 i09:0 i10:1 i11:1
      i13:-1 i14:1 i15:1 i16:0 i17:0 i18:1 i19:0 i21:0 i22:0 i23:-1
      i24:2 i25:-2 i26:1 i27:0 i28:-1 i29:0 i30:1 i32:1 i33:0 i34:0
      i35:-1 i36:1 i37:-2 i38:1 i39:-1 i40:0 i41:-1 i42:1 i43:-2
      i45:1 i46:-1 i47:1 i48:0 i51:1 i52:-1 i53:0 i54:-1
      i55:0 i56:1 i57:2 i58:-1 i59:2 i60:1
      i61:0 i62:1 i63:1 i64:0 i65:-1 i66:1 i67:0
      i68:2 i69:-2 i70:2 i71:-2 i72:-1 i73:-2
      i74:-1 i75:1 i76:0 i77:1
      i78:0 i79:1 i80:2 i81:0 i82:2 i83:0 i84:1 i85:-1 i86:0 i87:-1 i88:-1 i89:2 i90:0 i91:1 i92:1 i93:0 i94:0 i95:-2
      i96:1 i97:1 i98:0 i99:0 i100:0 i101:0
      i102:-2 i103:1 i104:0 i105:2 i106:2 i107:0 i108:0 i109:1 i110:0 i111:0 i112:-1 i113:-1 i114:0 i115:0 i116:1 i117:2
      i118:1 i119:-1 i120:0 i121:0 i122:-1
    `),
  },
  {
    id: 'divine-right',
    name: 'Divine-Right Absolutism',
    era: 'Early Modern',
    figure: {
      name: 'Jacques-Bénigne Bossuet',
      dates: '1627 – 1704',
      quote: 'The royal throne is not the throne of a man, but the throne of God himself.',
      quoteSource: 'Politics Drawn from the Very Words of Holy Scripture',
    },
    glossary:
      'The monarch receives authority directly from God and is answerable to God alone. ' +
      'Sovereignty is indivisible, hereditary, and paternal in form; resistance is not ' +
      'merely unlawful but sacrilegious, and the subject who suffers under a bad king ' +
      'suffers a chastisement rather than an injustice.',
    sources: ['Bossuet, Politique tirée de l’Écriture Sainte', 'Filmer, Patriarcha', 'James VI & I, The Trew Law of Free Monarchies'],
    p: prof(`
      i01:2 i02:-2 i03:2 i04:2 i05:-2 i06:-1 i07:2 i08:-1 i09:2 i10:1 i11:-2
      i13:-1 i14:0 i15:1 i16:-1 i17:0 i18:1 i19:0 i21:0 i22:0 i23:-1
      i24:2 i25:-2 i26:2 i27:-2 i28:-1 i29:-1 i30:2 i32:2 i33:-1 i34:2
      i35:2 i36:-2 i37:0 i38:-2 i39:2 i40:-2 i41:2 i42:-2 i43:1
      i45:2 i46:-2 i47:2 i48:-2 i51:1 i52:-2 i53:2 i54:-2
      i55:-2 i56:0 i57:-1 i58:0 i59:-2 i60:2
      i61:-2 i62:2 i63:0 i64:0 i65:-2 i66:0 i67:0
      i68:1 i69:-1 i70:2 i71:-2 i72:-1 i73:-2
      i74:2 i75:-2 i76:-1 i77:1
      i78:0 i79:-2 i80:0 i81:2 i82:2 i83:-1 i84:0 i85:0 i86:-1 i87:0 i88:-1 i89:1 i90:1 i91:-2 i92:-1 i93:-2 i94:-2 i95:-2
      i96:0 i97:0 i98:1 i99:-1 i100:-1 i101:0
      i102:-1 i103:-1 i104:-2 i105:0 i106:0 i107:0 i108:0 i109:0 i110:1 i111:1 i112:-1 i113:-2 i114:-1 i115:1 i116:-1 i117:0
      i118:1 i119:-2 i120:-2 i121:0 i122:-2
    `),
  },
  {
    id: 'hobbesian',
    name: 'Hobbesian Sovereignty',
    era: 'Early Modern',
    figure: {
      name: 'Thomas Hobbes',
      dates: '1588 – 1679',
      quote: 'The life of man, solitary, poor, nasty, brutish, and short.',
      quoteSource: 'Leviathan, XIII',
    },
    glossary:
      'Without a common power to keep all in awe, life is a war of every man against ' +
      'every man. Subjects therefore authorise an undivided sovereign, whose commands ' +
      'constitute justice rather than being measured against it; almost any settled ' +
      'authority is preferable to the dissolution that follows from resisting one.',
    sources: ['Hobbes, Leviathan', 'Hobbes, De Cive', 'Hobbes, Behemoth'],
    p: prof(`
      i01:2 i02:0 i03:2 i04:2 i05:-1 i06:-2 i07:2 i08:-1 i09:0 i10:2 i11:-2
      i13:-1 i14:-1 i15:1 i16:0 i17:0 i18:1 i19:0 i21:1 i22:0 i23:-1
      i24:0 i25:0 i26:-1 i27:1 i28:-1 i29:1 i30:0 i32:1 i33:1 i34:-1
      i35:-1 i36:2 i37:-2 i38:1 i39:0 i40:1 i41:-1 i42:1 i43:-1
      i45:0 i46:0 i47:0 i48:1 i51:1 i52:-1 i53:0 i54:0
      i55:-2 i56:1 i57:0 i58:0 i59:-2 i60:2
      i61:-2 i62:2 i63:0 i64:-1 i65:-2 i66:-1 i67:-1
      i68:2 i69:-2 i70:2 i71:-2 i72:0 i73:-2
      i74:-1 i75:0 i76:-1 i77:2
      i78:0 i79:-2 i80:1 i81:1 i82:2 i83:0 i84:0 i85:0 i86:0 i87:-1 i88:-1 i89:2 i90:-1 i91:1 i92:1 i93:0 i94:1 i95:-1
      i96:1 i97:-1 i98:-1 i99:0 i100:-1 i101:0
      i102:-1 i103:0 i104:0 i105:2 i106:2 i107:0 i108:0 i109:1 i110:0 i111:-1 i112:-1 i113:-1 i114:-2 i115:0 i116:1 i117:2
      i118:1 i119:0 i120:1 i121:0 i122:-1
    `),
  },
  {
    id: 'lockean',
    name: 'Lockean Liberalism',
    era: 'Early Modern',
    figure: {
      name: 'John Locke',
      dates: '1632 – 1704',
      quote: 'Where there is no law, there is no freedom.',
      quoteSource: 'Second Treatise of Government, §57',
    },
    glossary:
      'Persons hold natural rights to life, liberty, and estate prior to any government. ' +
      'Legitimate authority arises only from consent, exists to secure those rights, and ' +
      'is forfeit when it turns against them; property originates in labour mixed with ' +
      'what was held in common.',
    sources: ['Locke, Second Treatise of Government', 'Locke, A Letter Concerning Toleration'],
    p: prof(`
      i01:-1 i02:2 i03:-1 i04:-1 i05:2 i06:2 i07:0 i08:2 i09:-1 i10:-1 i11:2
      i13:-2 i14:2 i15:1 i16:-1 i17:-1 i18:2 i19:0 i21:-1 i22:1 i23:-2
      i24:0 i25:1 i26:-1 i27:1 i28:-1 i29:2 i30:0 i32:0 i33:0 i34:0
      i35:1 i36:-1 i37:1 i38:-1 i39:-1 i40:0 i41:1 i42:-1 i43:1
      i45:-1 i46:1 i47:0 i48:0 i51:1 i52:0 i53:0 i54:0
      i55:-1 i56:1 i57:0 i58:1 i59:1 i60:0
      i61:1 i62:-1 i63:0 i64:0 i65:0 i66:-1 i67:1
      i68:0 i69:0 i70:0 i71:0 i72:0 i73:-1
      i74:1 i75:-1 i76:-1 i77:2
      i78:1 i79:0 i80:0 i81:-1 i82:1 i83:0 i84:0 i85:1 i86:-2 i87:-1 i88:1 i89:-1 i90:-1 i91:0 i92:2 i93:0 i94:0 i95:1
      i96:-1 i97:-1 i98:-1 i99:2 i100:1 i101:2
      i102:-1 i103:0 i104:0 i105:0 i106:1 i107:0 i108:0 i109:0 i110:-2 i111:0 i112:0 i113:0 i114:1 i115:0 i116:0 i117:1
      i118:2 i119:0 i120:0 i121:0 i122:0
    `),
  },
  {
    id: 'montesquieuan',
    name: 'Montesquieuan Constitutionalism',
    era: 'Early Modern',
    figure: {
      name: 'Montesquieu',
      dates: '1689 – 1755',
      quote: 'So that power cannot be abused, power must check power.',
      quoteSource: 'The Spirit of the Laws, XI.4',
    },
    glossary:
      'Liberty is produced by the arrangement of institutions rather than by the virtue ' +
      'of rulers, so legislative, executive, and judicial powers must be lodged in ' +
      'different hands. Laws suit the particular character, climate, and history of a ' +
      'people, and intermediate bodies stand between the sovereign and the subject.',
    sources: ['Montesquieu, The Spirit of the Laws', 'Montesquieu, Persian Letters'],
    p: prof(`
      i01:0 i02:1 i03:0 i04:0 i05:1 i06:2 i07:1 i08:1 i09:1 i10:-2 i11:2
      i13:-1 i14:1 i15:0 i16:0 i17:-1 i18:1 i19:0 i21:0 i22:1 i23:-1
      i24:1 i25:0 i26:0 i27:0 i28:-1 i29:1 i30:2 i32:0 i33:0 i34:1
      i35:1 i36:-1 i37:1 i38:-1 i39:0 i40:0 i41:0 i42:0 i43:1
      i45:0 i46:0 i47:2 i48:-1 i51:2 i52:-2 i53:1 i54:-1
      i55:-2 i56:2 i57:0 i58:1 i59:-1 i60:1
      i61:0 i62:0 i63:0 i64:1 i65:-1 i66:-1 i67:0
      i68:2 i69:-1 i70:1 i71:-1 i72:0 i73:-2
      i74:1 i75:-1 i76:0 i77:1
      i78:0 i79:-1 i80:1 i81:1 i82:2 i83:0 i84:0 i85:0 i86:-1 i87:0 i88:1 i89:0 i90:0 i91:-1 i92:1 i93:-1 i94:-1 i95:0
      i96:-1 i97:-2 i98:0 i99:1 i100:0 i101:1
      i102:-1 i103:0 i104:0 i105:0 i106:1 i107:0 i108:0 i109:0 i110:0 i111:0 i112:0 i113:-1 i114:1 i115:1 i116:-1 i117:0
      i118:1 i119:-2 i120:-1 i121:0 i122:0
    `),
  },
  {
    id: 'rousseauian',
    name: 'The General Will',
    era: 'Early Modern',
    figure: {
      name: 'Jean-Jacques Rousseau',
      dates: '1712 – 1778',
      quote: 'Man is born free, and everywhere he is in chains.',
      quoteSource: 'The Social Contract, I.1',
    },
    glossary:
      'Legitimate authority is the general will of an assembled people legislating for ' +
      'itself, which is not the same as the sum of private interests. Inequality and ' +
      'dependence corrupt a natural goodness; a citizen who resists the general will is ' +
      'forced to be free, and small, roughly equal, self-governing republics are the ' +
      'condition of the whole arrangement.',
    sources: ['Rousseau, The Social Contract', 'Rousseau, Discourse on the Origin of Inequality', 'Rousseau, Émile'],
    p: prof(`
      i01:-1 i02:0 i03:0 i04:2 i05:0 i06:0 i07:1 i08:-1 i09:-2 i10:-2 i11:-1
      i13:1 i14:-1 i15:-2 i16:1 i17:1 i18:-1 i19:1 i21:1 i22:2 i23:1
      i24:1 i25:0 i26:0 i27:0 i28:0 i29:0 i30:1 i32:1 i33:0 i34:0
      i35:1 i36:-1 i37:1 i38:0 i39:1 i40:0 i41:1 i42:-1 i43:1
      i45:1 i46:-1 i47:-1 i48:1 i51:-1 i52:1 i53:1 i54:-2
      i55:1 i56:-1 i57:1 i58:-1 i59:1 i60:-1
      i61:2 i62:-2 i63:-1 i64:2 i65:2 i66:-1 i67:1
      i68:-2 i69:2 i70:-1 i71:2 i72:2 i73:2
      i74:1 i75:-1 i76:0 i77:1
      i78:0 i79:1 i80:0 i81:-2 i82:2 i83:0 i84:0 i85:0 i86:1 i87:1 i88:0 i89:1 i90:0 i91:-1 i92:-1 i93:-1 i94:-1 i95:0
      i96:0 i97:-1 i98:0 i99:-1 i100:2 i101:-1
      i102:-1 i103:0 i104:0 i105:1 i106:0 i107:1 i108:1 i109:0 i110:-1 i111:0 i112:1 i113:-1 i114:2 i115:2 i116:-1 i117:-1
      i118:-1 i119:-1 i120:0 i121:-1 i122:-1
    `),
  },
  {
    id: 'scottish',
    name: 'Commercial Liberalism',
    era: 'Early Modern',
    figure: {
      name: 'Adam Smith',
      dates: '1723 – 1790',
      quote: 'It is not from the benevolence of the butcher that we expect our dinner.',
      quoteSource: 'The Wealth of Nations, I.2',
    },
    glossary:
      'Complex order arises without anyone designing it, from countless people pursuing ' +
      'their own advantage under rules of justice. Commerce softens manners and disperses ' +
      'power; moral judgement grows from sympathy and the impartial spectator rather than ' +
      'from abstract reasoning, and grand schemes founder on how little any planner knows.',
    sources: ['Smith, The Wealth of Nations', 'Smith, The Theory of Moral Sentiments', 'Hume, Essays Moral, Political and Literary'],
    p: prof(`
      i01:0 i02:1 i03:0 i04:0 i05:2 i06:1 i07:1 i08:1 i09:0 i10:-1 i11:2
      i13:-2 i14:1 i15:2 i16:-1 i17:-2 i18:2 i19:0 i21:-2 i22:0 i23:-2
      i24:1 i25:0 i26:0 i27:1 i28:-1 i29:1 i30:1 i32:0 i33:0 i34:1
      i35:0 i36:0 i37:0 i38:0 i39:-1 i40:1 i41:-1 i42:1 i43:-1
      i45:-1 i46:2 i47:2 i48:-1 i51:2 i52:-2 i53:0 i54:1
      i55:-2 i56:2 i57:-1 i58:1 i59:-1 i60:1
      i61:0 i62:0 i63:-1 i64:1 i65:-1 i66:-1 i67:1
      i68:2 i69:-1 i70:1 i71:-1 i72:0 i73:-2
      i74:0 i75:0 i76:0 i77:1
      i78:1 i79:-1 i80:1 i81:0 i82:1 i83:0 i84:0 i85:1 i86:-2 i87:-1 i88:0 i89:-1 i90:-1 i91:0 i92:1 i93:0 i94:0 i95:0
      i96:-1 i97:1 i98:0 i99:2 i100:1 i101:2
      i102:0 i103:0 i104:0 i105:1 i106:1 i107:-1 i108:-1 i109:0 i110:-1 i111:0 i112:0 i113:0 i114:0 i115:0 i116:0 i117:1
      i118:2 i119:-1 i120:-1 i121:0 i122:0
    `),
  },
];
