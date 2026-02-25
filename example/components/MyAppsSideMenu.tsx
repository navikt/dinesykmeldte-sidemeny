import {
  ChildPages,
  type Pages,
  RootPages,
  SideMenu,
} from "@navikt/dinesykmeldte-sidemeny";
import Link from "next/link";
import type { ReactElement } from "react";

interface Props {
  value: string;
}

function MyAppsSideMenu({ value }: Props): ReactElement {
  return (
    <SideMenu
      sykmeldtName="Jon Kåre"
      sykmeldtId="123456789"
      activePage={routeToEnum(value)}
      routes={{
        Soknader: 0,
        Sykmeldinger: 1,
        Meldinger: 2,
        Dialogmoter: {
          notifications: 3,
          internalRoute: ({ children, ...rest }) => (
            <Link href="/some/route" passHref legacyBehavior>
              <a {...rest}>{children}</a>
            </Link>
          ),
        },
        Oppfolgingsplaner: {
          notifications: 0,
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

function routeToEnum(value: string): Pages {
  switch (value) {
    case "sykmeldinger":
      return RootPages.Sykmeldinger;
    case "soknader":
      return RootPages.Soknader;
    case "meldinger":
      return RootPages.Meldinger;
    case "dialogmoter":
      return RootPages.Dialogmoter;
    case "oppfolgingsplaner":
      return RootPages.Oppfolgingsplaner;
    case "sykmelding":
      return ChildPages.Sykmelding;
    case "soknad":
      return ChildPages.Soknad;
    case "melding":
      return ChildPages.Melding;
    case "dialogmote":
      return ChildPages.Dialogmote;
    case "oppfolgingsplan":
      return ChildPages.Oppfolgingsplan;
    default:
      throw new Error(`Unknown route: ${value}`);
  }
}

export default MyAppsSideMenu;
