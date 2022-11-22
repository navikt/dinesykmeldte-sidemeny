import React from 'react';
import { Back, Bandage } from '@navikt/ds-icons';

import { NotifcationDot } from '../../NotificationDot/NotificationDot';

interface Props {
    Icon: typeof Bandage;
    childActive: boolean;
    notifications: number;
}

function DynamicIcon({ Icon, childActive, notifications }: Props): JSX.Element {
    if (childActive) {
        return <Back role="img" aria-hidden />;
    } else if (notifications > 0) {
        return <NotifcationDot notifications={notifications} />;
    }

    return <Icon role="img" aria-hidden />;
}

export default DynamicIcon;
