import '../styles/globals.css';
import type { AppProps } from 'next/app';

import '@navikt/dinesykmeldte-sidemeny/dist/style.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default MyApp;
