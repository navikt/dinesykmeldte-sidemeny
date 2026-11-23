import { Box, Hide, HStack, Page, Show } from "@navikt/ds-react";
import cn from "clsx";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

import { ExpandableMobileMenu } from "../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu";
import styles from "./PageContainer.module.css";
import PageHeader, { type HeaderTitle } from "./PageHeader/PageHeader";

type PageContainerProps = {
  /* You can opt out of the header by explicitly setting it to false. This will be removed in the future. */
  header: HeaderTitle | false;
  headerRight?: ReactNode;
  className?: string;
} & SykmeldtNavigation;

// Either both sykmeldt and navigation needs to be provided, or none of them
type SykmeldtNavigation =
  | {
      sykmeldt: {
        navn: string;
        fnr: string;
      } | null;
      navigation: ReactNode;
    }
  | {
      sykmeldt?: never;
      navigation?: never;
    };

export const PageContainer = ({
  header,
  headerRight,
  sykmeldt,
  navigation,
  children,
  className,
}: PropsWithChildren<PageContainerProps>): ReactElement => {
  return (
    <PageHeader
      header={header}
      headerRight={headerRight}
      hideHeaderOnMobile={!!navigation}
    >
      {navigation && sykmeldt ? (
        <Show below="lg" asChild>
          <ExpandableMobileMenu
            headerTitle={header ? header.title : sykmeldt.navn}
            sykmeldtFnr={sykmeldt.fnr}
            className={styles.mobileMenu}
          >
            {navigation}
          </ExpandableMobileMenu>
        </Show>
      ) : null}

      <Page.Block width="2xl" gutters className={cn(styles.root, className)}>
        <HStack justify="center" wrap={false}>
          {navigation ? (
            <Hide below="lg" className={styles.desktopMenu}>
              {navigation}
            </Hide>
          ) : (
            <SideMenuFiller />
          )}
          <section className={styles.pageContainer}>{children}</section>
          <SideMenuFiller />
        </HStack>
      </Page.Block>
    </PageHeader>
  );
};

const SideMenuFiller = (): ReactElement => (
  <Hide below="lg" asChild>
    <Box
      flexBasis={{ xs: "5%", xl: "25%" }}
      flexGrow={{ xs: "0", xl: "1" }}
      flexShrink="0"
      maxWidth="15rem"
      className={styles.sideMenuFiller}
    />
  </Hide>
);
