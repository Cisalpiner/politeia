// POLITEIA — anchors: Twentieth Century, part B (10)
// See twentieth-a.js: the A/B split is by file size only and carries no grouping.

import { prof } from './_prof.js';

export const TWENTIETH_B = [
  {
    id: 'rawlsian',
    name: 'Rawlsian Liberalism',
    era: 'Twentieth Century',
    figure: {
      name: 'John Rawls',
      dates: '1921 – 2002',
      quote: 'Justice is the first virtue of social institutions, as truth is of systems of thought.',
      quoteSource: 'A Theory of Justice',
    },
    glossary:
      'Principles of justice are those that free and equal persons would choose behind a ' +
      'veil of ignorance, not knowing their own place, talents, or convictions. Basic ' +
      'liberties come first and are not tradeable; inequalities are permitted only where ' +
      'they work to the benefit of the least advantaged.',
    sources: ['Rawls, A Theory of Justice', 'Rawls, Political Liberalism', 'Rawls, Justice as Fairness: A Restatement'],
    p: prof(`
      i01:-1 i02:1 i03:1 i04:-2 i05:1 i06:2 i07:0 i08:2 i09:-2 i10:-2 i11:1
      i13:0 i14:-1 i15:-2 i16:1 i17:0 i18:0 i19:2 i21:0 i22:1 i23:0
      i24:-2 i25:2 i26:-2 i27:2 i28:1 i29:1 i30:-1 i32:-1 i33:1 i34:-1
      i35:-1 i36:0 i37:0 i38:0 i39:-2 i40:0 i41:-1 i42:1 i43:1
      i45:-1 i46:1 i47:-1 i48:1 i51:2 i52:0 i53:-1 i54:0
      i55:-2 i56:2 i57:0 i58:2 i59:-2 i60:0
      i61:0 i62:-1 i63:-1 i64:-1 i65:1 i66:-2 i67:0
      i68:-1 i69:1 i70:-1 i71:1 i72:1 i73:1
      i74:0 i75:0 i76:0 i77:2
      i78:0 i79:-2 i80:-1 i81:-2 i82:2 i83:0 i84:0 i85:1 i86:-1 i87:1 i88:1 i89:-2 i90:-2 i91:1 i92:2 i93:1 i94:1 i95:2
      i96:-2 i97:-2 i98:-2 i99:0 i100:1 i101:-1
      i102:-1 i103:0 i104:2 i105:0 i106:0 i107:0 i108:0 i109:0 i110:-2 i111:-2 i112:1 i113:1 i114:0 i115:-1 i116:1 i117:1
      i118:0 i119:1 i120:1 i121:-2 i122:1
    `),
  },
  {
    id: 'communitarianism',
    name: 'Communitarianism',
    era: 'Twentieth Century',
    figure: {
      name: 'Alasdair MacIntyre',
      dates: '1929 – 2025',
      quote: 'I can only answer the question “What am I to do?” if I can answer the question “Of what story do I find myself a part?”',
      quoteSource: 'After Virtue',
    },
    glossary:
      'The unencumbered self of liberal theory does not exist: people are constituted by ' +
      'communities, traditions, and roles they did not choose. Moral reasoning is ' +
      'intelligible only inside a tradition of practice, and a politics that refuses to ' +
      'name any conception of the good has already smuggled one in.',
    sources: ['MacIntyre, After Virtue', 'Sandel, Liberalism and the Limits of Justice', 'Taylor, Sources of the Self'],
    p: prof(`
      i01:0 i02:-1 i03:1 i04:2 i05:-1 i06:1 i07:1 i08:0 i09:0 i10:-2 i11:1
      i13:0 i14:-1 i15:-1 i16:0 i17:0 i18:0 i19:1 i21:0 i22:2 i23:1
      i24:2 i25:-2 i26:1 i27:0 i28:1 i29:-2 i30:2 i32:1 i33:-1 i34:2
      i35:1 i36:-1 i37:1 i38:-2 i39:0 i40:-2 i41:2 i42:-1 i43:2
      i45:1 i46:-1 i47:2 i48:-2 i51:2 i52:-2 i53:1 i54:-2
      i55:-1 i56:1 i57:0 i58:0 i59:-1 i60:1
      i61:1 i62:-1 i63:-1 i64:2 i65:1 i66:-1 i67:1
      i68:1 i69:0 i70:1 i71:-1 i72:1 i73:-1
      i74:1 i75:0 i76:1 i77:-1
      i78:0 i79:-1 i80:2 i81:0 i82:1 i83:0 i84:1 i85:1 i86:-1 i87:2 i88:2 i89:-1 i90:0 i91:-2 i92:-2 i93:-2 i94:-2 i95:-1
      i96:-1 i97:1 i98:0 i99:0 i100:1 i101:0
      i102:-1 i103:0 i104:1 i105:-1 i106:0 i107:1 i108:1 i109:0 i110:0 i111:1 i112:1 i113:-1 i114:2 i115:2 i116:-1 i117:-1
      i118:-1 i119:-2 i120:-2 i121:-1 i122:-1
    `),
  },
  {
    id: 'frankfurt',
    name: 'Critical Theory',
    era: 'Twentieth Century',
    figure: {
      name: 'Theodor Adorno',
      dates: '1903 – 1969',
      quote: 'There is no right life in the wrong one.',
      quoteSource: 'Minima Moralia',
    },
    glossary:
      'Enlightenment reason turned into its opposite: an instrument for calculating and ' +
      'dominating, applied to nature and then to people. Mass culture manufactures the ' +
      'contentment that keeps the arrangement in place, so critique must expose the ' +
      'conditions that make the existing order appear natural rather than propose ' +
      'blueprints.',
    sources: ['Horkheimer & Adorno, Dialectic of Enlightenment', 'Marcuse, One-Dimensional Man', 'Adorno, Minima Moralia'],
    p: prof(`
      i01:-2 i02:1 i03:0 i04:-1 i05:1 i06:1 i07:-2 i08:1 i09:-2 i10:-2 i11:-1
      i13:2 i14:-2 i15:-2 i16:2 i17:2 i18:-2 i19:2 i21:1 i22:-1 i23:2
      i24:-2 i25:2 i26:-2 i27:2 i28:1 i29:0 i30:-1 i32:-2 i33:1 i34:-1
      i35:-1 i36:1 i37:-1 i38:1 i39:-2 i40:0 i41:-1 i42:1 i43:0
      i45:1 i46:-1 i47:-2 i48:2 i51:-1 i52:1 i53:1 i54:-2
      i55:2 i56:-2 i57:2 i58:-2 i59:0 i60:-2
      i61:-2 i62:2 i63:1 i64:-2 i65:-1 i66:-2 i67:-1
      i68:-1 i69:2 i70:-1 i71:2 i72:2 i73:2
      i74:0 i75:1 i76:1 i77:-1
      i78:0 i79:1 i80:0 i81:-2 i82:0 i83:1 i84:2 i85:1 i86:1 i87:2 i88:1 i89:-2 i90:-2 i91:2 i92:0 i93:1 i94:1 i95:2
      i96:-2 i97:-1 i98:-2 i99:-2 i100:0 i101:-2
      i102:0 i103:1 i104:-1 i105:0 i106:0 i107:1 i108:1 i109:-1 i110:-2 i111:-2 i112:1 i113:-1 i114:0 i115:0 i116:2 i117:-2
      i118:-2 i119:1 i120:1 i121:-2 i122:2
    `),
  },
  {
    id: 'foucauldian',
    name: 'Poststructuralism',
    era: 'Twentieth Century',
    figure: {
      name: 'Michel Foucault',
      dates: '1926 – 1984',
      quote: 'Power is everywhere, not because it embraces everything, but because it comes from everywhere.',
      quoteSource: 'The History of Sexuality, vol. I',
    },
    glossary:
      'Power does not merely repress; it produces subjects, categories, and the very ' +
      'standards by which truth is judged. Analysis proceeds by genealogy — tracing how ' +
      'present arrangements came to seem natural — rather than by appeal to universal ' +
      'principle, and emancipatory projects carry their own disciplinary apparatus.',
    sources: ['Foucault, Discipline and Punish', 'Foucault, The History of Sexuality vol. I', 'Foucault, Power/Knowledge'],
    p: prof(`
      i01:-2 i02:1 i03:-1 i04:-1 i05:1 i06:1 i07:-2 i08:1 i09:-2 i10:-2 i11:-1
      i13:1 i14:-1 i15:-1 i16:1 i17:1 i18:-1 i19:1 i21:0 i22:0 i23:1
      i24:-1 i25:1 i26:-1 i27:1 i28:1 i29:-1 i30:0 i32:-1 i33:1 i34:-1
      i35:-2 i36:1 i37:-1 i38:2 i39:-2 i40:-1 i41:-2 i42:2 i43:-1
      i45:0 i46:-1 i47:-1 i48:1 i51:-1 i52:1 i53:0 i54:-1
      i55:1 i56:-1 i57:2 i58:-1 i59:0 i60:-1
      i61:0 i62:-1 i63:0 i64:1 i65:1 i66:-1 i67:2
      i68:0 i69:1 i70:-1 i71:1 i72:2 i73:1
      i74:-2 i75:2 i76:2 i77:-2
      i78:0 i79:1 i80:1 i81:-1 i82:-1 i83:0 i84:2 i85:1 i86:0 i87:1 i88:1 i89:-2 i90:-2 i91:2 i92:1 i93:1 i94:1 i95:1
      i96:-2 i97:0 i98:-2 i99:-1 i100:1 i101:-1
      i102:0 i103:1 i104:-1 i105:0 i106:1 i107:1 i108:0 i109:-1 i110:-1 i111:-2 i112:1 i113:-1 i114:1 i115:0 i116:2 i117:-2
      i118:-1 i119:0 i120:1 i121:-1 i122:1
    `),
  },
  {
    id: 'radical-feminism',
    name: 'Radical Feminism',
    era: 'Twentieth Century',
    figure: {
      name: 'Shulamith Firestone',
      dates: '1945 – 2012',
      quote: 'Pregnancy is barbaric.',
      quoteSource: 'The Dialectic of Sex',
    },
    glossary:
      'Sex is the oldest and most fundamental division of power, prior to class and not ' +
      'reducible to it. The family, sexuality, and reproduction are political ' +
      'institutions rather than private arrangements; what feels natural about them is ' +
      'the residue of a system, and liberation requires reconstructing them at the root.',
    sources: ['Firestone, The Dialectic of Sex', 'Millett, Sexual Politics', 'MacKinnon, Toward a Feminist Theory of the State'],
    p: prof(`
      i01:-2 i02:1 i03:0 i04:-1 i05:1 i06:0 i07:-2 i08:1 i09:-2 i10:-2 i11:-1
      i13:1 i14:-1 i15:-2 i16:1 i17:1 i18:-1 i19:2 i21:1 i22:-1 i23:1
      i24:-1 i25:1 i26:1 i27:1 i28:2 i29:-2 i30:-2 i32:-1 i33:1 i34:-2
      i35:-1 i36:1 i37:-1 i38:2 i39:-2 i40:0 i41:-2 i42:1 i43:0
      i45:-1 i46:0 i47:-2 i48:2 i51:-2 i52:2 i53:-1 i54:0
      i55:2 i56:-2 i57:2 i58:-2 i59:1 i60:-2
      i61:-1 i62:0 i63:1 i64:-1 i65:1 i66:-2 i67:0
      i68:-1 i69:2 i70:-1 i71:2 i72:2 i73:2
      i74:0 i75:1 i76:2 i77:-1
      i78:0 i79:1 i80:0 i81:-2 i82:0 i83:0 i84:1 i85:1 i86:1 i87:2 i88:1 i89:-2 i90:-2 i91:2 i92:-1 i93:1 i94:1 i95:1
      i96:-2 i97:-1 i98:-2 i99:-1 i100:1 i101:-1
      i102:-1 i103:1 i104:0 i105:0 i106:0 i107:0 i108:0 i109:-1 i110:-2 i111:-2 i112:1 i113:0 i114:1 i115:-1 i116:2 i117:-1
      i118:-1 i119:2 i120:2 i121:-2 i122:1
    `),
  },
  {
    id: 'deep-ecology',
    name: 'Deep Ecology',
    era: 'Twentieth Century',
    figure: {
      name: 'Arne Næss',
      dates: '1912 – 2009',
      quote: 'The flourishing of nonhuman life has value independent of its usefulness to humans.',
      quoteSource: 'The Deep Ecology Platform',
    },
    glossary:
      'Nonhuman life has worth in itself, not merely as a resource, and human beings have ' +
      'no right to reduce its richness except to satisfy vital needs. The crisis is not ' +
      'technical but a matter of what a civilisation is for; the answer involves fewer ' +
      'people, smaller scale, and living within a place rather than upon it.',
    sources: ['Næss, Ecology, Community and Lifestyle', 'Leopold, A Sand County Almanac', 'Schumacher, Small Is Beautiful'],
    p: prof(`
      i01:-1 i02:0 i03:1 i04:1 i05:0 i06:1 i07:0 i08:1 i09:-1 i10:-2 i11:0
      i13:1 i14:-1 i15:-2 i16:1 i17:1 i18:-1 i19:1 i21:1 i22:2 i23:1
      i24:1 i25:0 i26:0 i27:1 i28:1 i29:-1 i30:2 i32:0 i33:0 i34:2
      i35:2 i36:-1 i37:1 i38:-1 i39:-1 i40:-2 i41:1 i42:-1 i43:2
      i45:2 i46:-2 i47:1 i48:-1 i51:-1 i52:-1 i53:2 i54:-2
      i55:1 i56:-1 i57:1 i58:-1 i59:0 i60:-1
      i61:1 i62:0 i63:1 i64:1 i65:2 i66:-1 i67:1
      i68:0 i69:1 i70:0 i71:0 i72:1 i73:1
      i74:1 i75:0 i76:1 i77:0
      i78:0 i79:1 i80:1 i81:0 i82:0 i83:-2 i84:1 i85:2 i86:1 i87:1 i88:1 i89:-2 i90:0 i91:0 i92:-1 i93:-2 i94:0 i95:1
      i96:-1 i97:0 i98:0 i99:-1 i100:2 i101:-1
      i102:0 i103:0 i104:1 i105:0 i106:0 i107:2 i108:2 i109:0 i110:0 i111:0 i112:1 i113:0 i114:2 i115:2 i116:1 i117:-1
      i118:-1 i119:-2 i120:-2 i121:-1 i122:0
    `),
  },
  {
    id: 'neoconservatism',
    name: 'Neoconservatism',
    era: 'Twentieth Century',
    figure: {
      name: 'Irving Kristol',
      dates: '1920 – 2009',
      quote: 'A neoconservative is a liberal who has been mugged by reality.',
      quoteSource: 'Attributed',
    },
    glossary:
      'Liberal democracy is genuinely better than its rivals and worth defending abroad, ' +
      'by force where necessary. Ambitious social engineering produces consequences its ' +
      'designers did not foresee, moral relativism corrodes the confidence a free society ' +
      'needs to survive, and a nation requires citizens who believe it is worth ' +
      'something.',
    sources: ['Kristol, Neoconservatism: The Autobiography of an Idea', 'Strauss, Natural Right and History', 'Podhoretz, The Present Danger'],
    p: prof(`
      i01:1 i02:-1 i03:2 i04:1 i05:0 i06:0 i07:2 i08:0 i09:0 i10:-1 i11:1
      i13:-2 i14:1 i15:2 i16:-1 i17:-2 i18:2 i19:0 i21:-1 i22:0 i23:-2
      i24:2 i25:0 i26:-1 i27:1 i28:-2 i29:2 i30:1 i32:1 i33:-1 i34:1
      i35:2 i36:-2 i37:1 i38:-2 i39:0 i40:-1 i41:1 i42:-2 i43:1
      i45:1 i46:0 i47:2 i48:-1 i51:1 i52:-2 i53:1 i54:0
      i55:-2 i56:1 i57:0 i58:1 i59:1 i60:1
      i61:-2 i62:2 i63:1 i64:-1 i65:-2 i66:-1 i67:-2
      i68:2 i69:-2 i70:2 i71:-2 i72:-1 i73:-2
      i74:2 i75:-2 i76:-2 i77:2
      i78:1 i79:-2 i80:1 i81:0 i82:2 i83:0 i84:1 i85:-2 i86:-2 i87:-1 i88:0 i89:-1 i90:-2 i91:0 i92:-1 i93:0 i94:-1 i95:0
      i96:0 i97:-1 i98:-2 i99:1 i100:-2 i101:2
      i102:-2 i103:0 i104:1 i105:1 i106:0 i107:-1 i108:-2 i109:2 i110:-2 i111:1 i112:-1 i113:0 i114:-1 i115:0 i116:-2 i117:1
      i118:2 i119:-1 i120:-1 i121:0 i122:-1
    `),
  },
  {
    id: 'paleoconservatism',
    name: 'Paleoconservatism',
    era: 'Twentieth Century',
    figure: {
      name: 'Samuel T. Francis',
      dates: '1947 – 2005',
      quote: null,
      quoteSource: null,
    },
    glossary:
      'The real ruling class is a managerial elite in government, corporations, and ' +
      'universities whose interests run against those of the historic nation. The remedy ' +
      'is to defend that nation: its borders, its religion, its inherited culture, and ' +
      'the middle class that carries it — while refusing foreign wars fought for someone ' +
      'else’s abstractions.',
    sources: ['Francis, Beautiful Losers', 'Buchanan, The Death of the West', 'Weaver, Ideas Have Consequences'],
    p: prof(`
      i01:1 i02:0 i03:1 i04:2 i05:0 i06:1 i07:1 i08:2 i09:0 i10:-1 i11:1
      i13:-2 i14:2 i15:1 i16:-1 i17:-1 i18:2 i19:-1 i21:-1 i22:2 i23:-2
      i24:2 i25:-2 i26:2 i27:-2 i28:-2 i29:0 i30:2 i32:2 i33:-2 i34:2
      i35:2 i36:-2 i37:2 i38:-2 i39:1 i40:-2 i41:2 i42:-2 i43:1
      i45:2 i46:-2 i47:2 i48:-2 i51:1 i52:-2 i53:2 i54:-1
      i55:-1 i56:1 i57:0 i58:-1 i59:-1 i60:1
      i61:2 i62:-1 i63:-1 i64:2 i65:1 i66:0 i67:2
      i68:2 i69:-2 i70:2 i71:-2 i72:-2 i73:-2
      i74:2 i75:-2 i76:-1 i77:1
      i78:1 i79:-1 i80:2 i81:0 i82:1 i83:0 i84:2 i85:2 i86:-2 i87:1 i88:1 i89:-1 i90:1 i91:-2 i92:-1 i93:-2 i94:-2 i95:-2
      i96:0 i97:1 i98:2 i99:1 i100:2 i101:1
      i102:0 i103:-1 i104:-1 i105:0 i106:2 i107:1 i108:1 i109:-1 i110:1 i111:2 i112:0 i113:-1 i114:2 i115:2 i116:-2 i117:0
      i118:2 i119:-2 i120:-2 i121:1 i122:-2
    `),
  },
  {
    id: 'traditionalism',
    name: 'Perennialism',
    era: 'Twentieth Century',
    figure: {
      name: 'Julius Evola',
      dates: '1898 – 1974',
      quote: null,
      quoteSource: null,
    },
    glossary:
      'Beneath the world religions lies a single primordial Tradition, and history since ' +
      'antiquity is its progressive occlusion — a descent through castes from priest to ' +
      'warrior to merchant to servant. Modernity is not a stage to be improved but a ' +
      'dark age to be seen through; the response is inner hierarchy and detachment rather ' +
      'than reform.',
    sources: ['Guénon, The Crisis of the Modern World', 'Guénon, The Reign of Quantity', 'Evola, Revolt Against the Modern World'],
    p: prof(`
      i01:2 i02:-1 i03:2 i04:2 i05:-1 i06:0 i07:2 i08:1 i09:2 i10:-2 i11:-1
      i13:-1 i14:0 i15:1 i16:0 i17:0 i18:0 i19:-1 i21:0 i22:1 i23:-1
      i24:1 i25:-1 i26:2 i27:-2 i28:-1 i29:-1 i30:2 i32:1 i33:-1 i34:2
      i35:2 i36:-2 i37:2 i38:-2 i39:1 i40:-2 i41:2 i42:-2 i43:2
      i45:2 i46:-2 i47:2 i48:-2 i51:-1 i52:-2 i53:2 i54:-2
      i55:1 i56:-1 i57:0 i58:-2 i59:0 i60:-1
      i61:-2 i62:2 i63:2 i64:-1 i65:-2 i66:1 i67:0
      i68:2 i69:-2 i70:2 i71:-2 i72:-2 i73:-2
      i74:2 i75:-2 i76:0 i77:0
      i78:0 i79:1 i80:2 i81:2 i82:0 i83:-2 i84:1 i85:0 i86:-1 i87:0 i88:-1 i89:-1 i90:1 i91:-2 i92:-2 i93:-2 i94:-1 i95:-1
      i96:1 i97:1 i98:1 i99:0 i100:-1 i101:0
      i102:1 i103:0 i104:-2 i105:-1 i106:0 i107:2 i108:1 i109:0 i110:1 i111:0 i112:-1 i113:-2 i114:0 i115:1 i116:-1 i117:-2
      i118:1 i119:-2 i120:-2 i121:1 i122:-1
    `),
  },
  {
    id: 'nouvelle-droite',
    name: 'Nouvelle Droite',
    era: 'Twentieth Century',
    figure: {
      name: 'Alain de Benoist',
      dates: 'b. 1943',
      quote: null,
      quoteSource: null,
    },
    glossary:
      'The real battle is cultural and precedes politics, so the task is to win the ' +
      'assumptions of an age rather than an election. Difference between peoples is a ' +
      'good to be preserved — against a liberal universalism and a global market held to ' +
      'flatten every culture into the same consumer — and Europe’s pre-Christian ' +
      'inheritance is a live resource.',
    sources: ['de Benoist, View from the Right', 'de Benoist, Manifesto for a European Renaissance', 'de Benoist, Beyond Human Rights'],
    p: prof(`
      i01:1 i02:0 i03:1 i04:2 i05:0 i06:1 i07:1 i08:1 i09:0 i10:-2 i11:0
      i13:0 i14:0 i15:-1 i16:0 i17:0 i18:1 i19:1 i21:1 i22:2 i23:1
      i24:2 i25:-2 i26:2 i27:-2 i28:0 i29:-2 i30:2 i32:2 i33:-1 i34:2
      i35:1 i36:0 i37:1 i38:-1 i39:-1 i40:-2 i41:1 i42:0 i43:1
      i45:2 i46:-2 i47:2 i48:-2 i51:-1 i52:-2 i53:2 i54:-2
      i55:1 i56:-1 i57:1 i58:-2 i59:0 i60:-1
      i61:1 i62:0 i63:2 i64:2 i65:1 i66:1 i67:1
      i68:1 i69:-1 i70:1 i71:-1 i72:-1 i73:-1
      i74:-1 i75:1 i76:2 i77:-1
      i78:0 i79:1 i80:2 i81:0 i82:1 i83:0 i84:2 i85:1 i86:0 i87:1 i88:1 i89:-1 i90:1 i91:-2 i92:-1 i93:-2 i94:-2 i95:-1
      i96:0 i97:1 i98:2 i99:0 i100:1 i101:0
      i102:-1 i103:0 i104:-1 i105:0 i106:1 i107:1 i108:1 i109:0 i110:0 i111:0 i112:0 i113:-1 i114:2 i115:2 i116:-1 i117:-1
      i118:-1 i119:-2 i120:-2 i121:-1 i122:-2
    `),
  },
];
