# @navikt/dinesykmeldte-sidemeny

## 8.0.1

### Patch Changes

- [#258](https://github.com/navikt/dinesykmeldte-sidemeny/pull/258) [`60f7f36`](https://github.com/navikt/dinesykmeldte-sidemeny/commit/60f7f36799ac13e33e5fdad000f117d031b2b778) Thanks [@AudunSorheim](https://github.com/AudunSorheim)! - Retter hardkodet URL for oppfølgingsplaner: `pageToUrl(RootPages.Oppfolgingsplaner, id)` peker nå på ny oppfølgingsplan (`/syk/oppfolgingsplan/<id>`) i stedet for gammel (`/syk/oppfolgingsplaner/arbeidsgiver/<id>`). Konsumenter som overstyrer lenken med `internalRoute` kan fjerne overstyringen hvis de ønsker.

## 8.0.0

### Major Changes

- [#195](https://github.com/navikt/dinesykmeldte-sidemeny/pull/195) [`44b4f45`](https://github.com/navikt/dinesykmeldte-sidemeny/commit/44b4f455ab398bd118e09f64eddc644d9ea14ab9) Thanks [@AudunSorheim](https://github.com/AudunSorheim)! - Upgrade to Aksel v8.

  This release requires consumers to use `@navikt/ds-react@^8` and `@navikt/aksel-icons@^8`.
