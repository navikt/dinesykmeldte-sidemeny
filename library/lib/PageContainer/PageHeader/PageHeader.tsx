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
    title: HeaderTitle;
    headerExtra?: ReactNode;
}

function PageHeader({ title, headerExtra, children }: PropsWithChildren<Props>): JSX.Element {
    return (
        <>
            <div className={cn(styles.headerRoot)}>
                <section className={cn(styles.wrapper)} aria-labelledby="page-header">
                    <div className={styles.heading}>
                        {title.Icon && <title.Icon />}
                        <div>
                            <Heading id="page-header" level="1" size="xlarge">
                                {title.title}
                            </Heading>
                            <BodyShort className={styles.subtitle}>{title.subtitle}</BodyShort>
                        </div>
                    </div>
                    <div className={styles.headerExtra}>{headerExtra}</div>
                </section>
            </div>
            {children}
        </>
    );
}

export default PageHeader;
