import React from 'react'
import cn from 'clsx'

import styles from './NotifcationDot.module.css'

export interface NotifcationDotProps {
    notifications: number
    tooltip?: string
    absolute?: boolean
}

export function NotifcationDot({ notifications, tooltip, absolute }: NotifcationDotProps): JSX.Element {
    return (
        <div className={cn(styles.notifcationDot, { [styles.absolute]: absolute })} title={tooltip}>
            {notifications}
        </div>
    )
}
