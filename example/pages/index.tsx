import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { PageContainer } from '@navikt/dinesykmeldte-sidemeny';
import { Accordion, Cell, Grid, Heading, Select, ToggleGroup } from '@navikt/ds-react';
import { Bandage } from '@navikt/ds-icons';

import styles from '../styles/Home.module.css';
import MyAppsSideMenu from '../components/MyAppsSideMenu';

const Home: NextPage = () => {
    const [sideMenu, setSideMenu] = useState(true);
    const [headerExtra, setHeaderExtra] = useState(true);
    const [value, setValue] = useState('sykmeldinger');

    return (
        <div>
            <Head>
                <title>Dine Sykmeldte Sidemeny Demoside</title>
            </Head>

            <div className={styles.extraFloatingButtons}>
                <button onClick={() => setSideMenu((b) => !b)}>Hide menu</button>
                <button onClick={() => setHeaderExtra((b) => !b)}>Hide header extra</button>
            </div>
            <PageContainer
                header={{
                    title: {
                        title: 'Test app with long title',
                        Icon: Bandage,
                        subtitle: 'Subby subby sub sub',
                    },
                    headerExtra: headerExtra && (
                        <div>
                            <Select label="Velg noe da">
                                <option>A</option>
                                <option>A</option>
                                <option>A</option>
                                <option>A</option>
                            </Select>
                        </div>
                    ),
                }}
                sykmeldt={{
                    navn: 'Test N. Testson',
                    fnr: '123456789',
                }}
                navigation={sideMenu && <MyAppsSideMenu value={value} />}
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

export default Home;
