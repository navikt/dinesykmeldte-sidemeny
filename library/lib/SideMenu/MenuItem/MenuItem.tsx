import React, { ReactElement } from 'react'
import { Button } from '@navikt/ds-react'
import cn from 'clsx'

import { Pages, RootPages, RouteVariant } from '../../types'

import { isChildPageActive, pageToIcon, pageToUrl, parentToChild } from './MenuItemUtils'
import DynamicIcon from './DynamicIcon'
import styles from './MenuItem.module.css'
import { SubMenuItem } from './SubMenuItem'

interface Props {
    sykmeldtId: string
    page: RootPages
    activePage: Pages
    route: RouteVariant
}

function MenuItem({ sykmeldtId, page, activePage, route }: Props): ReactElement | null {
    // Hide if route is sett to false
    if (typeof route === 'boolean') return null
    // Also hide if custom route with hidden true
    if (typeof route !== 'number' && route.hide) return null

    const Icon = pageToIcon(page)
    const childPageActive = isChildPageActive(page, activePage)

    if (typeof route === 'number') {
        const notifications = route
        return (
            <>
                <li className={styles.menuItem}>
                    <Button
                        className={cn(styles.menuItemButton, {
                            [styles.activeItem]: activePage === page,
                            [styles.notifyingItem]: notifications > 0,
                        })}
                        href={pageToUrl(page, sykmeldtId)}
                        as="a"
                        variant="tertiary"
                        size="small"
                        icon={<DynamicIcon Icon={Icon} childActive={childPageActive} notifications={notifications} />}
                    >
                        {page}
                    </Button>
                </li>
                {childPageActive && <SubMenuItem page={parentToChild(page)} />}
            </>
        )
    }

    return (
        <>
            <li className={styles.menuItem}>
                <Button
                    className={cn(styles.menuItemButton, {
                        [styles.activeItem]: activePage === page,
                        [styles.notifyingItem]: route.notifications > 0,
                    })}
                    as={route.internalRoute}
                    variant="tertiary"
                    size="small"
                    icon={<DynamicIcon Icon={Icon} childActive={childPageActive} notifications={route.notifications} />}
                >
                    {page}
                </Button>
            </li>
            {childPageActive && <SubMenuItem page={parentToChild(page)} />}
        </>
    )
}

export default MenuItem
