# Aksel v8 migration review (dinesykmeldte-sidemeny)

Use this prompt when reviewing or finishing an Aksel v8 upgrade (or when someone has attempted one and you want a focused checklist).

## Commands

This repo uses Yarn workspaces (via Corepack) today.

Run from repo root:

```bash
corepack yarn install
corepack yarn workspace @navikt/dinesykmeldte-sidemeny run test --run
corepack yarn workspace @navikt/dinesykmeldte-sidemeny run build
corepack yarn workspace dinesykmeldte-sidemeny-example run build
```

Optional (visual/manual):

```bash
corepack yarn workspace dinesykmeldte-sidemeny-example run dev
```

## Fast grep checks

Look for common v7 leftovers and v8 gotchas:

- `@navikt/ds-css/darkside` (v7 import path)
- `@navikt/ds-tokens/darkside-*` (v7 token import paths)
- `Box.New` (removed in v8)
- Deprecated variant values: `danger`, `tertiary-neutral`, `secondary-neutral`
- Spacing without tokens: `gap="0"`, `gap="6"`, `paddingInline="0"`, `marginBlock="... 0"`
- Old token typo: `--a-` (should usually be `--ax-` in v8)
- Legacy CSS class usage: `.navds-` (v7) vs `.aksel` (v8)
- Old component tokens like `--ac-button-*` (removed in v8)

## Aksel v8 checklist

### CSS + theming

- CSS import uses `@navikt/ds-css` (not `@navikt/ds-css/darkside`).
- Aksel CSS uses CSS layers in v8 (specificity 0). If you see “unstyled” or overridden components, check layering/scoping requirements and reduce overrides where possible.
- If you reference Aksel classes in your own CSS, verify you’re not relying on `.navds-*` selectors (v8 uses `.aksel*`). Prefer adding your own className instead of styling `.aksel*` directly.

### Tokens

- If you load `@navikt/ds-tokens` manually, imports and token variable names must be updated for v8.
- If you use `@navikt/ds-css`, you typically don’t need `@navikt/ds-tokens` separately (tokens are included).

### Component API

- Replace all `Box.New` usages with `Box`.
- Replace `BoxNewProps` and other `*.New` prop typings with `ComponentProps<typeof Box>`.

If you have the Aksel codemod available in this repo, it can help with common migrations:

```bash
yarn run aksel codemod v8-tokens
yarn run aksel codemod v8-list
yarn run aksel codemod v8-prop-deprecate
yarn run aksel codemod v8-box
yarn run aksel codemod v8-box-new
```

### Spacing + radii

- Use spacing tokens everywhere: `space-*` (including `space-0`).
- If `gap`/`padding`/`margin` typing fails, it often means you’re using a raw number string (e.g. `"6"`) instead of tokens (e.g. `"space-6"`).
- If `borderRadius="large" | "medium"` fails typing, prefer numeric tokens like `"8"`, `"12"`.

### Colors / variants

- Avoid deprecated variants like `variant="danger"`, `variant="tertiary-neutral"`, `variant="secondary-neutral"`.
- Prefer `data-color` + a standard variant:
  - Destructive: `data-color="danger" variant="primary"`
  - Neutral tertiary: `data-color="neutral" variant="tertiary"`
  - Tags/chips: often `data-color="neutral" variant="outline"`

### Deprecated/removed props

- Accordion: `headingSize` is removed (use `size` on the component API instead).
- Popover: `arrow` is removed.
- Page: `background` is removed.

### Regression checks

- Accordions/menus/toggles still behave correctly (keyboard + focus states).
- No console errors about missing tokens/styles.
- Example site still exports successfully (GitHub Pages uses `output: 'export'`).

### Tailwind / Stylelint (only if used)

- Tailwind: Aksel tailwind classes are now prefixed with `ax-` and map to CSS variables; verify any Aksel tailwind usage after upgrading.
- Stylelint: `@navikt/aksel-stylelint` v8 rules include checks for legacy classes and tokens; consider enabling if you lint CSS.

## Workspace note

This VS Code workspace may contain other repos that are still on Aksel v7. Don’t copy v8-specific patterns into those repos until their `@navikt/ds-react`/`@navikt/ds-css` dependencies are upgraded.
