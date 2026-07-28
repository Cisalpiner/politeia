// POLITEIA — anchors: Twentieth Century, part A (11)
//
// The A/B split across the twentieth century is by FILE SIZE ONLY. It carries no
// political grouping, deliberately — a filename that sorted traditions into camps would
// be an editorial judgement smuggled into the directory listing.

import { prof } from './_prof.js';

export const TWENTIETH_A = [
  {
    id: 'leninist',
    name: 'Leninism',
    era: 'Twentieth Century',
    figure: {
      name: 'Vladimir Lenin',
      dates: '1870 – 1924',
      quote: 'Without revolutionary theory, there can be no revolutionary movement.',
      quoteSource: 'What Is To Be Done?',
    },
    glossary:
      'Left to itself the working class arrives only at trade-union consciousness, so a ' +
      'disciplined party of professional revolutionaries must bring theory from outside ' +
      'and lead. Power is seized rather than won at the ballot, and the transition ' +
      'requires a dictatorship of the proletariat organised on democratic centralism.',
    sources: ['Lenin, What Is To Be Done?', 'Lenin, The State and Revolution', 'Lenin, Imperialism, the Highest Stage of Capitalism'],
    p: prof(`
      i01:2 i02:-2 i03:2 i04:1 i05:-1 i06:-2 i07:1 i08:-2 i09:-2 i10:0 i11:-2
      i13:2 i14:-2 i15:-2 i16:2 i17:2 i18:-2 i19:2 i21:2 i22:-2 i23:1
      i24:-1 i25:2 i26:-2 i27:2 i28:1 i29:-1 i30:-1 i32:-1 i33:0 i34:-2
      i35:-1 i36:1 i37:-1 i38:2 i39:-2 i40:0 i41:-1 i42:1 i43:-2
      i45:-1 i46:1 i47:-2 i48:2 i51:-2 i52:1 i53:-1 i54:1
      i55:2 i56:-2 i57:2 i58:-2 i59:2 i60:-2
      i61:-2 i62:2 i63:2 i64:-2 i65:-1 i66:-2 i67:-2
      i68:-2 i69:2 i70:-2 i71:2 i72:2 i73:2
      i74:2 i75:-2 i76:-1 i77:2
      i78:1 i79:0 i80:-1 i81:-2 i82:2 i83:2 i84:1 i85:0 i86:2 i87:2 i88:2 i89:-1 i90:-2 i91:2 i92:0 i93:1 i94:1 i95:2
      i96:1 i97:-1 i98:-2 i99:-2 i100:-2 i101:-2
      i102:-2 i103:-1 i104:-2 i105:1 i106:0 i107:0 i108:-1 i109:-1 i110:-1 i111:-2 i112:0 i113:0 i114:-1 i115:-1 i116:2 i117:1
      i118:-1 i119:1 i120:2 i121:-2 i122:1
    `),
  },
  {
    id: 'stalinist',
    name: 'Stalinism',
    era: 'Twentieth Century',
    figure: {
      name: 'Joseph Stalin',
      dates: '1878 – 1953',
      quote: 'Cadres decide everything.',
      quoteSource: 'Address to Red Army Academy graduates, 1935',
    },
    glossary:
      'Socialism can be built in a single country, and building it requires a party-state ' +
      'strong enough to industrialise at forced pace against internal and external ' +
      'enemies. The class struggle sharpens before it dims, ' +
      'which licenses us permanent vigilance; national feeling is harnessed rather than ' +
      'dissolved.',
    sources: ['Stalin, Foundations of Leninism', 'Stalin, Problems of Leninism', 'History of the CPSU(B): Short Course'],
    note: 'Separated from Leninism chiefly by i24/i32 (national particularism), i10, and i54.',
    p: prof(`
      i01:2 i02:-2 i03:2 i04:2 i05:-2 i06:-2 i07:2 i08:-2 i09:-1 i10:1 i11:-2
      i13:2 i14:-2 i15:-2 i16:2 i17:2 i18:-2 i19:1 i21:2 i22:-2 i23:-1
      i24:2 i25:-1 i26:0 i27:1 i28:0 i29:-1 i30:1 i32:2 i33:-1 i34:0
      i35:-1 i36:1 i37:-2 i38:1 i39:-2 i40:-1 i41:0 i42:1 i43:-2
      i45:-1 i46:1 i47:0 i48:1 i51:-1 i52:-1 i53:1 i54:2
      i55:1 i56:-1 i57:2 i58:-2 i59:2 i60:0
      i61:-2 i62:2 i63:2 i64:-2 i65:-2 i66:-1 i67:-2
      i68:-1 i69:2 i70:-1 i71:2 i72:2 i73:1
      i74:2 i75:-2 i76:-2 i77:2
      i78:1 i79:0 i80:0 i81:-1 i82:2 i83:2 i84:1 i85:0 i86:2 i87:2 i88:1 i89:1 i90:0 i91:0 i92:0 i93:0 i94:-1 i95:0
      i96:2 i97:-1 i98:0 i99:-2 i100:-1 i101:-2
      i102:-2 i103:-2 i104:-2 i105:2 i106:0 i107:-1 i108:-2 i109:-1 i110:-1 i111:-1 i112:-1 i113:0 i114:-2 i115:-1 i116:0 i117:1
      i118:1 i119:-1 i120:0 i121:-1 i122:-2
    `),
  },
  {
    id: 'council-communism',
    name: 'Council Communism',
    era: 'Twentieth Century',
    figure: {
      name: 'Rosa Luxemburg',
      dates: '1871 – 1919',
      quote: 'Freedom is always the freedom of the one who thinks differently.',
      quoteSource: 'The Russian Revolution',
    },
    glossary:
      'Emancipation is the act of the working class itself, exercised through workers’ ' +
      'councils rather than delegated to a party that will substitute itself for the ' +
      'class. Spontaneity and mass action teach what no leadership can; a revolution that ' +
      'suppresses dissent has already destroyed the thing it was for.',
    sources: ['Luxemburg, The Mass Strike', 'Luxemburg, The Russian Revolution', 'Pannekoek, Workers’ Councils'],
    p: prof(`
      i01:-2 i02:1 i03:-2 i04:-1 i05:1 i06:1 i07:-2 i08:1 i09:-2 i10:-2 i11:-1
      i13:2 i14:-2 i15:-2 i16:2 i17:2 i18:-2 i19:2 i21:1 i22:-2 i23:2
      i24:-1 i25:2 i26:-2 i27:2 i28:1 i29:-1 i30:-1 i32:-2 i33:1 i34:-1
      i35:-1 i36:1 i37:-1 i38:2 i39:-2 i40:0 i41:-1 i42:1 i43:-1
      i45:-1 i46:1 i47:-2 i48:2 i51:-2 i52:2 i53:-1 i54:0
      i55:2 i56:-2 i57:2 i58:-2 i59:1 i60:-2
      i61:2 i62:-2 i63:-1 i64:1 i65:2 i66:-2 i67:1
      i68:-2 i69:2 i70:-2 i71:2 i72:2 i73:2
      i74:1 i75:-1 i76:0 i77:1
      i78:0 i79:1 i80:-1 i81:-2 i82:1 i83:2 i84:1 i85:0 i86:2 i87:2 i88:2 i89:-2 i90:-2 i91:1 i92:1 i93:1 i94:1 i95:2
      i96:-1 i97:-1 i98:-2 i99:-2 i100:2 i101:-2
      i102:-2 i103:2 i104:-1 i105:0 i106:1 i107:0 i108:0 i109:-1 i110:-2 i111:-2 i112:1 i113:0 i114:1 i115:-1 i116:2 i117:0
      i118:-2 i119:1 i120:1 i121:-2 i122:2
    `),
  },
  {
    id: 'italian-fascism',
    name: 'Italian Fascism',
    era: 'Twentieth Century',
    figure: {
      name: 'Giovanni Gentile',
      dates: '1875 – 1944',
      quote: 'Everything within the state, nothing outside the state, nothing against the state.',
      quoteSource: 'The Doctrine of Fascism',
    },
    glossary:
      'The state is not a consequence of individuals but the reality in which they become ' +
      'themselves; liberty exists only within it. Class conflict is resolved by ' +
      'corporations binding employers and workers to national production, and life is ' +
      'understood as struggle, discipline, and action rather than comfort or calculation.',
    sources: ['Gentile & Mussolini, The Doctrine of Fascism', 'Gentile, Origins and Doctrine of Fascism', 'Labour Charter of 1927'],
    p: prof(`
      i01:2 i02:-2 i03:2 i04:2 i05:-2 i06:-2 i07:2 i08:-2 i09:0 i10:1 i11:-2
      i13:0 i14:-1 i15:0 i16:0 i17:0 i18:0 i19:1 i21:1 i22:1 i23:0
      i24:2 i25:-2 i26:1 i27:0 i28:0 i29:-2 i30:2 i32:2 i33:-2 i34:2
      i35:1 i36:1 i37:-1 i38:0 i39:1 i40:-2 i41:1 i42:0 i43:-1
      i45:1 i46:0 i47:1 i48:0 i51:-1 i52:-1 i53:2 i54:1
      i55:2 i56:-2 i57:2 i58:-2 i59:2 i60:-1
      i61:-1 i62:2 i63:2 i64:1 i65:-2 i66:2 i67:0
      i68:1 i69:0 i70:1 i71:0 i72:0 i73:-2
      i74:1 i75:-1 i76:0 i77:-1
      i78:0 i79:2 i80:2 i81:0 i82:2 i83:1 i84:0 i85:-1 i86:0 i87:1 i88:1 i89:2 i90:-1 i91:0 i92:-2 i93:-1 i94:-2 i95:-2
      i96:1 i97:1 i98:0 i99:0 i100:0 i101:0
      i102:-2 i103:0 i104:-2 i105:1 i106:0 i107:0 i108:-1 i109:0 i110:1 i111:1 i112:-1 i113:-1 i114:-1 i115:1 i116:-2 i117:1
      i118:0 i119:-2 i120:-2 i121:-1 i122:-2
    `),
  },
  {
    id: 'national-socialism',
    name: 'National Socialism',
    era: 'Twentieth Century',
    figure: {
      name: 'Adolf Hitler',
      dates: '1889 – 1945',
      quote: 'A state was never founded by peaceful economy, only and always by the instinct of race preservation, and by heroics, or by cunning',
      quoteSource: 'Mein Kampf, ch. IV',
    },
    glossary:
      'The nation is a racial and biological community whose preservation is the supreme ' +
      'political value. History is a struggle for existence between such ' +
      'communities. It is led by a single will rather than by deliberation; property, ' +
      'class, and the individual are only subordinate to the racial whole, and equality is ' +
      'a denial of nature.',
    sources: ['Hitler, Mein Kampf', 'Rosenberg, Der Mythus des 20. Jahrhunderts', 'NSDAP 25-Point Programme (1920)'],
    note:
      'QUOTE CHOSEN FOR DOCTRINAL WORK, NOT NOTORIETY. The map is not sanitised — the ' +
      'anchor is named in full, profiled in full, and ranked without euphemism. But a ' +
      'pull quote is set in display type beside a portrait, so it should earn that ' +
      'placement by explaining something. This one does: subordinating the state to a ' +
      'further end is exactly what divides this doctrine from Italian Fascism, where the ' +
      'state IS the end (cf. Gentile). Those two anchors sit at 0.90 cosine, and this is ' +
      'the seam. Slogans and racial invective would tell a reader nothing they did not ' +
      'already know.',
    p: prof(`
      i01:2 i02:-2 i03:2 i04:2 i05:-2 i06:-2 i07:2 i08:-2 i09:0 i10:1 i11:-2
      i13:-1 i14:0 i15:0 i16:0 i17:1 i18:1 i19:1 i21:1 i22:1 i23:0
      i24:2 i25:-2 i26:2 i27:-2 i28:1 i29:-2 i30:2 i32:2 i33:-2 i34:2
      i35:1 i36:-1 i37:0 i38:-1 i39:-1 i40:-2 i41:1 i42:-1 i43:-1
      i45:1 i46:-1 i47:1 i48:0 i51:-2 i52:-1 i53:2 i54:1
      i55:2 i56:-2 i57:2 i58:-2 i59:2 i60:-2
      i61:-1 i62:2 i63:2 i64:1 i65:-2 i66:2 i67:0
      i68:1 i69:-1 i70:2 i71:-1 i72:-2 i73:-2
      i74:1 i75:-1 i76:-1 i77:-1
      i78:0 i79:2 i80:2 i81:0 i82:2 i83:0 i84:1 i85:-1 i86:-1 i87:1 i88:0 i89:-1 i90:2 i91:-2 i92:-1 i93:-1 i94:-2 i95:-2
      i96:1 i97:1 i98:2 i99:0 i100:1 i101:0
      i102:-2 i103:0 i104:-2 i105:1 i106:0 i107:0 i108:-1 i109:-2 i110:1 i111:1 i112:-1 i113:-1 i114:-1 i115:2 i116:-2 i117:1
      i118:0 i119:-2 i120:-2 i121:-1 i122:-2
    `),
  },
  {
    id: 'distributism',
    name: 'Distributism',
    era: 'Twentieth Century',
    figure: {
      name: 'G. K. Chesterton',
      dates: '1874 – 1936',
      quote: 'Too much capitalism does not mean too many capitalists, but too few capitalists.',
      quoteSource: 'The Uses of Diversity',
    },
    glossary:
      'The problem with concentrated capital is not that property exists but that too few ' +
      'people have any. Ownership of land, tools, and shops should be spread as widely as ' +
      'possible, supported by guilds, small holdings, and the family as the basic ' +
      'economic unit — a third road that rejects both the trust and the ministry.',
    sources: ['Chesterton, The Outline of Sanity', 'Belloc, The Servile State', 'Belloc, An Essay on the Restoration of Property'],
    p: prof(`
      i01:0 i02:0 i03:1 i04:1 i05:0 i06:1 i07:1 i08:2 i09:0 i10:-2 i11:1
      i13:-1 i14:0 i15:-2 i16:0 i17:-1 i18:2 i19:1 i21:-1 i22:2 i23:1
      i24:2 i25:-1 i26:0 i27:1 i28:0 i29:0 i30:2 i32:1 i33:0 i34:2
      i35:2 i36:-2 i37:2 i38:-2 i39:1 i40:-2 i41:2 i42:-2 i43:2
      i45:2 i46:-2 i47:2 i48:-2 i51:1 i52:-2 i53:2 i54:-2
      i55:-1 i56:1 i57:0 i58:0 i59:-1 i60:0
      i61:2 i62:-2 i63:-1 i64:2 i65:1 i66:-1 i67:1
      i68:1 i69:-1 i70:1 i71:-1 i72:-1 i73:-1
      i74:2 i75:-2 i76:-1 i77:1
      i78:-1 i79:-1 i80:2 i81:0 i82:1 i83:0 i84:1 i85:1 i86:-2 i87:2 i88:2 i89:-2 i90:0 i91:-1 i92:-2 i93:-2 i94:-2 i95:-1
      i96:-1 i97:1 i98:0 i99:1 i100:2 i101:1
      i102:0 i103:-1 i104:0 i105:-1 i106:1 i107:1 i108:1 i109:0 i110:1 i111:1 i112:1 i113:-1 i114:2 i115:2 i116:-1 i117:-1
      i118:-1 i119:-2 i120:-2 i121:-1 i122:-1
    `),
  },
  {
    id: 'ordoliberalism',
    name: 'Ordoliberalism',
    era: 'Twentieth Century',
    figure: {
      name: 'Walter Eucken',
      dates: '1891 – 1950',
      quote: null,
      quoteSource: null,
    },
    glossary:
      'Markets do not maintain themselves. A strong state must write and enforce the ' +
      'framework — competition law, monetary stability, open entry — precisely so that it ' +
      'need not intervene in outcomes. Cartels and concentrated private power are as much ' +
      'a threat to the economic order as state planning is.',
    sources: ['Eucken, Foundations of Economics', 'Röpke, A Humane Economy', 'Böhm, Competition and Monopoly Struggle'],
    p: prof(`
      i01:0 i02:0 i03:1 i04:0 i05:1 i06:1 i07:1 i08:1 i09:-1 i10:-1 i11:2
      i13:-2 i14:1 i15:1 i16:0 i17:-1 i18:2 i19:1 i21:-1 i22:1 i23:-2
      i24:0 i25:1 i26:-1 i27:1 i28:-1 i29:1 i30:1 i32:0 i33:0 i34:1
      i35:1 i36:-1 i37:1 i38:-1 i39:0 i40:0 i41:0 i42:0 i43:1
      i45:0 i46:1 i47:1 i48:0 i51:2 i52:-2 i53:0 i54:0
      i55:-2 i56:2 i57:-1 i58:2 i59:-2 i60:1
      i61:-1 i62:0 i63:0 i64:-1 i65:-1 i66:-2 i67:-1
      i68:2 i69:-1 i70:1 i71:-1 i72:0 i73:-2
      i74:1 i75:-1 i76:-1 i77:2
      i78:1 i79:-2 i80:1 i81:-1 i82:2 i83:0 i84:0 i85:0 i86:-2 i87:0 i88:1 i89:-1 i90:-1 i91:0 i92:1 i93:0 i94:0 i95:0
      i96:-1 i97:-1 i98:-1 i99:2 i100:-1 i101:2
      i102:-1 i103:0 i104:1 i105:0 i106:1 i107:-1 i108:-1 i109:0 i110:-2 i111:0 i112:0 i113:0 i114:0 i115:0 i116:0 i117:2
      i118:2 i119:-1 i120:-1 i121:-1 i122:0
    `),
  },
  {
    id: 'new-deal',
    name: 'New Deal Liberalism',
    era: 'Twentieth Century',
    figure: {
      name: 'Franklin D. Roosevelt',
      dates: '1882 – 1945',
      quote: 'The test of our progress is not whether we add more to the abundance of those who have much.',
      quoteSource: 'Second Inaugural Address, 1937',
    },
    glossary:
      'Capitalism is worth saving and can only be saved by being regulated, insured, and ' +
      'counter-balanced. Expert administrative agencies manage what markets handle badly; ' +
      'organised labour is a legitimate counterweight to organised capital; and security ' +
      'against old age, unemployment, and want is a public obligation.',
    sources: ['Roosevelt, Commonwealth Club Address (1932)', 'Social Security Act (1935)', 'Berle & Means, The Modern Corporation and Private Property'],
    p: prof(`
      i01:0 i02:-1 i03:1 i04:0 i05:0 i06:1 i07:1 i08:1 i09:-2 i10:0 i11:0
      i13:0 i14:-1 i15:-2 i16:1 i17:0 i18:0 i19:2 i21:1 i22:-1 i23:0
      i24:1 i25:0 i26:-1 i27:2 i28:1 i29:1 i30:-1 i32:0 i33:1 i34:-1
      i35:-1 i36:1 i37:0 i38:1 i39:-1 i40:2 i41:-1 i42:1 i43:-1
      i45:-2 i46:2 i47:-1 i48:1 i51:2 i52:0 i53:-1 i54:2
      i55:-2 i56:2 i57:0 i58:2 i59:-2 i60:0
      i61:-1 i62:1 i63:0 i64:-2 i65:-1 i66:-2 i67:-2
      i68:-1 i69:2 i70:-1 i71:2 i72:2 i73:1
      i74:1 i75:-1 i76:-1 i77:2
      i78:0 i79:-2 i80:0 i81:-2 i82:2 i83:0 i84:1 i85:0 i86:-1 i87:2 i88:2 i89:0 i90:-1 i91:1 i92:1 i93:1 i94:0 i95:1
      i96:-1 i97:-1 i98:-2 i99:0 i100:-1 i101:0
      i102:-2 i103:0 i104:2 i105:0 i106:0 i107:-1 i108:-1 i109:0 i110:-2 i111:0 i112:1 i113:0 i114:0 i115:0 i116:1 i117:2
      i118:0 i119:1 i120:1 i121:-2 i122:0
    `),
  },
  {
    id: 'austrian',
    name: 'Austrian School',
    era: 'Twentieth Century',
    figure: {
      name: 'Friedrich Hayek',
      dates: '1899 – 1992',
      quote: 'The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.',
      quoteSource: 'The Fatal Conceit',
    },
    glossary:
      'The knowledge a society runs on is dispersed, tacit, and local, so no planner can ' +
      'assemble it; prices communicate what no one person could state. Order emerges ' +
      'from evolved rules rather than design, and the fatal conceit is imagining that ' +
      'because institutions serve us, we could have invented them.',
    sources: ['Hayek, The Road to Serfdom', 'Hayek, The Use of Knowledge in Society', 'Mises, Human Action'],
    p: prof(`
      i01:-2 i02:2 i03:-1 i04:-1 i05:2 i06:2 i07:0 i08:2 i09:0 i10:-1 i11:2
      i13:-2 i14:2 i15:2 i16:-1 i17:-2 i18:2 i19:-1 i21:-2 i22:0 i23:-2
      i24:0 i25:1 i26:-1 i27:1 i28:-2 i29:2 i30:1 i32:0 i33:0 i34:1
      i35:1 i36:0 i37:1 i38:0 i39:-1 i40:0 i41:0 i42:0 i43:1
      i45:-1 i46:2 i47:2 i48:-1 i51:2 i52:-2 i53:0 i54:1
      i55:-2 i56:2 i57:-1 i58:1 i59:-2 i60:1
      i61:0 i62:0 i63:-1 i64:1 i65:-2 i66:-1 i67:2
      i68:2 i69:-2 i70:1 i71:-1 i72:-1 i73:-2
      i74:1 i75:-1 i76:0 i77:2
      i78:2 i79:-2 i80:2 i81:0 i82:1 i83:0 i84:1 i85:1 i86:-2 i87:-2 i88:0 i89:-1 i90:-1 i91:0 i92:2 i93:0 i94:0 i95:0
      i96:-1 i97:1 i98:-1 i99:2 i100:1 i101:2
      i102:0 i103:0 i104:0 i105:0 i106:1 i107:0 i108:-1 i109:0 i110:-2 i111:0 i112:-1 i113:0 i114:1 i115:0 i116:1 i117:0
      i118:2 i119:-1 i120:-1 i121:1 i122:0
    `),
  },
  {
    id: 'anarcho-capitalism',
    name: 'Anarcho-Capitalism',
    era: 'Twentieth Century',
    figure: {
      name: 'Murray Rothbard',
      dates: '1926 – 1995',
      quote: 'The State is a gang of thieves writ large.',
      quoteSource: 'For a New Liberty',
    },
    glossary:
      'All coercive monopoly is illegitimate, including the one that calls itself ' +
      'government. Self-ownership and voluntary exchange generate the whole of just ' +
      'property; protection, adjudication, and defence are services to be bought on a ' +
      'market like any other, and taxation differs from theft only in being harder to ' +
      'escape.',
    sources: ['Rothbard, For a New Liberty', 'Rothbard, The Ethics of Liberty', 'Friedman, The Machinery of Freedom'],
    p: prof(`
      i01:-2 i02:2 i03:-2 i04:-2 i05:2 i06:2 i07:-2 i08:2 i09:-1 i10:1 i11:-1
      i13:-2 i14:2 i15:2 i16:-2 i17:-2 i18:2 i19:-2 i21:-2 i22:0 i23:-2
      i24:0 i25:1 i26:-1 i27:1 i28:-2 i29:2 i30:0 i32:1 i33:0 i34:0
      i35:1 i36:-1 i37:2 i38:0 i39:-2 i40:0 i41:0 i42:0 i43:2
      i45:0 i46:1 i47:-1 i48:1 i51:-1 i52:1 i53:0 i54:1
      i55:1 i56:-1 i57:1 i58:-1 i59:1 i60:-1
      i61:0 i62:-1 i63:1 i64:1 i65:-2 i66:-1 i67:2
      i68:1 i69:-1 i70:1 i71:-1 i72:-1 i73:-1
      i74:2 i75:-2 i76:-2 i77:2
      i78:2 i79:1 i80:0 i81:0 i82:-2 i83:0 i84:1 i85:2 i86:-2 i87:-2 i88:0 i89:-2 i90:-1 i91:1 i92:2 i93:1 i94:1 i95:1
      i96:-1 i97:0 i98:-1 i99:2 i100:1 i101:2
      i102:1 i103:0 i104:-1 i105:0 i106:2 i107:0 i108:0 i109:0 i110:-1 i111:-1 i112:-1 i113:0 i114:1 i115:0 i116:2 i117:0
      i118:2 i119:0 i120:0 i121:2 i122:-1
    `),
  },
  {
    id: 'objectivism',
    name: 'Objectivism',
    era: 'Twentieth Century',
    figure: {
      name: 'Ayn Rand',
      dates: '1905 – 1982',
      quote: 'Man’s rights can be violated only by the use of physical force.',
      quoteSource: 'The Virtue of Selfishness',
    },
    glossary:
      'Reality is objective, reason is the only means of knowing it, and the proper moral ' +
      'purpose of a life is one’s own rational happiness. Altruism is a demand that the ' +
      'competent live for the incompetent; the only social system consistent with human ' +
      'nature is unregulated capitalism, with the state confined to answering force with ' +
      'force.',
    sources: ['Rand, Atlas Shrugged', 'Rand, The Virtue of Selfishness', 'Rand, Capitalism: The Unknown Ideal'],
    p: prof(`
      i01:-2 i02:2 i03:-2 i04:-2 i05:2 i06:1 i07:-2 i08:2 i09:-2 i10:-1 i11:1
      i13:-2 i14:2 i15:2 i16:-1 i17:-2 i18:2 i19:-2 i21:-2 i22:-1 i23:-2
      i24:-1 i25:2 i26:-2 i27:2 i28:-2 i29:2 i30:-1 i32:0 i33:1 i34:-2
      i35:2 i36:-2 i37:2 i38:1 i39:-2 i40:0 i41:-1 i42:1 i43:1
      i45:-1 i46:2 i47:-2 i48:2 i51:0 i52:2 i53:1 i54:2
      i55:-1 i56:1 i57:0 i58:0 i59:-1 i60:0
      i61:-2 i62:1 i63:2 i64:-2 i65:-2 i66:0 i67:-1
      i68:1 i69:-1 i70:1 i71:-1 i72:-2 i73:-1
      i74:2 i75:-2 i76:-2 i77:2
      i78:2 i79:0 i80:-2 i81:-2 i82:0 i83:-1 i84:1 i85:0 i86:-2 i87:-2 i88:-1 i89:-2 i90:-2 i91:1 i92:1 i93:1 i94:1 i95:1
      i96:-1 i97:-2 i98:-2 i99:2 i100:-1 i101:2
      i102:-1 i103:0 i104:-1 i105:0 i106:2 i107:-1 i108:-2 i109:0 i110:-2 i111:-2 i112:-2 i113:-1 i114:-1 i115:-1 i116:2 i117:1
      i118:2 i119:1 i120:2 i121:2 i122:0
    `),
  },
];
