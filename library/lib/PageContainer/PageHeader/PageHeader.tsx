import React, { ReactElement, ReactNode } from 'react'
import { Skeleton, BodyShort, Heading } from '@navikt/ds-react'
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
    header: HeaderTitle
    headerRight?: ReactNode
    hideHeaderOnMobile?: boolean
}

function PageHeader({ header, headerRight, hideHeaderOnMobile }: Props): ReactElement {
    return (
        <div
            className={cn('dinesykmeldte-sidemeny__header', styles.headerRoot, {
                [styles.hideHeaderOnMobile]: hideHeaderOnMobile,
            })}
        >
            <section className={cn(styles.wrapper)} aria-labelledby="page-header">
                <div className={styles.heading}>
                    {header.Icon && <header.Icon role="img" aria-hidden />}
                    <div>
                        <Heading id="page-header" level="1" size="xlarge">
                            {header.title}
                        </Heading>
                        {header.subtitle && <BodyShort className={styles.subtitle}>{header.subtitle}</BodyShort>}
                        {!header.subtitle && header.subtitleSkeleton && (
                            <Skeleton variant="text" width="100%" height="var(--a-font-size-heading-xlarge)" />
                        )}
                    </div>
                </div>
                {headerRight && <div className={styles.headerExtra}>{headerRight}</div>}
            </section>
        </div>
    )
}

export default PageHeader
