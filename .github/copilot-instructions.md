# dinesykmeldte-sidemeny

```sh
pnpm build
pnpm dev
pnpm test
pnpm lint
pnpm --filter dinesykmeldte-sidemeny-example build
```

- Root `build` and `test` cover the published library only. The example has a
  separate build; root `dev` runs its server and the library watcher together.
- Consumers supply Aksel CSS and the router-specific link implementation.
  Preserve the public component/type exports and separate CSS export in
  `library/package.json`; do not add a Next.js dependency to the library.
- Package changes use `pnpm changeset`; release runs through the existing
  Changesets workflow. The example's Pages deployment is separate.
