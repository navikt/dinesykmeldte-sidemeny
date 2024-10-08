import React, { PropsWithChildren, ReactElement } from 'react'
import { Accordion, BodyShort, Heading } from '@navikt/ds-react'
import { PersonIcon } from '@navikt/aksel-icons'
import cn from 'clsx'

import { addSpaceAfterEverySixthCharacter } from '../../utils/stringUtils'

import styles from './ExpandableMobileMenu.module.css'

interface Props {
    headerTitle: string
    sykmeldtFnr: string
    className?: string
}

export const ExpandableMobileMenu = ({
    headerTitle,
    sykmeldtFnr,
    children,
    className,
}: PropsWithChildren<Props>): ReactElement => {
    return (
        <Accordion className={cn(styles.accordionMobileRoot, className)}>
            <Accordion.Item>
                <Accordion.Header id={`sykmeldt-accordion-header-${sykmeldtFnr}`}>
                    <div className={styles.accordionHeaderContent}>
                        <PersonIcon className={styles.peopleIcon} aria-hidden />
                        <div>
                            <Heading className={styles.heading} level="1" size="xlarge">
                                {headerTitle}
                            </Heading>
                            <BodyShort>{addSpaceAfterEverySixthCharacter(sykmeldtFnr)}</BodyShort>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>{children}</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    )
}
