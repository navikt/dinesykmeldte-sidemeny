import cn from "clsx";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

import { ExpandableMobileMenu } from "../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu";
import type { Stilling } from "../types";
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
        stilling?: Stilling;
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
        <ExpandableMobileMenu
          headerTitle={header ? header.title : sykmeldt.navn}
          sykmeldtFnr={sykmeldt.fnr}
          stilling={sykmeldt.stilling}
          className={styles.mobileMenuAccordion}
        >
          {navigation}
        </ExpandableMobileMenu>
      ) : null}

      <div className={cn(styles.rootContainer, className)}>
        <div className={styles.content}>
          {navigation ? (
            <div className={styles.desktopMenuContainer}>{navigation}</div>
          ) : (
            <div className={styles.sideMenuFiller} />
          )}
          <section className={styles.pageContainer}>{children}</section>
          <div className={styles.sideMenuFiller} />
        </div>
      </div>
    </PageHeader>
  );
};
