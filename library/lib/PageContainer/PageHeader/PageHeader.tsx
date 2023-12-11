import { BodyShort, Heading, Skeleton } from '@navikt/ds-react'
import React, { PropsWithChildren, ReactNode } from 'react'
import { BandageIcon } from '@navikt/aksel-icons'
import cn from 'clsx'

import styles from './PageHeader.module.css'

export type HeaderTitle = {
    Icon?: typeof BandageIcon
    title: string
    subtitle?: ReactNode
    subtitleSkeleton?: boolean
}

interface Props {
    header: HeaderTitle | false
    headerRight?: ReactNode
    hideHeaderOnMobile?: boolean
    ariaLabelledby?: string
}

function PageHeader({
    header,
    headerRight,
    hideHeaderOnMobile,
    children,
    ariaLabelledby,
}: PropsWithChildren<Props>): JSX.Element {
    return (
        <>
            {typeof header === 'object' && (
                <div
                    className={cn('dinesykmeldte-sidemeny__header', styles.headerRoot, {
                        [styles.hideHeaderOnMobile]: hideHeaderOnMobile,
                    })}
                >
                    <section
                        className={cn(styles.wrapper)}
                        aria-labelledby={ariaLabelledby ? ariaLabelledby : 'page-header'}
                    >
                        <div className={styles.heading}>
                            {header.Icon && <header.Icon role="img" aria-hidden />}
                            <div>
                                <Heading id={ariaLabelledby ? ariaLabelledby : 'page-header'} level="1" size="xlarge">
                                    {header.title}
                                </Heading>
                                {header.subtitle && (
                                    <BodyShort className={styles.subtitle}>{header.subtitle}</BodyShort>
                                )}
                                {!header.subtitle && header.subtitleSkeleton && (
                                    <Skeleton variant="text" width="100%" height="var(--a-font-size-heading-xlarge)" />
                                )}
                            </div>
                        </div>
                        {headerRight && <div className={styles.headerExtra}>{headerRight}</div>}
                    </section>
                </div>
            )}
            {children}
        </>
    )
}

export default PageHeader
