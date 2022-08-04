import '../styles/globals.css';
import '@navikt/dinesykmeldte-sidemeny/dist/style.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useEffect(() => {
        setBreadcrumbs([
            { title: 'Bread', url: '/' },
            { title: 'Crumbs', url: '/' },
            { title: 'For', url: '/' },
            { title: 'Testing', url: '/' },
        ]);
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
