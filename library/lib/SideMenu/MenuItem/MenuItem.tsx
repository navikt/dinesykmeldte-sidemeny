import { Button, Label } from '@navikt/ds-react';
import React from 'react';
import cn from 'classnames';

import { ChildPages, Pages, RootPages, RouteVariant } from '../../types';
import { cleanId } from '../../utils';

import { isChildPageActive, pageToIcon, pageToUrl, parentToChild } from './MenuItemUtils';
import DynamicIcon from './DynamicIcon';
import styles from './MenuItem.module.css';

interface Props {
    page: RootPages;
    activePage: Pages;
    route: RouteVariant;
}

function MenuItem({ page, activePage, route }: Props): JSX.Element {
    const Icon = pageToIcon(page);
    const childPageActive = isChildPageActive(page, activePage);

    if (typeof route === 'number') {
        const notifications = route;
        return (
            <>
                <li>
                    <Button
                        className={cn({ [styles.notifyingItem]: notifications > 0 })}
                        href={pageToUrl(page)}
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
            <li aria-labelledby={page}>
                {
                    <route.internalRoute className="navds-button navds-button--tertiary navds-button--small">
                        <span className="navds-button__inner navds-body-short">
                            <Icon />
                            {page}
                        </span>
                    </route.internalRoute>
                }
            </li>
            {childPageActive && <SubMenuItem page={parentToChild(page)} />}
        </>
    );
}

function SubMenuItem({ page }: { page: ChildPages }): JSX.Element {
    const id = cleanId(page);
    const Icon = pageToIcon(page);

    return (
        <li aria-labelledby={id}>
            <div className={cn('navds-button--small', styles.activeSubItem)}>
                <Icon />
                <Label id={id} size="small">
                    {page}
                </Label>
            </div>
        </li>
    );
}

export default MenuItem;
