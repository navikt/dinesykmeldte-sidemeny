import React, { PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import { ExpandableMobileMenu } from '../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu';

import styles from './PageContainer.module.css';

export type PageContainerProps = PropsWithChildren<{
    sykmeldtNavn: string;
    sykmeldtFnr: string;
    className?: string;
    navigation?: ReactNode;
}>;

export const PageContainer = ({
    sykmeldtNavn,
    sykmeldtFnr,
    navigation,
    children,
    className,
}: PageContainerProps): JSX.Element => {
    return (
        <>
            {navigation ? (
                <ExpandableMobileMenu
                    sykmeldtNavn={sykmeldtNavn}
                    sykmeldtFnr={sykmeldtFnr}
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
