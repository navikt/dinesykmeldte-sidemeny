import React, { PropsWithChildren } from 'react';
import { Accordion, BodyShort, Heading } from '@navikt/ds-react';
import { People } from '@navikt/ds-icons';

import { addSpaceAfterEverySixthCharacter } from '../../utils/stringUtils';

import styles from './ExpandableMobileMenu.module.css';

interface Props {
    sykmeldtNavn: string;
    sykmeldtFnr: string;
    className?: string;
}

export const ExpandableMobileMenu = ({
    sykmeldtNavn,
    sykmeldtFnr,
    children,
    className,
}: PropsWithChildren<Props>): JSX.Element => {
    return (
        <Accordion className={className}>
            <Accordion.Item>
                <Accordion.Header id={`sykmeldt-accordion-header-${sykmeldtFnr}`}>
                    <div className={styles.accordionHeaderContent}>
                        <People className={styles.peopleIcon} />
                        <div>
                            <Heading className={styles.heading} size="xlarge" level="3">
                                {sykmeldtNavn}
                            </Heading>
                            <BodyShort>{addSpaceAfterEverySixthCharacter(sykmeldtFnr)}</BodyShort>
                        </div>
                    </div>
                </Accordion.Header>
                <Accordion.Content className={styles.accordionContent}>{children}</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    );
};
