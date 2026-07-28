# Politeia

*πολιτεία — regime.*

This is a tool for finding your ideology and values among the Western political tradition.
The website: https://cisalpiner.github.io/politeia/

**Status: 0.5.0.** Currently, there're two tests: a **long form** (116 items, 91 individual traditions) and a **short form** (36 items, 16 tradition families). 17 dyads (conflicts between positions).
Take a look at [`docs/METHOD.md`](docs/METHOD.md) for the methodology: the axes, arithmetic, and every neutrality check with criteria.

---

## The special thing about it

Every comparable instrument, be it the Political Compass, 8values, SapplyValues, 9axes just share
three design decisions, and it's *those* decisions that make them pretty boring, pretty cookie-cutter, pretty silly. The Likert
agreement on isolated propositions, and the same axes arbitrarily declared by the author and then filled with
items written to match, and a coordinate as output. To be fair, we do something a little similar, keeping the familiar input, and putting the innovation in the scoring and presentation.

- **Conflicts.** There are dyads that detect positions that go against each other
  and put them back to you Socratically.
- **Admixture.** Your answers are expressed as a mixture of traditions via constrained
  non-negative least squares, the way population genetics expresses ancestry.
- **Acquiescence correction.** Yea-saying is measured from hidden opposed pairs and
  subtracted before anything is scored. That way, if you're constantly saying yes to everything, it's corrected to allow more precision with subideologies.
- **"No view" ≠ "Neutral."** No view is treated as missing data, not as a zero.

## Privacy

Obviously, this is a Github site; we don't call any pictures or custom fonts; nothing like that. Therefore, none of your info leaves your browser browser. No server, no accounts, no analytics, no third-party
requests. The final results are shoved into the URL. Share that to share your results.

## Scope

As is, we currently only have the Western tradition, from classical antiquity to the present. Political positions are included on the strength of their influence, not their respectability, and each is
stated as its own adherents would state it. Adding non-western ideologies would likely lead it to stray away from abstraction and more toward real events in real life, references to particular systems, etc., which is not the goal.


## Licence

There are two licences, check the repo for more info.
