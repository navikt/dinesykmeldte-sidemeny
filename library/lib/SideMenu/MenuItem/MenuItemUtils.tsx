import {
    BandageIcon,
    PersonGroupIcon,
    Chat2Icon,
    EnvelopeClosedIcon,
    DocPencilIcon,
    TasklistIcon,
} from '@navikt/aksel-icons';

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

export function pageToUrl(activePage: Pages, page: RootPages, sykmeldtId: string): string {
    switch (page) {
        case RootPages.DineSykmeldte:
            return '/arbeidsgiver/sykmeldte';
        case RootPages.Sykmeldinger:
            return `/arbeidsgiver/sykmeldte/sykmeldt/${sykmeldtId}/sykmeldinger`;
        case RootPages.Soknader:
            return `/arbeidsgiver/sykmeldte/sykmeldt/${sykmeldtId}/soknader`;
        case RootPages.Meldinger:
            return `/arbeidsgiver/sykmeldte/sykmeldt/${sykmeldtId}/meldinger`;
        case RootPages.Dialogmoter:
            if (isDineSykmeldte(activePage)) {
                return `/arbeidsgiver/sykmeldte/dialogmoter/${sykmeldtId}`;
            } else {
                return `/syk/dialogmoter/arbeidsgiver/${sykmeldtId}`;
            }
        case RootPages.Oppfolgingsplaner:
            if (isDineSykmeldte(activePage)) {
                return `/arbeidsgiver/sykmeldte/oppfolgingsplaner/${sykmeldtId}`;
            } else {
                return `/syk/oppfolgingsplaner/arbeidsgiver/${sykmeldtId}`;
            }
    }
}

export function pageToIcon(page: Pages): typeof BandageIcon {
    switch (page) {
        case RootPages.DineSykmeldte:
            return PersonGroupIcon;
        case RootPages.Soknader:
        case ChildPages.Soknad:
            return TasklistIcon;
        case RootPages.Meldinger:
        case ChildPages.Melding:
            return EnvelopeClosedIcon;
        case RootPages.Dialogmoter:
        case ChildPages.Dialogmote:
            return Chat2Icon;
        case RootPages.Oppfolgingsplaner:
        case ChildPages.Oppfolgingsplan:
            return DocPencilIcon;
        case RootPages.Sykmeldinger:
        case ChildPages.Sykmelding:
            return BandageIcon;
    }
}

function isDineSykmeldte(activePage: Pages): boolean {
    switch (activePage) {
        case RootPages.Sykmeldinger:
        case ChildPages.Sykmelding:
        case RootPages.Soknader:
        case ChildPages.Soknad:
        case RootPages.Meldinger:
        case ChildPages.Melding:
        case RootPages.DineSykmeldte:
            return true;
        case RootPages.Dialogmoter:
        case RootPages.Oppfolgingsplaner:
        case ChildPages.Dialogmote:
        case ChildPages.Oppfolgingsplan:
            return false;
    }
}
