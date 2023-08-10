import React from 'react';
import { ArrowLeftIcon, BandageIcon } from '@navikt/aksel-icons';

import { NotifcationDot } from '../../NotificationDot/NotificationDot';

interface Props {
    Icon: typeof BandageIcon;
    childActive: boolean;
    notifications: number;
}

function DynamicIcon({ Icon, childActive, notifications }: Props): JSX.Element {
    if (childActive) {
        return <ArrowLeftIcon role="img" aria-hidden />;
    } else if (notifications > 0) {
        return <NotifcationDot notifications={notifications} />;
    }

    return <Icon role="img" aria-hidden />;
}

export default DynamicIcon;
