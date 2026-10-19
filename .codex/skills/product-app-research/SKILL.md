---
name: product-app-research
description: Evidence-led analysis and improvement of consumer product applications. Use when asked to inspect an app and comparable products, reverse engineer user-visible features with REA-style methods, investigate barcode or catalog lookup, improve product result screens or personalization, assess monetization, or implement and validate product features in a codebase.
---

# Product App Research

Use an REA-inspired, evidence-led workflow to learn how a product feature behaves, compare it with alternatives, and implement an original, testable improvement. REA is an analysis aid, not permission to inspect software: examine only public interfaces or systems the user owns or is authorized to analyze. See [method-and-evidence.md](references/method-and-evidence.md) for evidence standards, benchmark protocol, and report format.

## Workflow

1. **Establish the target and constraints.** Identify the repository, default branch, app platform, user groups, feature scope, existing implementation, and requested deliverable. Read project guidance and current code before proposing changes. Record whether the user authorized implementation, commits, pushes, or deployment.
2. **Map the current product.** Trace the user journey and code paths from input to displayed result. Inspect UI states, API requests, storage, analytics, data providers, error handling, and tests. Use the smallest test data needed; do not expose credentials or personal records.
3. **Select comparable apps.** Choose direct competitors and adjacent products by audience and job-to-be-done. Use their official product pages, help centers, app-store listings, demos, and public interfaces. Record date, plan/tier, region, platform, source, and uncertainty. Do not infer hidden internals from screenshots.
4. **Observe features systematically.** Compare onboarding, scan/search, result explanations, source freshness, corrections, saved history, preferences, accessibility, privacy, paywalls, and upgrade path. Separate direct observation, vendor claim, technical inference, and unknown. Look for the user need and interaction pattern to reproduce, then design an original solution; do not copy proprietary code, text, branding, or distinctive layouts.
5. **Investigate barcode-to-product retrieval when relevant.** Treat barcode decoding and product identification as separate stages. Check supported symbologies and checksum behavior; normalize GTIN-8/12/13/14 without losing leading zeros; validate input; then resolve the identifier against permitted catalogs. A valid barcode identifies a trade item, but does not guarantee that a matching, complete, current, or clinically suitable record exists. See [product-data-and-personalization.md](references/product-data-and-personalization.md).
6. **Design a better result.** Show the matched product, match confidence, source and last-updated date, relevant attributes, concise interpretation, missing-data caveats, and clear next actions. Distinguish verified facts from model-derived scores, estimates, and user-specific guidance. Let users report a mismatch or stale record. Avoid medical diagnosis or treatment claims.
7. **Personalize with user control.** Ask only for preferences needed to improve the result. Make allergies and health-related settings explicit, optional where possible, editable, exportable, and deletable. Explain how each preference affects ranking or labels. Never silently infer sensitive traits or sell identifiable health data.
8. **Assess monetization.** Compare freemium limits, subscriptions, one-time features, affiliate links, retailer referrals, and business/API offerings against the user journey. State the value exchange, likely friction, and operational dependency for each. Clearly label paid placement and affiliate incentives; do not let sponsorship alter health or safety conclusions. Prefer an initial model that can be tested with low engineering and compliance overhead.
9. **Propose or implement.** Give a concise evidence-linked feature matrix, prioritized gaps, and acceptance criteria. If implementation is authorized, make incremental changes in the existing architecture, preserve user data, add meaningful tests for critical behaviors, and run relevant checks. Mark external-service, deployment, or validation blockers explicitly; never claim complete functionality when an integration is unavailable.
10. **Verify and hand off.** Test happy paths and realistic failures: unreadable/unsupported barcode, invalid checksum, unknown product, conflicting records, stale or partial data, provider timeout/rate limit, offline retry, and user correction. For personalization, test empty, conflicting, and changed preferences. Check small screens, keyboard/screen-reader basics, and privacy controls. Summarize changes, evidence, tests, remaining limits, and commit/push/deployment status. Push only to the branch the user authorized and confirm the resulting commit.

## Output expectations

- Use a compact comparison table with app, observed feature, source/date, evidence type, and relevance.
- Explain how the current system works before recommending a redesign.
- Rank recommendations by user benefit, confidence, effort, and dependencies.
- For implementation, tie each change to a user problem and acceptance criterion.
- Keep citations/links adjacent to time-sensitive claims; label inference and uncertainty.
- Use English unless the user requests another language. If the user asks in mixed language but requests English, answer entirely in English.
