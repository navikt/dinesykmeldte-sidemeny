import { PropsWithChildren } from 'react';

export enum RootPages {
    Sykmeldinger = 'Sykmeldinger',
    Soknader = 'Søknader',
    Meldinger = 'Beskjeder',
    Dialogmoter = 'Dialogmøter',
    Oppfolgingsplaner = 'Oppfølgingsplaner',
    DineSykmeldte = 'Dine Sykmeldte',
}

export enum ChildPages {
    Sykmelding = 'Sykmelding',
    Soknad = 'Søknad',
    Melding = 'Aktivitetsvarsel',
    Dialogmote = 'Dialogmøte',
    Oppfolgingsplan = 'Oppfølgingsplan',
}

export type Pages = RootPages | ChildPages;

export type Route = (props: PropsWithChildren<{ className?: string }>) => JSX.Element;

export type RouteVariant =
    | number
    | {
          internalRoute: Route;
          notifications: number;
      };

export type Routes = {
    [Val in keyof typeof RootPages]: RouteVariant;
};
