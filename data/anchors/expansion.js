// POLITEIA — roster expansion (28 anchors)
//
// These are declared as DERIVATIONS: a parent anchor plus the specific items on which
// the doctrine departs from it. `d` is a set of absolute overrides, not offsets.
//
// This is not a shortcut. Writing "Trotskyism is Leninism except on permanent
// revolution, national particularism, and the bureaucracy" states a doctrinal claim
// that a reader can check, where 111 loose integers state nothing and hide errors.
// Every override is a claim about where two traditions actually part company, and the
// recovery test will fail loudly if the claimed differences do not separate them.
//
// A derived anchor is a first-class anchor once resolved. Nothing downstream can tell.

export const EXPANSION = [
  // ---------------------------------------------------------------- antiquity
  {
    id: 'epicurean',
    name: 'Epicurean Quietism',
    era: 'Classical',
    basedOn: 'stoic',
    figure: { name: 'Epicurus', dates: '341 – 270 BC', quote: 'Live unnoticed.', quoteSource: 'Fragment 551' },
    glossary:
      'Public life is a source of anxiety rather than fulfilment, and the wise withdraw ' +
      'from it into friendship and modest sufficiency. Justice is a contract of mutual ' +
      'advantage with no cosmic backing, the gods take no interest in us, and the aim of ' +
      'a life is tranquillity rather than honour or power.',
    sources: ['Epicurus, Letter to Menoeceus', 'Epicurus, Principal Doctrines', 'Lucretius, De Rerum Natura'],
    d: { i102: 2, i35: -1, i41: -2, i42: 2, i34: -2, i43: -1, i74: -1, i37: -1, i92: 2,
         i40: 2, i03: -2, i55: -2, i57: -2, i59: -2, i63: -2, i07: -1, i111: -2,
         i112: -1, i113: -1, i96: -2, i80: -1 },
  },
  {
    id: 'caesaropapism',
    name: 'Caesaropapism',
    era: 'Medieval',
    basedOn: 'divine-right',
    figure: { name: 'Justinian I', dates: '482 – 565', quote: null, quoteSource: null },
    glossary:
      'The emperor is the head of the Christian people in both its earthly and its ' +
      'spiritual affairs, convoking councils and appointing bishops. Religion is the ' +
      'cement of the polity and therefore the ruler’s charge — the exact inversion of a ' +
      'church claiming authority over kings.',
    sources: ['Justinian, Codex Justinianus', 'Eusebius, Life of Constantine', 'Photios, Epanagoge (contra)'],
    d: { i09: -1, i84: 2, i117: 2, i22: -1, i21: 1, i62: 2, i63: 1, i37: -2, i112: -2, i47: 0, i100: -2, i105: 2, i39: 1, i37: -1, i111: 1, i112: -1, i07: 2, i117: 1 },
  },

  // ---------------------------------------------------------------- early modern
  {
    id: 'reformed-resistance',
    name: 'Reformed Resistance Theory',
    era: 'Early Modern',
    basedOn: 'lockean',
    figure: { name: 'Theodore Beza', dates: '1519 – 1605', quote: null, quoteSource: null },
    glossary:
      'A ruler holds power under a covenant with God and with the people, and a ruler ' +
      'who breaks it may be resisted — not by private persons, but by the lesser ' +
      'magistrates whose own office comes from the same source. Tyrannicide becomes a ' +
      'duty of office rather than an act of rebellion.',
    sources: ['Beza, Du droit des magistrats', 'Vindiciae contra tyrannos (1579)', 'Knox, Appellation'],
    d: { i35: 2, i36: -2, i37: 2, i39: 1, i41: 2, i42: -2, i111: 2, i07: 1, i59: 2,
         i57: 1, i68: 2, i69: -2, i74: 2, i75: -2, i47: 1, i45: 1, i105: -1, i96: 0, i43: 2 },
  },
  {
    id: 'levellers',
    name: 'Levellerism',
    era: 'Early Modern',
    basedOn: 'lockean',
    figure: { name: 'John Lilburne', dates: '1614 – 1657', quote: null, quoteSource: null },
    glossary:
      'The poorest man alive has a life to live and therefore a voice in the government ' +
      'he lives under. Authority derives from a written agreement of the people, ' +
      'franchise should extend far beyond property, and inherited privilege in law, ' +
      'church, and trade is simply usurpation.',
    sources: ['An Agreement of the People (1647)', 'The Putney Debates', 'Lilburne, England’s Birth-Right Justified'],
    d: { i61: 2, i62: -2, i65: 2, i100: 2, i64: 2, i16: 1, i19: 1, i15: -1, i57: 2,
         i55: 1, i59: 1, i104: 1, i35: 1, i111: 1, i39: -1, i63: -1, i09: -2, i29: 2 },
  },
  {
    id: 'harringtonian',
    name: 'Harringtonian Commonwealth',
    era: 'Early Modern',
    basedOn: 'ciceronian',
    figure: { name: 'James Harrington', dates: '1611 – 1677', quote: null, quoteSource: null },
    glossary:
      'Political power follows the distribution of landed property, so a constitution ' +
      'that does not match the balance of ownership will not hold. A stable commonwealth ' +
      'therefore requires an agrarian law capping estates, rotation of office, secret ' +
      'ballot, and a senate that proposes while the people resolve.',
    sources: ['Harrington, The Commonwealth of Oceana', 'Harrington, A System of Politics'],
    d: { i22: 2, i15: -1, i16: 1, i09: -1, i11: 2, i61: 1, i02: 1, i39: -1, i117: 1,
         i106: 1, i63: -1, i101: 0, i86: -1 },
  },
  {
    id: 'physiocracy',
    name: 'Physiocracy',
    era: 'Early Modern',
    basedOn: 'scottish',
    figure: { name: 'François Quesnay', dates: '1694 – 1774', quote: null, quoteSource: null },
    glossary:
      'Land alone produces a genuine surplus; manufacture and trade merely rearrange it. ' +
      'The natural order governing economic life is discoverable and absolute, so the ' +
      'right regime is a legal despotism enlightened enough to see that order and leave ' +
      'commerce alone — authority in politics, laissez-faire in the economy.',
    sources: ['Quesnay, Tableau Économique', 'Mercier de la Rivière, L’ordre naturel', 'Turgot, Reflections on the Formation of Wealth'],
    d: { i01: 2, i02: -2, i03: 2, i09: 1, i10: 1, i11: -2, i115: 2, i22: 1, i35: 2,
         i41: 2, i37: 2, i74: 2, i62: 2, i61: -2, i105: 1, i117: 1, i21: -2, i99: 2, i100: -2 },
  },

  // ---------------------------------------------------------------- nineteenth century
  {
    id: 'tory-radicalism',
    name: 'Tory Radicalism',
    era: 'Nineteenth Century',
    basedOn: 'burkean',
    figure: { name: 'Benjamin Disraeli', dates: '1804 – 1881', quote: 'Two nations, between whom there is no intercourse and no sympathy.', quoteSource: 'Sybil, or The Two Nations' },
    glossary:
      'An aristocracy that has abandoned its duties has forfeited its claim, and the ' +
      'remedy for industrial misery is not the market but the old alliance of throne, ' +
      'altar, and cottage against the mill owner. Factory acts and an extended franchise ' +
      'are conservative measures, binding one nation where liberalism made two.',
    sources: ['Disraeli, Sybil', 'Disraeli, Coningsby', 'Oastler, Yorkshire Slavery letters'],
    d: { i19: 2, i15: -1, i87: 2, i88: 2, i112: 1, i21: 1, i110: 1, i115: 2, i64: 2,
         i61: 1, i100: 1, i84: 1, i16: 0, i99: -1 },
  },
  {
    id: 'saint-simonian',
    name: 'Saint-Simonian Technocracy',
    era: 'Nineteenth Century',
    basedOn: 'fabian',
    figure: { name: 'Henri de Saint-Simon', dates: '1760 – 1825', quote: null, quoteSource: null },
    glossary:
      'The government of men should give way to the administration of things. Society is ' +
      'properly directed by those who actually produce — engineers, bankers, industrialists, ' +
      'scientists — organising production on a plan, with idle proprietors and lawyers ' +
      'displaced and a new religion of industry supplying the moral cement.',
    sources: ['Saint-Simon, Du système industriel', 'Saint-Simon, Nouveau Christianisme', 'Bazard & Enfantin, Doctrine de Saint-Simon'],
    d: { i13: -1, i23: -2, i86: -1, i19: -1, i16: -1, i15: 1, i101: 2, i09: 1, i11: -2, i65: -2, i67: -2, i114: -2, i03: 2, i61: -2, i62: 2, i63: 2, i100: -2, i106: -2, i117: 2, i54: 2, i46: 2,
         i45: -2, i41: 1, i112: 1, i01: 1, i10: 1, i84: 2, i107: -2, i108: -2, i113: 1, i35: 0 },
  },
  {
    id: 'owenite',
    name: 'Owenite Cooperativism',
    era: 'Nineteenth Century',
    basedOn: 'anarcho-communism',
    figure: { name: 'Robert Owen', dates: '1771 – 1858', quote: null, quoteSource: null },
    glossary:
      'Character is formed by circumstance, so improve the circumstances and you improve ' +
      'the person. The remedy is neither insurrection nor the ballot but building the new ' +
      'society directly — cooperative villages, shared stores, schools, and humane ' +
      'factories that demonstrate by example what competition denies.',
    sources: ['Owen, A New View of Society', 'Owen, Report to the County of Lanark', 'Owen, The Book of the New Moral World'],
    d: { i55: -2, i56: 2, i57: -2, i59: -2, i104: 1, i63: -1, i114: 2, i39: -2, i69: 2,
         i72: 2, i46: 2, i45: -2, i54: 1, i82: -1, i35: -1, i80: -2 },
  },
  {
    id: 'blanquism',
    name: 'Blanquism',
    era: 'Nineteenth Century',
    basedOn: 'leninist',
    figure: { name: 'Louis Auguste Blanqui', dates: '1805 – 1881', quote: null, quoteSource: null },
    glossary:
      'Power is taken by a small, disciplined, conspiratorial body acting when the moment ' +
      'comes, not by a class educated into readiness. A temporary dictatorship then ' +
      'clears away the old order — priests above all — and only afterwards is the ' +
      'question of what the people want worth asking.',
    sources: ['Blanqui, Instructions pour une prise d’armes', 'Blanqui, Critique sociale'],
    d: { i72: -1, i73: -1, i35: -2, i92: 1, i62: 2, i100: -2, i03: 2, i08: -2, i11: -2, i117: -1, i21: 1, i80: -2, i74: -1, i63: 2, i57: 2, i59: 2, i103: 0, i61: -2, i104: -2, i82: 2, i39: -2, i55: 2,
         i58: -2, i84: 1, i13: 2, i86: 1, i117: 0 },
  },
  {
    id: 'individualist-anarchism',
    name: 'Individualist Anarchism',
    era: 'Nineteenth Century',
    basedOn: 'mutualism',
    figure: { name: 'Benjamin Tucker', dates: '1854 – 1939', quote: null, quoteSource: null },
    glossary:
      'Equal liberty is the whole of the law: each may do as they like so long as they ' +
      'do not invade the equal liberty of another. The state is the chief invader, its ' +
      'four monopolies — money, land, tariffs, patents — being what actually produces ' +
      'exploitation. Remove them and competition itself dissolves privilege.',
    sources: ['Tucker, Instead of a Book', 'Spooner, No Treason', 'Warren, Equitable Commerce'],
    d: { i35: 1, i37: 2, i43: 1, i74: 1, i14: 2, i18: 2, i99: 2, i101: 1, i29: 2,
         i28: -2, i05: 2, i08: 2, i78: 2, i13: -1, i23: -2, i02: 2, i86: -2 },
  },
  {
    id: 'christian-socialism',
    name: 'Christian Socialism',
    era: 'Nineteenth Century',
    basedOn: 'social-catholic',
    figure: { name: 'F. D. Maurice', dates: '1805 – 1872', quote: null, quoteSource: null },
    glossary:
      'Competition is not merely harsh but a lie about what human beings are, since ' +
      'people are made for fellowship. The kingdom of God is a present social fact to be ' +
      'realised through cooperative production and the education of working men, not a ' +
      'consolation offered to them for their condition.',
    sources: ['Maurice, The Kingdom of Christ', 'Kingsley, Alton Locke', 'Ludlow, Christian Socialism and Its Opponents'],
    d: { i39: -1, i112: 2, i13: 1, i21: 1, i104: 2, i23: 1, i88: 2, i87: 2, i46: 1,
         i45: -1, i47: -1, i111: 0, i63: -1, i61: 1, i105: 0, i17: 1 },
  },
  {
    id: 'proslavery',
    name: 'Pro-Slavery Reaction',
    era: 'Nineteenth Century',
    basedOn: 'feudal',
    figure: { name: 'George Fitzhugh', dates: '1806 – 1881', quote: null, quoteSource: null },
    glossary:
      'Free society is a failure: the wage labourer is abandoned when sick or old, while ' +
      'the bondsman is fed, housed, and kept for life. Hierarchy is natural rather than ' +
      'contractual, some people are fit only to be governed, and the master’s obligation ' +
      'is the humane alternative to the cash nexus.',
    sources: ['Fitzhugh, Cannibals All!', 'Fitzhugh, Sociology for the South', 'Calhoun, A Disquisition on Government'],
    note:
      'Included on influence, not respectability. This doctrine dominated the political ' +
      'thought of half a country for decades and shaped the largest war in its history; ' +
      'a map of the Western tradition that omitted it would be a flattering fiction. Its ' +
      'anti-capitalist argument is what makes it distinct from mere hierarchy, and that ' +
      'argument is stated as its adherents stated it.',
    d: { i99: -2, i101: -2, i86: -1, i17: 1, i78: -2, i106: 1, i100: 1, i61: 1, i64: 2, i27: -2, i94: -2, i95: -2, i116: -2, i32: 2, i110: 2, i15: -1, i99: -1, i101: -1, i18: 1, i90: 2, i98: 2, i29: -2, i25: -2,
         i70: 2, i71: -2, i68: 2, i16: -2, i19: 1, i87: 2, i115: 2, i46: -2, i45: 2,
         i84: 1, i104: -2, i13: -1 },
  },
  {
    id: 'zionism',
    name: 'Zionism',
    era: 'Nineteenth Century',
    basedOn: 'romantic-nationalism',
    figure: { name: 'Theodor Herzl', dates: '1860 – 1904', quote: 'If you will it, it is no dream.', quoteSource: 'Altneuland' },
    glossary:
      'A people dispersed among others and dependent on their tolerance cannot be secure ' +
      'by assimilation, however complete, because the hostility it meets is a condition ' +
      'of dispersion rather than of conduct. Only sovereignty in a territory of its own ' +
      'makes a scattered nation the author of its own fate.',
    sources: ['Herzl, Der Judenstaat', 'Pinsker, Auto-Emancipation', 'Ahad Ha’am, Selected Essays'],
    d: { i02: 1, i11: 1, i13: 1, i21: 1, i83: 2, i86: 1, i23: 1, i114: 1, i117: 2, i54: 2, i46: 2, i92: 1, i80: -1, i61: 1, i16: 1, i109: 2, i32: 2, i24: 2, i26: 1, i27: 0, i111: 1, i22: 1, i57: 2, i55: 1,
         i63: 1, i46: 1, i45: -1, i54: 1, i104: 1, i98: 0, i39: 0, i35: 0 },
  },

  // ---------------------------------------------------------------- twentieth century
  {
    id: 'social-democracy',
    name: 'Social Democracy',
    era: 'Twentieth Century',
    basedOn: 'fabian',
    figure: { name: 'Eduard Bernstein', dates: '1850 – 1932', quote: 'The movement is everything, the final goal nothing.', quoteSource: 'Evolutionary Socialism' },
    glossary:
      'Capitalism did not collapse as predicted, and the working class has won real gains ' +
      'through unions, the vote, and legislation. Socialism is therefore an ongoing ' +
      'democratic achievement rather than a rupture to be waited for, and a movement that ' +
      'improves lives now needs no apology for postponing the final goal.',
    sources: ['Bernstein, Evolutionary Socialism', 'Bad Godesberg Programme (1959)', 'Crosland, The Future of Socialism'],
    d: { i104: 2, i55: -2, i57: -1, i58: 2, i13: 0, i21: 1, i86: 0, i61: 1, i62: -1,
         i100: 1, i88: 2, i87: 2, i19: 2, i15: -2, i02: 1, i65: 1, i63: -2, i103: 0, i84: 0 },
  },
  {
    id: 'trotskyism',
    name: 'Trotskyism',
    era: 'Twentieth Century',
    basedOn: 'leninist',
    figure: { name: 'Leon Trotsky', dates: '1879 – 1940', quote: null, quoteSource: null },
    glossary:
      'The revolution cannot stop at national borders or at a bourgeois stage; it is ' +
      'permanent, or it decays. A workers’ state isolated in one country breeds a ' +
      'privileged bureaucracy that defends its own position while speaking the language ' +
      'of the class it has displaced.',
    sources: ['Trotsky, The Permanent Revolution', 'Trotsky, The Revolution Betrayed', 'Trotsky, The Transitional Programme'],
    d: { i103: 2, i24: -2, i32: -2, i84: 2, i61: 1, i62: 0, i25: 2, i57: 2, i100: 1, i54: 0 },
  },
  {
    id: 'maoism',
    name: 'Maoism',
    era: 'Twentieth Century',
    basedOn: 'leninist',
    figure: { name: 'Mao Zedong', dates: '1893 – 1976', quote: null, quoteSource: null },
    glossary:
      'The revolutionary subject is the peasantry, not an industrial proletariat that ' +
      'barely exists, and the countryside surrounds the cities. Leadership comes from the ' +
      'masses and returns to them, and the party itself must be periodically overturned ' +
      'from below or it will harden into a new bureaucratic class.',
    sources: ['Mao, On New Democracy', 'Mao, On Contradiction', 'Mao, Quotations from Chairman Mao'],
    d: { i64: 2, i61: 1, i100: 2, i24: 1, i32: 0, i115: 1, i57: 2, i55: 2, i47: -2,
         i48: 2, i63: 2, i84: -2, i72: 2, i71: 2, i107: -1, i103: 0, i59: 2 },
  },
  {
    id: 'guild-socialism',
    name: 'Guild Socialism',
    era: 'Twentieth Century',
    basedOn: 'syndicalism',
    figure: { name: 'G. D. H. Cole', dates: '1889 – 1959', quote: null, quoteSource: null },
    glossary:
      'People should be represented as producers as well as citizens, so industry belongs ' +
      'to self-governing guilds of those who work in it while the state represents them ' +
      'as consumers. Neither the wage system nor a nationalised bureaucracy gives workers ' +
      'control of the work itself, which is the point.',
    sources: ['Cole, Guild Socialism Restated', 'Cole, Self-Government in Industry', 'Penty, The Restoration of the Gild System'],
    d: { i55: -1, i56: 1, i59: -2, i104: 1, i83: 2, i82: 1, i11: 2, i22: 1, i88: 2,
         i63: -1, i57: 0, i114: 1, i86: 1, i45: 1, i47: 1, i65: 1 },
  },
  {
    id: 'christian-democracy',
    name: 'Christian Democracy',
    era: 'Twentieth Century',
    basedOn: 'social-catholic',
    figure: { name: 'Alcide De Gasperi', dates: '1881 – 1954', quote: null, quoteSource: null },
    glossary:
      'Christian social principles are best realised through constitutional democracy ' +
      'rather than against it. The social market, the family as the primary society, ' +
      'subsidiarity between levels of government, and European reconciliation follow from ' +
      'the same commitment — a confessional inheritance without a confessional state.',
    sources: ['De Gasperi, Speeches on European Union', 'Maritain, Integral Humanism', 'Adenauer, Memoirs'],
    d: { i104: 2, i11: 2, i02: 1, i39: -1, i61: 1, i65: 1, i58: 2, i55: -2, i19: 2,
         i87: 2, i88: 2, i22: 2, i117: 1, i25: 1, i27: 2, i32: -1, i105: 0, i95: 1 },
  },
  {
    id: 'liberation-theology',
    name: 'Liberation Theology',
    era: 'Twentieth Century',
    basedOn: 'social-catholic',
    figure: { name: 'Gustavo Gutiérrez', dates: '1928 – 2024', quote: null, quoteSource: null },
    glossary:
      'God is not neutral between the poor and those who impoverish them, and salvation ' +
      'is worked out in history rather than apart from it. Sin is structural before it is ' +
      'personal, so faith requires taking a side in political conflict and reading ' +
      'scripture from below.',
    sources: ['Gutiérrez, A Theology of Liberation', 'Boff, Church: Charism and Power', 'Medellín Conference documents (1968)'],
    d: { i112: 2, i13: 1, i17: 1, i21: 1, i23: 1, i15: -2, i28: 2, i57: 2, i55: 1,
         i59: 1, i104: 0, i62: -1, i61: 2, i100: 2, i47: -2, i45: -1, i46: 1, i84: 1,
         i86: 1, i72: 1, i69: 1, i71: 1, i39: -1 },
  },
  {
    id: 'authoritarian-corporatism',
    name: 'Authoritarian Corporatism',
    era: 'Twentieth Century',
    basedOn: 'italian-fascism',
    figure: { name: 'António de Oliveira Salazar', dates: '1889 – 1970', quote: null, quoteSource: null },
    glossary:
      'Society is composed of natural bodies — family, parish, guild, region — not of ' +
      'atomised voters, and the state should represent those bodies rather than parties. ' +
      'Order, religion, and the countryside are to be conserved rather than mobilised; ' +
      'this is a doctrine of quiet, not of struggle.',
    sources: ['Salazar, Doctrine and Action', 'Portuguese Constitution of 1933', 'Dollfuss, Trabrennplatz speech (1933)'],
    note: 'Separated from Italian Fascism chiefly by i35/i39/i41 (religious grounding), i55/i57 (not revolutionary), and i66/i89.',
    d: { i39: 2, i35: 2, i37: 2, i41: 2, i111: 1, i105: -1, i55: -1, i57: -1, i59: 0,
         i66: -1, i89: 0, i45: 2, i47: 2, i22: 2, i88: 1, i87: 1, i63: 0, i53: 1, i90: -1, i98: -1 },
  },
  {
    id: 'public-choice',
    name: 'Public Choice',
    era: 'Twentieth Century',
    basedOn: 'austrian',
    figure: { name: 'James M. Buchanan', dates: '1919 – 2013', quote: 'Politics without romance.', quoteSource: 'The Public Choice Perspective' },
    glossary:
      'Voters, bureaucrats, and legislators are the same self-interested creatures as ' +
      'buyers and sellers, and no analysis that assumes otherwise is worth having. ' +
      'Concentrated benefits and dispersed costs explain most of what government does, so ' +
      'the remedy is constitutional rules constraining what any majority may enact.',
    sources: ['Buchanan & Tullock, The Calculus of Consent', 'Buchanan, The Limits of Liberty', 'Olson, The Logic of Collective Action'],
    d: { i106: 2, i117: 2, i84: 2, i61: -1, i62: 1, i100: -1, i11: 2, i03: -1, i65: -1,
         i35: 0, i41: 0, i43: 0, i80: -1 },
  },
  {
    id: 'third-way',
    name: 'Third Way',
    era: 'Twentieth Century',
    basedOn: 'new-deal',
    figure: { name: 'Anthony Giddens', dates: 'b. 1938', quote: null, quoteSource: null },
    glossary:
      'The old division between state and market has been overtaken by globalisation and ' +
      'individualisation. Government should invest in people’s capacity to compete — ' +
      'education, employability, opportunity — rather than protect them from competition, ' +
      'and pair rights with responsibilities.',
    sources: ['Giddens, The Third Way', 'Blair & Schröder, Europe: The Third Way', 'Clinton, New Covenant speeches'],
    d: { i15: 1, i99: 2, i101: 2, i86: -2, i21: -1, i14: 1, i18: 2, i54: 2, i117: 2,
         i104: 1, i13: -2, i23: -2, i45: -2, i46: 2, i84: 1, i25: 2, i27: 2, i19: 1 },
  },

  // ---------------------------------------------------------------- contemporary
  {
    id: 'communalism',
    name: 'Communalism',
    era: 'Contemporary',
    basedOn: 'anarcho-communism',
    figure: { name: 'Murray Bookchin', dates: '1921 – 2006', quote: null, quoteSource: null },
    glossary:
      'Ecological crisis follows from hierarchy among humans before it follows from ' +
      'technology. The answer is direct democracy in face-to-face municipal assemblies, ' +
      'confederated outward and taking over the economy — neither a market, nor a state, ' +
      'nor the lifestyle retreat that mistakes personal purity for politics.',
    sources: ['Bookchin, The Ecology of Freedom', 'Bookchin, Urbanization Without Cities', 'Bookchin, Social Anarchism or Lifestyle Anarchism'],
    d: { i117: 1, i03: -2, i72: 1, i43: 1, i74: 1, i75: -1, i76: -1, i77: 1, i67: -1, i84: 1, i113: 1, i115: 1, i30: 1, i80: -2, i114: 2, i82: 1, i83: -1, i61: 2, i65: 2, i108: 2, i34: 1, i30: 1, i22: 1,
         i55: 1, i57: 2, i107: 0, i86: 1, i117: 1 },
  },
  {
    id: 'anarcho-primitivism',
    name: 'Anarcho-Primitivism',
    era: 'Contemporary',
    basedOn: 'anarcho-communism',
    figure: { name: 'John Zerzan', dates: 'b. 1943', quote: null, quoteSource: null },
    glossary:
      'Domestication is the original catastrophe. Agriculture, division of labour, ' +
      'symbolic culture, and industry are not neutral tools that fell into the wrong ' +
      'hands but the machinery of domination itself, and no rearrangement of ownership ' +
      'touches them. What is wanted is not a better civilisation but none.',
    sources: ['Zerzan, Elements of Refusal', 'Zerzan, Running on Emptiness', 'Perlman, Against His-Story, Against Leviathan!'],
    d: { i107: 2, i108: 2, i54: -2, i46: -2, i45: 2, i47: 1, i13: 0, i21: -2, i83: -2,
         i86: -2, i23: 0, i35: 1, i41: 1, i71: -1, i113: -2, i117: -2, i63: 1, i55: 2, i72: 0 },
  },
  {
    id: 'degrowth',
    name: 'Degrowth',
    era: 'Contemporary',
    basedOn: 'deep-ecology',
    figure: { name: 'Serge Latouche', dates: 'b. 1940', quote: null, quoteSource: null },
    glossary:
      'Endless growth on a finite planet is arithmetic, not ideology, and "sustainable ' +
      'growth" is a contradiction dressed as a compromise. A deliberate, democratic ' +
      'contraction of throughput in rich countries — with work shared, needs met, and ' +
      'sufficiency chosen — is preferable to the collapse that otherwise arrives.',
    sources: ['Latouche, Farewell to Growth', 'Illich, Tools for Conviviality', 'Hickel, Less Is More'],
    d: { i35: -1, i41: -1, i42: 1, i66: -2, i92: 1, i84: 1, i100: 1, i65: 2, i61: 2, i88: 2, i87: 2, i104: 2, i53: 0, i108: 2, i107: 1, i13: 1, i21: 2, i23: 1, i19: 2, i15: -2, i86: 1, i113: -1,
         i114: 2, i104: 1, i25: 1, i28: 1, i72: 2, i69: 2, i117: 1, i46: -1 },
  },
  {
    id: 'christian-nationalism',
    name: 'Christian Nationalism',
    era: 'Contemporary',
    basedOn: 'natcon',
    figure: { name: null, dates: null, quote: null, quoteSource: null },
    glossary:
      'This nation was founded as a Christian one and prospers or fails according to its ' +
      'fidelity to that covenant. Public life, law, and schooling should reflect it ' +
      'openly rather than pretend a neutrality nobody practises, and the people — not a ' +
      'clerical or academic elite — are the covenant’s keepers.',
    sources: ['Wolfe, The Case for Christian Nationalism', 'Rushdoony, The Institutes of Biblical Law', 'Perry & Whitehead, Taking America Back for God (critical)'],
    note:
      'Distinguished from Integralism by i111 and i105: a covenant with THIS nation and a ' +
      'church that does not stand above the ruler, where Integralism holds a universal ' +
      'church to which the temporal power is subordinate. No emblematic figure is named ' +
      'because the doctrine is genuinely diffuse and living, and picking one would be an ' +
      'editorial claim about who speaks for it.',
    d: { i07: 2, i34: 2, i47: 2, i53: 2, i80: 2, i96: 1, i97: 1, i113: -2, i71: -2, i72: -2, i119: -2, i120: -2, i102: -2, i92: -2, i38: -2, i37: 2, i43: 2, i41: 2, i74: 2, i75: -2, i36: -2, i38: -2, i42: -2, i40: -2, i112: -1, i19: -1, i15: 1, i99: 1, i101: 2, i111: 2, i39: 2, i35: 2, i37: 2, i105: 1, i112: 0, i98: 1, i90: 1, i24: 2,
         i32: 2, i61: 2, i100: 2, i64: 2, i84: 2, i92: -2, i117: -1, i03: 2 },
  },
  {
    id: 'longtermism',
    name: 'Longtermism',
    era: 'Contemporary',
    basedOn: 'benthamite',
    figure: { name: 'Derek Parfit', dates: '1942 – 2017', quote: null, quoteSource: null },
    glossary:
      'The overwhelming majority of people who will ever live have not been born, and ' +
      'nothing about when someone exists makes their wellbeing count for less. Reducing ' +
      'risks that could end or permanently curtail humanity therefore dominates every ' +
      'other consideration, however remote such risks appear.',
    sources: ['Parfit, Reasons and Persons', 'Ord, The Precipice', 'MacAskill, What We Owe the Future'],
    d: { i107: -2, i108: -2, i46: 2, i54: 2, i06: 1, i11: 1, i92: 1, i80: -2, i116: 1, i29: 1, i28: -1, i86: -1, i21: -1, i15: 1, i99: 1, i113: 2, i54: 2, i46: 2, i45: -2, i25: 2, i24: -2, i94: 2, i95: 2, i34: 1,
         i03: 1, i62: 1, i100: -2, i84: 1, i117: 2, i43: -1, i74: 1, i71: 2, i35: -1 },
  },
];
