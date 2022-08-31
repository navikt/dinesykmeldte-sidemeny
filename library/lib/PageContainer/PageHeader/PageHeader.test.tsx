import React from 'react';
import { Bandage } from '@navikt/ds-icons';

import { render, within, screen } from '../../../test/testUtils';

import PageHeader from './PageHeader';

describe('PageWrapper', () => {
    it('should render content', () => {
        render(
            <PageHeader header={{ title: 'Test Title', Icon: Bandage, subtitle: 'This is a subtitle' }}>
                <div>These are children</div>
            </PageHeader>,
        );

        const header = within(screen.getByRole('region', { name: 'Test Title' }));

        expect(header.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
        expect(header.getByText('This is a subtitle')).toBeInTheDocument();
        expect(header.queryByRole('combobox')).not.toBeInTheDocument();
    });
});
