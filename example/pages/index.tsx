import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { SideMenu, PageContainer, ChildPages, Pages, RootPages } from '@navikt/dinesykmeldte-sidemeny';
import { Accordion, Cell, Grid, Heading, ToggleGroup } from '@navikt/ds-react';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    const [sideMenu, setSideMenu] = useState(true);
    const [value, setValue] = React.useState('sykmeldinger');

    return (
        <div>
            <Head>
                <title>Dine Sykmeldte Sidemeny Demoside</title>
            </Head>

            <button className={styles.hideMenuButton} onClick={() => setSideMenu((b) => !b)}>
                Hide menu
            </button>
            <PageContainer
                navigation={
                    sideMenu && (
                        <SideMenu
                            sykmeldtName="Jon Kåre"
                            activePage={routeToEnum(value)}
                            routes={{
                                Soknader: 0,
                                Sykmeldinger: 1,
                                Meldinger: 2,
                                Dialogmoter: {
                                    notifications: 0,
                                    internalRoute: ({ children, ...rest }) => (
                                        <Link href="/some/route" passHref>
                                            <a {...rest}>{children}</a>
                                        </Link>
                                    ),
                                },
                                Oppfolgingsplaner: {
                                    notifications: 0,
                                    internalRoute: ({ children, ...rest }) => (
                                        <Link href="/some-other/route" passHref>
                                            <a {...rest}>{children}</a>
                                        </Link>
                                    ),
                                },
                                DineSykmeldte: 0,
                            }}
                        />
                    )
                }
            >
                <Heading size="medium">Simulate route</Heading>
                <ToggleGroup onChange={setValue} value={value} size="medium" className={styles.toggleGroup}>
                    <ToggleGroup.Item value="sykmeldinger">Sykmeldinger</ToggleGroup.Item>
                    <ToggleGroup.Item value="soknader">Søknader</ToggleGroup.Item>
                    <ToggleGroup.Item value="meldinger">Meldinger</ToggleGroup.Item>
                    <ToggleGroup.Item value="dialogmoter">Dialogmøter</ToggleGroup.Item>
                    <ToggleGroup.Item value="oppfolgingsplaner">Oppfolgingsplaner</ToggleGroup.Item>
                    <ToggleGroup.Item value="sykmelding">Sykmelding</ToggleGroup.Item>
                    <ToggleGroup.Item value="soknad">Søknad</ToggleGroup.Item>
                    <ToggleGroup.Item value="melding">Melding</ToggleGroup.Item>
                    <ToggleGroup.Item value="dialogmote">Dialogmøte</ToggleGroup.Item>
                    <ToggleGroup.Item value="oppfolgingsplan">Oppfolgingsplan</ToggleGroup.Item>
                </ToggleGroup>
                <Grid>
                    {Array.from(new Array(25).keys()).map((index) => (
                        <Cell xs={12} key={index}>
                            <Accordion>
                                <Accordion.Item>
                                    <Accordion.Header>Fake Accordion {index + 1}</Accordion.Header>
                                    <Accordion.Content>Some content</Accordion.Content>
                                </Accordion.Item>
                            </Accordion>
                        </Cell>
                    ))}
                </Grid>
            </PageContainer>
        </div>
    );
};

function routeToEnum(value: string): Pages {
    switch (value) {
        case 'sykmeldinger':
            return RootPages.Sykmeldinger;
        case 'soknader':
            return RootPages.Soknader;
        case 'meldinger':
            return RootPages.Meldinger;
        case 'dialogmoter':
            return RootPages.Dialogmoter;
        case 'oppfolgingsplaner':
            return RootPages.Oppfolgingsplaner;
        case 'sykmelding':
            return ChildPages.Sykmelding;
        case 'soknad':
            return ChildPages.Soknad;
        case 'melding':
            return ChildPages.Melding;
        case 'dialogmote':
            return ChildPages.Dialogmote;
        case 'oppfolgingsplan':
            return ChildPages.Oppfolgingsplan;
        default:
            throw new Error(`Unknown route: ${value}`);
    }
}

export default Home;
