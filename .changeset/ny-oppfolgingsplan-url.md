---
"@navikt/dinesykmeldte-sidemeny": patch
---

Retter hardkodet URL for oppfølgingsplaner: `pageToUrl(RootPages.Oppfolgingsplaner, id)` peker nå på ny oppfølgingsplan (`/syk/oppfolgingsplan/<id>`) i stedet for gammel (`/syk/oppfolgingsplaner/arbeidsgiver/<id>`). Konsumenter som overstyrer lenken med `internalRoute` kan fjerne overstyringen hvis de ønsker.
