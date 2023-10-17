import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import cn from 'clsx'

import { ExpandableMobileMenu } from '../SideMenu/ExpandableMobileMenu/ExpandableMobileMenu'

import PageHeader, { HeaderTitle } from './PageHeader/PageHeader'
import styles from './PageContainer.module.css'

type PageContainerProps = {
    /* You can opt out of the header by explicitly setting it to false. This will be removed in the future. */
    header: HeaderTitle | false
    headerRight?: ReactNode
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
    sykmeldt,
    navigation,
    children,
    className,
}: PropsWithChildren<PageContainerProps>): ReactElement => {
    return (
        <PageHeader header={header} headerRight={headerRight} hideHeaderOnMobile={!!navigation}>
            {navigation && sykmeldt ? (
                <ExpandableMobileMenu
                    sykmeldtNavn={sykmeldt.navn}
                    sykmeldtFnr={sykmeldt.fnr}
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
        </PageHeader>
    )
}
