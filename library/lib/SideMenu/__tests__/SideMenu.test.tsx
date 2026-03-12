import { describe, expect, it } from "vitest";

import { render, screen } from "../../../test/testUtils";
import { RootPages } from "../../types";
import { SideMenu } from "../SideMenu";

const defaultRoutes = {
  Sykmeldinger: 0,
  Soknader: 0,
  Meldinger: 0,
  Dialogmoter: 0,
  Oppfolgingsplaner: 0,
  DineSykmeldte: 0,
};

describe("SideMenu", () => {
  it("should render stilling when provided", () => {
    render(
      <SideMenu
        sykmeldtName="Kreansen"
        sykmeldtId="123"
        activePage={RootPages.Sykmeldinger}
        routes={defaultRoutes}
        stilling={{ tittel: "Lærer", prosent: 50 }}
      />,
    );

    expect(screen.getByText("Lærer 50 %")).toBeInTheDocument();
  });

  it("should not render stilling when not provided", () => {
    render(
      <SideMenu
        sykmeldtName="Kreansen"
        sykmeldtId="123"
        activePage={RootPages.Sykmeldinger}
        routes={defaultRoutes}
      />,
    );

    expect(screen.queryByText(/\d+ %/)).not.toBeInTheDocument();
  });

  it("should render heading with possessive name", () => {
    render(
      <SideMenu
        sykmeldtName="Kreansen"
        sykmeldtId="123"
        activePage={RootPages.Sykmeldinger}
        routes={defaultRoutes}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Kreansens sideoversikt" }),
    ).toBeInTheDocument();
  });
});
