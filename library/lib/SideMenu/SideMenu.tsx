import React from 'react';
import { Heading } from '@navikt/ds-react';

import { Pages, RootPages, Routes } from '../types';
import { formatFirstNamePossessive } from '../utils';

import MenuItem from './MenuItem/MenuItem';
import styles from './SideMenu.module.css';

export interface SideMenuProps {
    sykmeldtName: string;
    activePage: Pages;
    routes: Routes;
}

export function SideMenu({ sykmeldtName, activePage, routes }: SideMenuProps): JSX.Element {
    return (
        <nav aria-labelledby="side-menu-header" className={styles.navRoot}>
            <Heading id="side-menu-header" size="small" className={styles.heading}>
                {formatFirstNamePossessive(sykmeldtName, 'oversikt')}
            </Heading>
            <ul className={styles.buttonList}>
                <MenuItem page={RootPages.Sykmeldinger} route={routes.Sykmeldinger} activePage={activePage} />
                <MenuItem page={RootPages.Soknader} route={routes.Soknader} activePage={activePage} />
                <MenuItem page={RootPages.Dialogmoter} route={routes.Dialogmoter} activePage={activePage} />
                <MenuItem page={RootPages.Oppfolgingsplaner} route={routes.Oppfolgingsplaner} activePage={activePage} />
                <MenuItem page={RootPages.Meldinger} route={routes.Meldinger} activePage={activePage} />
                <MenuItem page={RootPages.DineSykmeldte} route={routes.DineSykmeldte} activePage={activePage} />
            </ul>
        </nav>
    );
}
