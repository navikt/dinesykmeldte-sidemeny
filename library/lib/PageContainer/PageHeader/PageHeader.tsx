import { BodyShort, Heading } from '@navikt/ds-react';
import React, { PropsWithChildren, ReactNode } from 'react';
import { Bandage } from '@navikt/ds-icons';
import cn from 'clsx';

import styles from './PageHeader.module.css';

export type HeaderTitle = {
    Icon?: typeof Bandage;
    title: string;
    subtitle?: ReactNode;
};

interface Props {
    header: HeaderTitle;
    headerRight?: ReactNode;
}

function PageHeader({ header, headerRight, children }: PropsWithChildren<Props>): JSX.Element {
    return (
        <>
            <div className={cn(styles.headerRoot)}>
                <section className={cn(styles.wrapper)} aria-labelledby="page-header">
                    <div className={styles.heading}>
                        {header.Icon && <header.Icon />}
                        <div>
                            <Heading id="page-header" level="1" size="xlarge">
                                {header.title}
                            </Heading>
                            <BodyShort className={styles.subtitle}>{header.subtitle}</BodyShort>
                        </div>
                    </div>
                    {headerRight && <div className={styles.headerExtra}>{headerRight}</div>}
                </section>
            </div>
            {children}
        </>
    );
}

export default PageHeader;
