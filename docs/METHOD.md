# Politeia — Method

P.S: the math is ALL done by our good friend Claude--i'm dogshit at math

Any political compass that hides its own workings can be claimed to be biased with no response. So, everything
below: the axes, the arithmetic, the checks, and their current pass state, etc. is open to
inspection, and the item bank and ideological/anchor matrix are in the repository as plain data
files that anyone can read and argue with.

**Current version:** 0.5.0. Long form 116 items / 91 traditions; short form 36 items /
16 families. 17 dyads. Recovery passes
63/63.

---

## 1. The compass' claims

That a respondent's answer pattern can be located relative to a set of documented
positions in the Western political tradition, and that some of their commitments can be
shown to pull against each other.

## 2. What it does not claim

- **Not a diagnosis.** No result is a blatant statement about who anyone is.
- **Not a measurement of agreement.** A mixture coefficient is not "how much you agree
  with X." See §6.
- **Not predictive** of how anyone votes, argues, or behaves.
- **Not comprehensive.** It maps the Western tradition only. Confucian, Islamic, Hindu,
  African, and indigenous political thought are out of the scope, since this test is largely based upon principles and not specifics.
- **Not inherently neutral.** Neutrality here is a set of checks with numeric pass
  criteria (§8), not a promise. The checks can be run by anyone. 

---

## 3. Items

There are 116 statements, five-point agreement, plus a separate *no view* control.

**Authoring rules.** All four are machine-checkable or countable:

1. **No item names an ideology, thinker, party, or movement.** An item containing the
   word "capitalism" is just bound to dumb tribalism & buzzword sensitivity rather than actual belief. This will be the single
   most effective neutrality rule in the instrument, and `tools/audit.mjs` will enforce it against a list of banned words, like -isms.
2. **Plain language.** A respondent who has read no political theory must be able to
   answer every item honestly, likewise, an expert in politics should be able to. 
3. **Written from inside.** Every item is stated as the position's own adherents would
   state it. No position appears in its opponents' language.
4. **Polarity balance.** Roughly half of each axis's items load negatively, so that
   "agree" never trends consistently toward one pole.

**Order** is randomised per respondent, subject to the constraint that mirror partners
and the halves of a tension dyad never appear in the same block of five.

### 3.1 "No view" is not "Neutral"

*Neutral* means the respondent weighed both sides and landed in the middle. *No view*
means there is no data. These are different facts and the instrument treats them
differently: no-view items are excluded from the numerator **and** the denominator of
every axis they load on, dropped from the admixture fit, and cannot fire a tension.

Every comparable instrument scores them identically, as zero. That silently converts
ignorance into moderation.

---

## 4. Axes

Nine, in three layers. Only Layer 1 is plotted. Sign convention is arbitrary and carries
no evaluative weight.

**Layer 1 — Values.** Authority↔Liberty · Communal↔Private · Organic↔Universal ·
Transcendent↔Immanent · Restoration↔Progress

**Layer 2 — Temperament,**  Revolutionary↔Reformist · Vanguard↔Populist ·
Constrained↔Unconstrained

**Layer 3 — Epistemics.** Objectivist↔Perspectivist

Full pole definitions are in `data/axes.js`.

Items load on one to three axes with signed weights. Multi-loading is what allows a
short instrument to cover nine dimensions; single-loading items would require several
hundred.

---

## 5. Scoring

### 5.1 Acquiescence correction

Mirror pairs are logically opposed items on the same axis. A respondent free of response
bias satisfies `r_a ≈ −r_b`, so the pair mean is about zero. A respondent who agrees
with both halves is exhibiting yea-saying rather than centrism.

```
b   = mean over mirror pairs of (r_a + r_b) / 2
r'  = r − b        applied to every response, on the raw −2..+2 scale
```

The estimated bias is reported back to the respondent rather than applied silently.

### 5.2 Axis scores

```
score = clamp( Σ(w · s(r') · star) / Σ(|w| · star) / 2.5 × 100, −100, 100 )
```

`s()` is a superlinear conviction weight anchored at s(0)=0, s(1)=1, s(2)=2.5, so a
strong conviction dominates a mild lean rather than being averaged into mush. `star` is
1.5 for items the respondent marked non-negotiable, otherwise 1.

**Coverage guard.** If fewer than 60% of an axis's items were answered, the axis is
reported as *insufficiently determined* rather than given a number. Reporting a figure
the instrument cannot support is worse than admitting it does not know.

### 5.3 Non-negotiables

After the items, the respondent may mark up to five statements they would not trade away
for anything. Optional and skippable.

This recovers most of the priority information a forced-tradeoff instrument would
produce, at the cost of one screen. Its main use is in §7: a tension between two things
someone will not give up is a serious finding; a tension between two mild agreements is
not.

---

## 6. Admixture

The respondent is expressed as a **mixture** of traditions rather than a coordinate. The
method is borrowed from population genetics.

Each anchor carries a profile — a committed adherent's predicted answer to every item.
Given the respondent vector `u`, solve

```
minimise  ‖u − Σ π_k A_k‖²  +  λ‖π‖²
subject to  π_k ≥ 0,  Σ π_k = 1
```

Non-negative least squares on the probability simplex with ridge regularisation, solved
by projected gradient descent.

**Stabilisation.** With 91 anchors and 116 items the system is underdetermined, and an
unregularised fit returns sparse solutions that swing wildly when one answer changes.
Three measures: prefilter to the 20 nearest anchors by cosine similarity before fitting;
ridge term tuned so a one-step change to any single item moves no reported weight
appreciably; weights below 3% pooled rather than reported. The stability bound is a
test, not an aspiration — see `tools/smoke.mjs`.

