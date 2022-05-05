import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Accordion, Cell, Grid } from "@navikt/ds-react";
import { SideMeny, PageContainer } from "@navikt/dinesykmeldte-sidemeny";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [sideMenu, setSideMenu] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dine Sykmeldte Sidemeny Demoside</title>
      </Head>

      <button
        className={styles.hideMenuButton}
        onClick={() => setSideMenu((b) => !b)}
      >
        Hide menu
      </button>
      <PageContainer navigation={sideMenu && <SideMeny test />}>
        <Grid>
          {Array.from(new Array(25).keys()).map((index) => (
            <Cell xs={12} key={index}>
              <Accordion>
                <Accordion.Item>
                  <Accordion.Header>
                    Fake Accordion {index + 1}
                  </Accordion.Header>
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
