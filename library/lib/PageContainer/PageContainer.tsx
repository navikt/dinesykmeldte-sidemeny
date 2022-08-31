import React, { PropsWithChildren, ReactNode } from 'react';
import cn from 'clsx';

import { ExpandableMobileMenu } from '../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu';

import styles from './PageContainer.module.css';
import PageHeader, { HeaderTitle } from './PageHeader/PageHeader';

type PageContainerProps = {
    header: HeaderTitle;
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
}: PropsWithChildren<PageContainerProps>): JSX.Element => {
    return (
        <PageHeader header={header} headerRight={headerRight}>
            {navigation && sykmeldt ? (
                <ExpandableMobileMenu
                    sykmeldtNavn={sykmeldt.navn}
                    sykmeldtFnr={sykmeldt.fnr}
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
