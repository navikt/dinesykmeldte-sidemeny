import { Bandage, CoApplicant, Dialog, Email, Notes, Task } from '@navikt/ds-icons';

import { ChildPages, Pages, RootPages } from '../../types';

export function isChildPageActive(page: RootPages, activePage: Pages): boolean {
    switch (page) {
        case RootPages.DineSykmeldte:
            return false;
        case RootPages.Sykmeldinger:
            return activePage === ChildPages.Sykmelding;
        case RootPages.Soknader:
            return activePage === ChildPages.Soknad;
        case RootPages.Meldinger:
            return activePage === ChildPages.Melding;
        case RootPages.Dialogmoter:
            return activePage === ChildPages.Dialogmote;
        case RootPages.Oppfolgingsplaner:
            return activePage === ChildPages.Oppfolgingsplan;
    }
}

export function parentToChild(page: RootPages): ChildPages {
    switch (page) {
        case RootPages.DineSykmeldte:
            throw new Error('DineSykmeldte root page has no children');
        case RootPages.Sykmeldinger:
            return ChildPages.Sykmelding;
        case RootPages.Soknader:
            return ChildPages.Soknad;
        case RootPages.Meldinger:
            return ChildPages.Melding;
        case RootPages.Dialogmoter:
            return ChildPages.Dialogmote;
        case RootPages.Oppfolgingsplaner:
            return ChildPages.Oppfolgingsplan;
    }
}

export function pageToUrl(page: Pages): string {
    switch (page) {
        case RootPages.DineSykmeldte:
            return '/TODO';
        case RootPages.Sykmeldinger:
            return '/TODO';
        case RootPages.Soknader:
            return '/TODO';
        case RootPages.Meldinger:
            return '/TODO';
        case RootPages.Dialogmoter:
            return '/TODO';
        case RootPages.Oppfolgingsplaner:
            return '/TODO';
        case ChildPages.Sykmelding:
            return '/TODO';
        case ChildPages.Soknad:
            return '/TODO';
        case ChildPages.Melding:
            return '/TODO';
        case ChildPages.Dialogmote:
            return '/TODO';
        case ChildPages.Oppfolgingsplan:
            return '/TODO';
    }
}

export function pageToIcon(page: Pages): typeof Bandage {
    switch (page) {
        case RootPages.DineSykmeldte:
            return CoApplicant;
        case RootPages.Soknader:
        case ChildPages.Soknad:
            return Task;
        case RootPages.Meldinger:
        case ChildPages.Melding:
            return Email;
        case RootPages.Dialogmoter:
        case ChildPages.Dialogmote:
            return Dialog;
        case RootPages.Oppfolgingsplaner:
        case ChildPages.Oppfolgingsplan:
            return Notes;
        case RootPages.Sykmeldinger:
        case ChildPages.Sykmelding:
            return Bandage;
    }
}
