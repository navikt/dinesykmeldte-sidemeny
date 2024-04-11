import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Page } from '@navikt/ds-react'

import { ExpandableMobileMenu } from '../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu'

import PageHeader, { HeaderTitle } from './PageHeader/PageHeader'
import styles from './PageContainer.module.css'

type PageContainerProps = {
    /* You can opt out of the header by explicitly setting it to false. This will be removed in the future. */
    header: HeaderTitle
    headerRight?: ReactNode
    footer?: ReactNode
    className?: string
} & SykmeldtNavigation

// Either both sykmeldt and navigation needs to be provided, or none of them
type SykmeldtNavigation =
    | {
          sykmeldt: {
              navn: string
              fnr: string
          } | null
          navigation: ReactNode
      }
    | {
          sykmeldt?: never
          navigation?: never
      }

export const PageContainer = ({
    header,
    headerRight,
    footer,
    sykmeldt,
    navigation,
    children,
    className,
}: PropsWithChildren<PageContainerProps>): ReactElement => {
    return (
        <Page
            className={className}
            footer={
                footer ? (
                    <Page.Block gutters width="xl" className={styles.pageContent}>
                        <section className={styles.content}>{footer}</section>
                    </Page.Block>
                ) : undefined
            }
            footerPosition="belowFold"
        >
            <PageHeader header={header} headerRight={headerRight} hideHeaderOnMobile={!!navigation} />
            {navigation && sykmeldt ? (
                <ExpandableMobileMenu
                    headerTitle={header ? header.title : sykmeldt.navn}
                    sykmeldtFnr={sykmeldt.fnr}
                    className={styles.mobileTopMenu}
                >
                    {navigation}
                </ExpandableMobileMenu>
            ) : null}
            <Page.Block width="xl" gutters className={styles.pageContent}>
                {navigation && <div className={styles.menuSidebar}>{navigation}</div>}
                <section className={styles.content}>{children}</section>
            </Page.Block>
        </Page>
    )
}
