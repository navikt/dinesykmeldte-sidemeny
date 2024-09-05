import React, { ReactElement } from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { DecoratorComponentsReact, fetchDecoratorReact } from '@navikt/nav-dekoratoren-moduler/ssr'

const getDocumentParameter = (initialProps: DocumentInitialProps, name: string): string => {
    return initialProps.head?.find((element) => element?.props?.name === name)?.props?.content
}

interface Props {
    Decorator: DecoratorComponentsReact
    language: string
}

class MyDocument extends Document<Props> {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & Props> {
        const initialProps = await Document.getInitialProps(ctx)

        const Decorator = await fetchDecoratorReact({
            env: 'prod',
            params: {
                context: 'arbeidsgiver',
            },
        })

        const language = getDocumentParameter(initialProps, 'lang')

        return { ...initialProps, Decorator, language }
    }

    render(): ReactElement {
        const { Decorator, language } = this.props

        return (
            <Html lang={language || 'no'}>
                <Head>
                    <Decorator.HeadAssets />
                </Head>
                <body>
                    <Decorator.Header />
                    <Main />
                    <Decorator.Footer />
                    <Decorator.Scripts />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
