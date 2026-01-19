# Changesets

This repo uses Changesets to manage semver versioning and publishing.

## Typical flow

1. Add a changeset in your PR:

   `yarn changeset`

2. Choose the bump type (patch/minor/major) for `@navikt/dinesykmeldte-sidemeny`.

3. Merge the PR.

On `main`, the release workflow will open (or update) a "Version Packages" PR that bumps versions.
When that PR is merged, the package is published.
