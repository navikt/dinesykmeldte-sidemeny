import cn from 'clsx'
import { Label } from '@navikt/ds-react'
import React, { ReactElement } from 'react'

import { ChildPages } from '../../types'

import { pageToIcon } from './MenuItemUtils'
import styles from './SubMenuItem.module.css'

export function SubMenuItem({ page }: { page: ChildPages }): ReactElement {
    const Icon = pageToIcon(page)

    return (
        <li className={styles.subMenuItem}>
            <div className={cn('navds-button--small', styles.activeSubItem)}>
                <Icon role="img" aria-hidden />
                <Label size="small">{page}</Label>
            </div>
        </li>
    )
}

export default SubMenuItem
