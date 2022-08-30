import React, { PropsWithChildren, ReactNode } from 'react';
import cn from 'clsx';

import { ExpandableMobileMenu } from '../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu';

import styles from './PageContainer.module.css';

export type PageContainerProps = PropsWithChildren<{
    sykmeldt?: {
        navn: string;
        fnr: string;
    };
    className?: string;
    navigation?: ReactNode;
}>;

export const PageContainer = ({ sykmeldt, navigation, children, className }: PageContainerProps): JSX.Element => {
    return (
        <>
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
        </>
    );
};
