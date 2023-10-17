import React from 'react'
import { describe, it, expect } from 'vitest'
import { BandageIcon } from '@navikt/aksel-icons'

import { render, within, screen } from '../../../test/testUtils'

import PageHeader from './PageHeader'

describe('PageWrapper', () => {
    it('should render content', () => {
        render(
            <PageHeader header={{ title: 'Test Title', Icon: BandageIcon, subtitle: 'This is a subtitle' }}>
                <div>These are children</div>
            </PageHeader>,
        )

        const header = within(screen.getByRole('region', { name: 'Test Title' }))

        expect(header.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument()
        expect(header.getByText('This is a subtitle')).toBeInTheDocument()
        expect(header.queryByRole('combobox')).not.toBeInTheDocument()
    })

    it('should be able to opt out of header by setting it to false', () => {
        render(
            <PageHeader header={false}>
                <div>These are children</div>
            </PageHeader>,
        )

        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    })
})
