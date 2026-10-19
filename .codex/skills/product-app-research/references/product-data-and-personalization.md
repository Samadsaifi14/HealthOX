# Product Lookup, Results, and Personalization

## Barcode lookup model

A scan typically produces decoded data, not a full product description:

1. Camera or scanner detects a symbol and decodes its symbology and payload.
2. The app validates format/check digit where applicable, normalizes the identifier while preserving leading zeros, and records the symbology.
3. The client queries a provider or the app's server-side catalog by GTIN/barcode. A provider may return no match, multiple candidates, stale fields, or a record for a regional variant.
4. The app checks the result's identifier, brand/name, package size, market, source, update time, and completeness before rendering it.
5. The UI explains the match and data limits; the user can correct a mismatch or enter/search manually.

UPC-A, EAN-13, EAN-8 and ITF-14 are common linear retail/trade-item formats; GS1 DataBar and 2D symbols such as GS1 DataMatrix or QR may carry different data. Do not treat every QR code as a product GTIN. A checksum validates a number's structure, not product authenticity or catalog correctness. Use a standards reference and the chosen scanner library's current documentation to confirm supported symbologies, permissions, camera behavior, and validation rules.

## Provider selection

Evaluate sources for the product category, region, license, API terms, coverage, update path, identifier quality, nutrition/ingredient completeness, and rate limits. Examples to investigate when relevant include Open Food Facts for community-submitted food records; USDA FoodData Central for U.S. food composition; GS1 Verified by GS1 for authoritative identity verification under its access terms; and category-specific catalogs such as Open Beauty Facts. Commercial services may provide wider coverage or normalized fields. Verify current availability, pricing, rights, and terms from official sources before implementing. Never assume a provider's coverage, freshness, or permission to cache/redistribute.

Use provenance per field where feasible: source, retrieval time, source update time if supplied, locale/market, and confidence or verification state. Prefer authoritative brand/manufacturer data when available and allow a second source to corroborate. Do not silently merge conflicting ingredient, allergen, nutrition, or package claims. Make the conflict visible and retain source attribution.

## Result-screen hierarchy

Prioritize:

1. Product identity and match status.
2. Source and freshness.
3. The small set of user-relevant attributes, with units and clear labels.
4. Why the item is flagged or recommended for the user's chosen preferences.
5. Missing, estimated, conflicting, or unverified fields.
6. Actions: view detail, compare, save, correct/report, or search manually.

Do not imply precision beyond the underlying data. A preference match is not a clinical recommendation. Keep sponsored placements visually distinct and prevent them from modifying factual ratings.

## Personalization safeguards

- Use explicit preferences (diet pattern, ingredient exclusions, price/brand choices) with plain-language effects.
- Treat allergies, diagnoses, medication, and other health details as sensitive. Minimize collection, explain purpose, obtain consent, protect storage/transit, and provide edit/export/delete controls consistent with applicable law.
- Keep defaults useful without requiring a health profile. Never infer a condition, allergy, religion, or demographic trait from behavior or location.
- Explain that ingredient/product records can be incomplete and that users should verify packaging for allergy-critical decisions.
- Do not train on personal profiles or share them with advertisers without a specific, informed, revocable choice and legal review.

## Monetization hypotheses to test

- **Freemium**: core scan and trustworthy basic result stay free; charge for an understandable added benefit such as unlimited history, comparisons, household profiles, or advanced planning.
- **Subscription**: test willingness to pay before building costly ongoing features; offer clear cancellation and avoid fear-based conversion.
- **Affiliate/referral**: label links and commissions; do not alter result order or health conclusions without prominent disclosure.
- **Business/API**: sell catalog enrichment, retailer integration, or aggregate insights only with adequate rights, privacy protection, and aggregation thresholds.
- **Sponsored listings**: clearly separate from evidence-based results and provide user controls. Do not sell health-profile access.

Validate with interviews, landing-page or checkout experiments that do not mislead users, conversion and retention measures, and review of data licenses, consumer protection, and privacy obligations in target markets. These are hypotheses, not guaranteed revenue models.
