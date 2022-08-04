import { Button, Label } from '@navikt/ds-react';
import React from 'react';
import cn from 'classnames';

import { Pages, RootPages, RouteVariant } from '../../types';

import { isChildPageActive, pageToIcon, pageToUrl, parentToChild } from './MenuItemUtils';
import DynamicIcon from './DynamicIcon';
import styles from './MenuItem.module.css';
import { SubMenuItem } from './SubMenuItem';

interface Props {
    sykmeldtId: string;
    page: RootPages;
    activePage: Pages;
    route: RouteVariant;
}

function MenuItem({ sykmeldtId, page, activePage, route }: Props): JSX.Element | null {
    // Hide if route is sett to false
    if (typeof route === 'boolean') return null;
    // Also hide if custom route with hidden true
    if (typeof route !== 'number' && route.hide) return null;

    const Icon = pageToIcon(page);
    const childPageActive = isChildPageActive(page, activePage);

    if (typeof route === 'number') {
        const notifications = route;
        return (
            <>
                <li className={styles.menuItem}>
                    <Button
                        className={cn({
                            [styles.activeItem]: activePage === page,
                            [styles.notifyingItem]: notifications > 0,
                        })}
                        href={pageToUrl(page, sykmeldtId)}
                        as="a"
                        variant="tertiary"
                        size="small"
                    >
                        <DynamicIcon Icon={Icon} childActive={childPageActive} notifications={notifications} />
                        <Label size="small">{page}</Label>
                    </Button>
                </li>
                {childPageActive && <SubMenuItem page={parentToChild(page)} />}
            </>
        );
    }

    return (
        <>
            <li aria-labelledby={page} className={styles.menuItem}>
                {
                    <route.internalRoute
                        className={cn('navds-button navds-button--tertiary navds-button--small', {
                            [styles.activeItem]: activePage === page,
                            [styles.notifyingItem]: route.notifications > 0,
                        })}
                    >
                        <span className="navds-button__inner navds-body-short">
                            <DynamicIcon
                                Icon={Icon}
                                childActive={childPageActive}
                                notifications={route.notifications}
                            />
                            <Label size="small">{page}</Label>
                        </span>
                    </route.internalRoute>
                }
            </li>
            {childPageActive && <SubMenuItem page={parentToChild(page)} />}
        </>
    );
}

export default MenuItem;
