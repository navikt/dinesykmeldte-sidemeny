import cn from 'clsx';
import { Label } from '@navikt/ds-react';
import React from 'react';

import { ChildPages } from '../../types';
import { cleanId } from '../../utils';

import { pageToIcon } from './MenuItemUtils';
import styles from './SubMenuItem.module.css';

export function SubMenuItem({ page }: { page: ChildPages }): JSX.Element {
    const id = cleanId(page);
    const Icon = pageToIcon(page);

    return (
        <li aria-labelledby={id} className={styles.subMenuItem}>
            <div className={cn('navds-button--small', styles.activeSubItem)}>
                <Icon />
                <Label id={id} size="small">
                    {page}
                </Label>
            </div>
        </li>
    );
}

export default SubMenuItem;
