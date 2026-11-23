import { describe, expect, it } from "vitest";

import { render, screen } from "../../test/testUtils";
import { PageContainer } from "./PageContainer";

import styles from "./PageHeader/PageHeader.module.css";

describe("PageContainer", () => {
  it("keeps the page header visible when the mobile menu cannot be shown", () => {
    render(
      <PageContainer
        header={{ title: "Test Title" }}
        navigation={<nav>Navigation</nav>}
        sykmeldt={null}
      >
        <div>Page content</div>
      </PageContainer>,
    );

    const header = screen.getByRole("region", {
      name: "Test Title",
    }).parentElement;

    expect(header).not.toHaveClass(styles.hideHeaderOnMobile);
  });
});
