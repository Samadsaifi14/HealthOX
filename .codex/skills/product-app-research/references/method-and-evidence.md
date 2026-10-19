# REA-Inspired Method and Evidence

## Source and scope

The workflow is inspired by [REA: Reverse Engineer Anything](https://github.com/morluto/rea), whose public documentation describes inspecting authorized targets, tracing feature behavior, returning evidence and limitations, and using findings to implement and test a version in the user's project. REA is MIT-licensed; this skill is an independent workflow guide and does not bundle REA code. Follow REA's current setup, host, provider, and licensing instructions before using its tools. Do not install software, start runtime capture, or analyze a binary without authorization and review of the effects.

For consumer app research, prefer public, ordinary user flows and official documentation. Use UI automation only within the service's allowed access and the user's authorization. Do not bypass authentication, paywalls, technical restrictions, or rate limits. Do not scrape personal data. Do not claim access to competitor source code or internal systems.

## Evidence labels

Label each finding as one of:

- **Observed**: reproduced directly in an accessible app/site; include platform, locale, plan, date, and steps.
- **Documented**: stated in an official product page, help article, API documentation, or terms; link the source and date accessed.
- **Inferred**: a plausible explanation from observable behavior; state the evidence and alternatives.
- **Unknown**: not verifiable from available access or evidence.

Capture short notes/screenshots only when permitted. Never use a mock-up, generated screen, or marketing statement as proof that a live feature works. Keep source material and conclusions separate.

## Benchmark protocol

1. Define the task and a small set of realistic, non-personal test scenarios.
2. Compare the same task, locale, device class, and free/paid tier where possible.
3. Record steps, time-to-result if measurable, failure states, data provenance, and user effort.
4. Repeat enough to separate stable behavior from network variability; record failures rather than silently dropping them.
5. Avoid a single winner score unless the measures and weights are justified. Report trade-offs and missing evidence.

## Suggested deliverable

1. Scope and limits.
2. Current app journey and code/data path.
3. Comparison matrix with sources and evidence labels.
4. Findings grouped by user need, including what works, what fails, and what is unknown.
5. Prioritized recommendations with rationale, confidence, effort, dependencies, and acceptance criteria.
6. Implementation summary and validation results, when authorized.
7. Citations and unresolved access/data constraints.
