import React from 'react';
import { Back, Bandage } from '@navikt/ds-icons';

import { NotifcationDot } from '../../NotificationDot/NotificationDot';

interface Props {
    Icon: typeof Bandage;
    childActive: boolean;
    notifications: number;
}

function DynamicIcon({ Icon, childActive, notifications }: Props) {
    if (childActive) {
        return <Back />;
    } else if (notifications > 0) {
        return <NotifcationDot notifications={notifications} />;
    }

    return <Icon />;
}

export default DynamicIcon;
