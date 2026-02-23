import "../styles/globals.css";
import "@navikt/dinesykmeldte-sidemeny/dist/dinesykmeldte-sidemeny.css";

import { setBreadcrumbs } from "@navikt/nav-dekoratoren-moduler";
import type { AppProps } from "next/app";
import { type ReactElement, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    setBreadcrumbs([
      { title: "Bread", url: "/" },
      { title: "Crumbs", url: "/" },
      { title: "For", url: "/" },
      { title: "Testing", url: "/" },
    ]);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
