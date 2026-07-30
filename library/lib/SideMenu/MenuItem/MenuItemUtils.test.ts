import { describe, expect, it } from "vitest";

import { ChildPages, type Pages, RootPages } from "../../types";

import { isChildPageActive, pageToUrl, parentToChild } from "./MenuItemUtils";

const sykmeldtId = "test-id";

describe("pageToUrl", () => {
  it.each([
    [RootPages.DineSykmeldte, "/arbeidsgiver/sykmeldte"],
    [
      RootPages.Sykmeldinger,
      `/arbeidsgiver/sykmeldte/sykmeldt/${sykmeldtId}/sykmeldinger`,
    ],
    [
      RootPages.Soknader,
      `/arbeidsgiver/sykmeldte/sykmeldt/${sykmeldtId}/soknader`,
    ],
    [
      RootPages.Meldinger,
      `/arbeidsgiver/sykmeldte/sykmeldt/${sykmeldtId}/meldinger`,
    ],
    [RootPages.Dialogmoter, `/syk/dialogmoter/arbeidsgiver/${sykmeldtId}`],
    [RootPages.Oppfolgingsplaner, `/syk/oppfolgingsplan/${sykmeldtId}`],
  ])("should return the correct url for %s", (page, expectedUrl) => {
    expect(pageToUrl(page, sykmeldtId)).toBe(expectedUrl);
  });

  it("should cover every root page", () => {
    expect(Object.values(RootPages)).toHaveLength(6);
  });
});

describe("parentToChild", () => {
  it.each([
    [RootPages.Sykmeldinger, ChildPages.Sykmelding],
    [RootPages.Soknader, ChildPages.Soknad],
    [RootPages.Meldinger, ChildPages.Melding],
    [RootPages.Dialogmoter, ChildPages.Dialogmote],
    [RootPages.Oppfolgingsplaner, ChildPages.Oppfolgingsplan],
  ])("should map %s to its child page", (page, expectedChild) => {
    expect(parentToChild(page)).toBe(expectedChild);
  });

  it("should throw for DineSykmeldte, which has no children", () => {
    expect(() => parentToChild(RootPages.DineSykmeldte)).toThrow(
      "DineSykmeldte root page has no children",
    );
  });
});

describe("isChildPageActive", () => {
  it.each([
    [RootPages.Sykmeldinger, ChildPages.Sykmelding],
    [RootPages.Soknader, ChildPages.Soknad],
    [RootPages.Meldinger, ChildPages.Melding],
    [RootPages.Dialogmoter, ChildPages.Dialogmote],
    [RootPages.Oppfolgingsplaner, ChildPages.Oppfolgingsplan],
  ])("should be active when %s has its own child page as active page", (page, activePage: Pages) => {
    expect(isChildPageActive(page, activePage)).toBe(true);
    expect(isChildPageActive(page, RootPages.DineSykmeldte)).toBe(false);
  });

  it("should never be active for DineSykmeldte", () => {
    expect(
      isChildPageActive(RootPages.DineSykmeldte, ChildPages.Sykmelding),
    ).toBe(false);
  });
});
