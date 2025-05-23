import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from '../../components/button/PrimaryButton';

describe('PrimaryButton', () => {
    it('renders button with correct text', () => {
        render(<PrimaryButton>Click Me</PrimaryButton>);
        expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<PrimaryButton onClick={handleClick}>Click Me</PrimaryButton>);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('disables button when disabled prop is true', () => {
        render(<PrimaryButton disabled>Disabled Button</PrimaryButton>);
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
});