import React, { PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';

import styles from './PageContainer.module.css';

export type PageContainerProps = PropsWithChildren<{
    className?: string;
    navigation?: ReactNode;
}>;

export const PageContainer = ({ navigation, children, className }: PageContainerProps): JSX.Element => {
    return (
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
    );
};
