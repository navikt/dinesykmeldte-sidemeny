# dinesykmeldte-sidemeny

Dette er et react bibliotek for sidemenyen som brukes på appene Dine Sykmeldte, Dialogmøter og Oppfølgingsplaner.

## Krav

- Node.js `>=22`
- Aksel v8 (`@navikt/ds-react@^8`, `@navikt/aksel-icons@^8`)
- Konsument må selv laste Aksel CSS (typisk `@navikt/ds-css`) i appen sin

## Bruk

Biblioteket består hovedsaklig av to komponenter. `<PageContainer />` og `<SideMenu />`.

### `<PageContainer />`

Denne brukes til å få lik layout på alle sidene som bruker sidemenyen. Den har også ansvar for å håndtere breakpoints ved forskjellige skjermbredder.

Den gir deg et område å plassere sidemenyen i, samt et område for å putte innholdet ditt. Denne brukes sammen med `SideMenu` som `navigation`-prop.

**Eksempel:**

```tsx
<PageContainer navigation={<SideMenu ... />}>
  <DittInnhold />
</PageContainer>
```

### `<SideMenu />`

Dette er selve sidemenyen med de forskjellige lenkene. Denne håndterer også å vise "varsler" (liten notifikasjons-prikk med tall), dynamisk viser undersider som peker tilbake til "parent"-siden. Den lar deg også tilpasse lenken, så man kan bruke `next/link` eller `react-router/link` etter ønske.

Denne er anbefalt å wrappe i en komponent spesfikk for appen din.

**Eksempel med `next/link`:**

```tsx
import React from 'react';
import Link from 'next/link';
import { SideMenu, Pages, ChildPages, RootPages } from '@navikt/dinesykmeldte-sidemeny';

interface Props {
    // Hentes i din app, inneholder informasjon om notifications og sånt
    sykmeldt: DinSykmeldte;
    // Aktiv side, hentes fra din router
    activePage: Pages;
}

function MyAppsSideMenu({ sykmeldt, activePage }: Props): ReactElement {
    return (
        <SideMenu
            sykmeldtName={sykmeldt.navn}
            sykmeldtId={sykmeldt.id}
            activePage={activePage}
            routes={{
                Soknader: sykmeldt.ulesteSoknader,
                Sykmeldinger: sykmeldt.ulesteSykmeldinger,
                // Sett den til false for å ikke vise den i det hele tatt
                Meldinger: false,
                // Eksempel på en route som krever å bruke `next/link`
                Dialogmoter: {
                    notifications: sykmeldt.ulesteDialogmoter,
                    internalRoute: ({ children, ...rest }) => (
                        <Link href="/some/route" passHref legacyBehavior>
                            <a {...rest}>{children}</a>
                        </Link>
                    ),
                },
                Oppfolgingsplaner: {
                    notifications: sykmeldt.ulesteOppfolgingsplaner,
                    internalRoute: ({ children, ...rest }) => (
                        <Link href="/some-other/route" passHref legacyBehavior>
                            <a {...rest}>{children}</a>
                        </Link>
                    ),
                },
                DineSykmeldte: 0,
            }}
        />
    );
}

export default MyAppsSideMenu;
```

Denne komponenten kan brukes sammen med `<PageContainer />` på alle sidene dine som skal ha sidemeny.

```tsx
<PageContainer navigation={<MyAppsSideMenu sykmeldt={sykmeldt} activePage={mapFromRouterToPage(router.path)} />}>
    <DittInnhold />
</PageContainer>
```

For et mer fullstendig eksempel kan man ta en titt på [pages/index.tsx](./example/pages/index.tsx) og [components/MyAppsSideMenu.tsx](./example/components/MyAppsSideMenu.tsx).

## Utvikling

Dette repoet består av to workspaces, ett for selve biblioteket og ett for et nextjs eksempelprosjekt.

Dette repoet avhenger av moduler på Github Package Repository. Sett en miljøvariabel som heter `NPM_AUTH_TOKEN` med en PAT token som har `package:read` for å kunne installere avhengighetene.

Tips: På maskiner uten global Yarn, kjør via Corepack: `corepack yarn ...`.

Start begge i dev modus ved å (fra root) kjør:

1.  `yarn`
2.  `yarn dev`

## Publishing

Repoet bruker Changesets for semver og publishing.

Kort oppsummert:

1. I en PR: legg til en changeset med `yarn changeset` og velg `patch`/`minor`/`major` for `@navikt/dinesykmeldte-sidemeny`.
2. Når PR-en merges til `main`: CI oppdaterer/åpner en "Version Packages" PR.
3. Når "Version Packages" PR-en merges: pakken publiseres til GitHub Packages.

Hvis en endring ikke skal utløse release: kjør `yarn changeset add --empty`.
