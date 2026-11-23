---
"@navikt/dinesykmeldte-sidemeny": minor
---

`PageContainer` og sideheaderen bruker nå Aksels layoutkomponenter (`Page.Block`, `HStack`, `Show`, `Hide`, `Box`) og Aksels breakpoints i stedet for egne media queries. Bredden der mobilmenyen tar over for sidemenyen er flyttet fra 960px til Aksels `lg` (1024px), og `headerRight` skjules på skjerm under `md` (768px) i stedet for 720px. Utskrift fungerer som før: menyene skjules, og sideheaderen, `headerRight` og innholdet skrives ut i full bredde.
