import '../styles/globals.css'
import '@navikt/dinesykmeldte-sidemeny/dist/dinesykmeldte-sidemeny.css'

import type { AppProps } from 'next/app'
import { ReactElement, useEffect } from 'react'
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    useEffect(() => {
        setBreadcrumbs([
            { title: 'Bread', url: '/' },
            { title: 'Crumbs', url: '/' },
            { title: 'For', url: '/' },
            { title: 'Testing', url: '/' },
        ])
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
