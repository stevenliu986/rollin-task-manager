import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PrimaryTitle from '../../components/title/PrimaryTitle';

vi.mock('antd', async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod,
        Typography: {
            Title: ({ children, style, ...props }: any) => (
                <h1 style={style} data-testid="antd-title" {...props}>
                    {children}
                </h1>
            )
        }
    };
});

describe('PrimaryTitle Component', () => {
    it('renders children with default styles', () => {
        render(<PrimaryTitle>Test Title</PrimaryTitle>);

        const title = screen.getByTestId('antd-title');

        expect(title).toHaveTextContent('Test Title');
        expect(title).toHaveStyle({
            textTransform: 'uppercase',
            fontSize: '2rem',
            fontWeight: '700',
            color: '#252525',
            margin: '0 0 1rem 0'
        });
    });

    it('merges custom styles with default styles', () => {
        const customStyle = {
            color: '#FF0000',
            marginBottom: '2rem'
        };

        render(
            <PrimaryTitle style={customStyle}>
                Styled Title
            </PrimaryTitle>
        );

        const title = screen.getByTestId('antd-title');

        expect(title).toHaveStyle({
            color: '#FF0000',
            marginBottom: '2rem'
        });

        expect(title).toHaveStyle({
            textTransform: 'uppercase',
            fontSize: '2rem'
        });
    });

    it('passes through additional props to Typography.Title', () => {
        render(
            <PrimaryTitle
                className="custom-class"
                id="main-title"
                aria-label="Primary Title"
            >
                Props Test
            </PrimaryTitle>
        );

        const title = screen.getByTestId('antd-title');

        expect(title).toHaveAttribute('class', 'custom-class');
        expect(title).toHaveAttribute('id', 'main-title');
        expect(title).toHaveAttribute('aria-label', 'Primary Title');
    });

    it('renders with correct heading level', () => {
        render(<PrimaryTitle level={2}>Heading Level</PrimaryTitle>);

        const title = screen.getByTestId('antd-title');
        expect(title.tagName).toBe('H1');
    });

    it('matches snapshot with default props', () => {
        const { asFragment } = render(
            <PrimaryTitle>Snapshot Test</PrimaryTitle>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches snapshot with custom styles', () => {
        const { asFragment } = render(
            <PrimaryTitle style={{ color: 'blue', fontSize: '3rem' }}>
                Styled Snapshot
            </PrimaryTitle>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});