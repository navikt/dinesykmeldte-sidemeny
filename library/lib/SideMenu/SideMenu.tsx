import { BodyShort, Heading } from "@navikt/ds-react";
import type { ReactElement } from "react";

import { type Pages, RootPages, type Routes, type Stilling } from "../types";
import { formatFirstNamePossessive } from "../utils";

import MenuItem from "./MenuItem/MenuItem";
import styles from "./SideMenu.module.css";

export interface SideMenuProps {
  sykmeldtName: string;
  sykmeldtId: string;
  activePage: Pages;
  routes: Routes;
  stilling?: Stilling;
}

export function SideMenu({
  sykmeldtName,
  sykmeldtId,
  activePage,
  routes,
  stilling,
}: SideMenuProps): ReactElement {
  return (
    <nav aria-labelledby="side-menu-header" className={styles.navRoot}>
      <Heading
        id="side-menu-header"
        level="2"
        size="small"
        className={styles.heading}
      >
        {formatFirstNamePossessive(sykmeldtName, "sideoversikt")}
      </Heading>
      {stilling && (
        <BodyShort size="small" className={styles.stilling}>
          {stilling.tittel} {stilling.prosent} %
        </BodyShort>
      )}
      <ul className={styles.buttonList}>
        <MenuItem
          sykmeldtId={sykmeldtId}
          page={RootPages.Sykmeldinger}
          route={routes.Sykmeldinger}
          activePage={activePage}
        />
        <MenuItem
          sykmeldtId={sykmeldtId}
          page={RootPages.Soknader}
          route={routes.Soknader}
          activePage={activePage}
        />
        <MenuItem
          sykmeldtId={sykmeldtId}
          page={RootPages.Dialogmoter}
          route={routes.Dialogmoter}
          activePage={activePage}
        />
        <MenuItem
          sykmeldtId={sykmeldtId}
          page={RootPages.Oppfolgingsplaner}
          route={routes.Oppfolgingsplaner}
          activePage={activePage}
        />
        <MenuItem
          sykmeldtId={sykmeldtId}
          page={RootPages.Meldinger}
          route={routes.Meldinger}
          activePage={activePage}
        />
        <MenuItem
          sykmeldtId={sykmeldtId}
          page={RootPages.DineSykmeldte}
          route={routes.DineSykmeldte}
          activePage={activePage}
        />
      </ul>
    </nav>
  );
}
