import { ArrowLeftIcon, type BandageIcon } from "@navikt/aksel-icons";
import type { ReactElement } from "react";

import { NotifcationDot } from "../../NotificationDot/NotificationDot";

interface Props {
  Icon: typeof BandageIcon;
  childActive: boolean;
  notifications: number;
}

function DynamicIcon({
  Icon,
  childActive,
  notifications,
}: Props): ReactElement {
  if (childActive) {
    return <ArrowLeftIcon role="img" aria-hidden />;
  } else if (notifications > 0) {
    return <NotifcationDot notifications={notifications} />;
  }

  return <Icon role="img" aria-hidden />;
}

export default DynamicIcon;