### 6.1 What a coefficient means — and does not

**A coefficient is the share of the respondent's answer pattern accounted for by that
tradition's characteristic pattern.**

It is *not* a measure of agreement, sympathy, or identity. A high coefficient can arise
because a respondent shares a tradition's reasoning while rejecting its conclusions, or
because they answered a handful of items the same way for entirely unrelated reasons.

Read naively, "31% X" looks like an accusation. It is not one, and the results page is
required to say so *in the same block as the headline figure* — the caveat sits inside
the verdict panel rather than gating the page in front of it. This is a statistical
literacy problem, not a political one, and it applies identically whether the tradition
named is one the respondent admires or one they find repugnant.

An earlier version put this as a primer above the whole page. That was removed: a wall
of caveat before any result is the surest way to guarantee nobody reads the caveat.

**Fit** is reported alongside: how much better the mixture explains the respondent than a
flat average of the candidate anchors does. A low fit means they do not sit neatly inside
any combination, which is itself worth knowing.

---

## 7. Tensions

Contradictions do not fall out of Likert data by accident. They are authored.

A **dyad** pairs two commitments that are *not* logical contradictions but which pull
against each other. Each carries a firing rule, a statement of the tension, and a
question. Severity is the sum of response magnitudes, doubled if either item was marked
non-negotiable.

Dyads are distinct from mirror pairs. Mirror pairs *are* direct opposites and exist only
to estimate acquiescence; agreeing with both is yea-saying, is corrected for silently,
and is never surfaced as a finding. The audit fails the build if a dyad pairs mirror
items.

**Tone is Socratic.** The report states both commitments in the respondent's own terms,
states why some would hold they conflict, and asks. The respondent may well have a good
answer.

**There is no consistency score.** A single number would imply that holding tensions is a
defect. Many of the best political thinkers hold them deliberately.

### 7.1 The symmetry requirement

Each dyad is tagged with the region of the space it catches, and **the audit counts
them.** If the authored tensions cluster on one side, the instrument interrogates that
side harder than the other — and it does so invisibly, because each individual dyad looks
perfectly fair on its own. The check requires that no region carry more than twice the
count of the least-represented one.

This is the most important bias control in the project, because it turns a question of
editorial judgement into an arithmetic one.

---

## 8. Neutrality checks

`node tools/audit.mjs` — run on every change to the item bank.

| Check | Criterion |
|---|---|
| Banned vocabulary | Zero ideology, thinker, or party names in item text |
| Polarity balance | 40–60% negative loadings per axis |
| Axis coverage | ≥8 loadings per Layer 1 axis, ≥5 per Layer 2/3 |
| Mirror integrity | All mirror pairs reciprocal and oppositely loaded |
| Dyad symmetry | No region above 2× the least-represented |
| Dyads ≠ mirrors | No dyad pairs logically opposed items |
| References | Every item, axis, and dyad reference resolves |
| Discriminating power | No item that every anchor answers identically |
| Documentation | Every anchor has a glossary and primary sources |

`node tools/recovery.mjs` — **the strongest single check.** Each anchor's own profile is
fed back in as a respondent. A tradition must return *itself* as its top match with a
substantial self-weight. If a tradition's own answers do not come back as that tradition,
the item bank cannot distinguish it and either the items or the profile are wrong.

`node tools/smoke.mjs` — engine correctness: acquiescence collapse, no-view handling,
mixture non-degeneracy, admixture stability, codec round-trip.

### 8.1 Checks that require people

**Blind adversarial review.** Readers across the spectrum are shown items and asked to
guess which side the author favours. Target: no better than 60% accuracy. Items that
partisans reliably identify are rewritten. This is the check that most reliably catches
what the automated ones cannot, and it is a launch requirement.

### 8.2 Declared risk

The item text and anchor profiles in this repository were drafted with substantial
assistance from an AI system with documented tendencies to treat progressive framings as
a neutral baseline and traditionalist or reactionary framings as positions requiring
explanation.

The structural pairing rule, the dyad symmetry count, the recovery test, and blind review
exist specifically to catch this. They should be run, not assumed.

**The anchor matrix is the largest bias surface in the project** — larger than item
wording, and far less visible, because nobody audits a number in a data file the way they
audit a sentence they can read. Every anchor carries primary-text sources for this
reason. Corrections from adherents of any tradition represented here are wanted, and the
data files are structured so that a correction is a small, reviewable change.

---

## 9. Privacy

No data is collected. There is no server, no account, no analytics, no logging, and no
third-party requests of any kind — including for fonts, which is why the instrument uses
whatever typefaces are already on the reader's machine.

Scoring runs entirely in the browser. A result is encoded into the URL *fragment*, which
browsers never transmit, so a shared link is recomputed on the recipient's machine rather
than looked up anywhere.

The cost of this decision is permanent and worth stating: **the axes can never be
empirically re-derived from response data.** With a corpus of responses, factor analysis
could tell us what the real dimensions of variation are, and whether the nine axes here
are the right ones. Without it, the model must be right by construction, because nothing
will ever correct it.

---

## 10. Contributing

Items and anchors are plain data in `data/`. Propose changes as pull requests. Every
change must keep `npm test` green — and a change that adds an anchor should say what
makes it distinguishable from its nearest neighbour, because the recovery test will
otherwise say it for you.
