# Tailwind Theme Naming Guidelines

This project uses Tailwind v4 theme tokens from src/assets/tailwind.css.

## 1. Naming principles

- Use semantic names, not raw color names.
- Keep names short and consistent across color, shadow, spacing, and future tokens.
- One token should represent one design meaning.

## 2. Current color tokens

Defined in @theme:

- --color-ink: Primary text and dark surfaces.
- --color-night: Deeper footer/background tone.
- --color-accent: Primary brand/action color.
- --color-warm: Secondary highlight color.
- --color-paper: Warm light panel background.

Usage examples:

- text-ink
- bg-accent
- border-warm/40
- bg-paper

## 3. Current shadow tokens

Defined in @theme:

- --shadow-nav: Top navigation separator shadow.
- --shadow-lift: Generic hover lift shadow for cards.
- --shadow-warm: Warm-tinted testimonial hover shadow.

Usage examples:

- shadow-nav
- hover:shadow-lift
- hover:shadow-warm

## 4. Reusable component classes

Defined in @layer components in src/assets/tailwind.css:

- section-shell: Shared spacing for section blocks.
- section-head: Shared heading wrapper.
- section-eyebrow: Accent eyebrow text style.
- section-eyebrow-warm: Warm eyebrow text style.
- section-eyebrow-line: Accent line before eyebrow text.
- section-eyebrow-line-warm: Warm line before eyebrow text.
- section-title: Standard section title style on light backgrounds.
- section-title-inverse: Standard section title style on dark backgrounds.
- card-surface: Shared card base surface and spacing.
- card-surface-lift: Shared hover lift behavior.
- card-surface-warm: Shared warm hover behavior.

## 5. Rules for new pages

1. Never add raw hex classes in templates (for example text-[#xxxxxx]).
2. Add or reuse tokens in @theme first, then consume token classes in templates.
3. Prefer reusable component classes for repeated UI blocks before adding long utility strings.
4. If a repeated pattern appears in 2+ places, extract it into @layer components.
5. Keep component class names semantic (for example section-title, not big-heading-3).

## 6. Token extension checklist

When introducing a new visual value:

1. Confirm existing token cannot represent the new meaning.
2. Add a semantic token under @theme.
3. Add/adjust shared classes in @layer components if needed.
4. Replace template hardcoded utilities with the new token/class.
5. Validate with lint/diagnostics and build.
