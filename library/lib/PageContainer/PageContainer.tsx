import React, { PropsWithChildren, ReactNode } from 'react';

import styles from './PageContainer.module.css';

export type PageContainerProps = PropsWithChildren<{
    navigation?: ReactNode;
}>;

export const PageContainer = ({ navigation, children }: PageContainerProps): JSX.Element => {
    return (
        <div className={styles.rootContainer}>
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
    );
};
