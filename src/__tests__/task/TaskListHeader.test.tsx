import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskListHeader from '../../components/task/TaskListHeader';

describe('TaskListHeader Component', () => {
    const mockOnTabChange = vi.fn();

    beforeEach(() => {
        mockOnTabChange.mockClear();
    });

    it('renders both tabs with correct initial active state', () => {
        render(
            <TaskListHeader
                activeTab="inProgress"
                onTabChange={mockOnTabChange}
            />
        );

        const inProgressTab = screen.getByRole('tab', { name: 'In Progress' });
        const completedTab = screen.getByRole('tab', { name: 'Completed' });

        expect(inProgressTab).toBeInTheDocument();
        expect(completedTab).toBeInTheDocument();

        expect(inProgressTab).toHaveAttribute('aria-selected', 'true');
        expect(completedTab).toHaveAttribute('aria-selected', 'false');

        expect(inProgressTab).toHaveStyle({ color: '#FFF532' });
        expect(completedTab).toHaveStyle({ color: '#FFF' });
    });

    it('shows indicator bar for active tab', () => {
        render(
            <TaskListHeader
                activeTab="inProgress"
                onTabChange={mockOnTabChange}
            />
        );

        const indicator = screen.getByRole('tab', { name: 'In Progress' })
            .querySelector('div[aria-hidden="true"]');

        expect(indicator).toBeInTheDocument();
        expect(indicator).toHaveStyle({
            backgroundColor: '#FFF532',
            height: '2px'
        });
    });

    it('calls onTabChange when clicking a tab', () => {
        render(
            <TaskListHeader
                activeTab="inProgress"
                onTabChange={mockOnTabChange}
            />
        );

        const completedTab = screen.getByRole('tab', { name: 'Completed' });
        fireEvent.click(completedTab);

        expect(mockOnTabChange).toHaveBeenCalledTimes(1);
        expect(mockOnTabChange).toHaveBeenCalledWith('completed');
    });

    it('updates UI when activeTab prop changes', () => {
        const { rerender } = render(
            <TaskListHeader
                activeTab="inProgress"
                onTabChange={mockOnTabChange}
            />
        );

        expect(screen.getByRole('tab', { name: 'In Progress' }))
            .toHaveAttribute('aria-selected', 'true');

        rerender(
            <TaskListHeader
                activeTab="completed"
                onTabChange={mockOnTabChange}
            />
        );

        expect(screen.getByRole('tab', { name: 'Completed' }))
            .toHaveAttribute('aria-selected', 'true');
        expect(screen.getByRole('tab', { name: 'In Progress' }))
            .toHaveAttribute('aria-selected', 'false');
    });

    it('has proper accessibility attributes', () => {
        render(
            <TaskListHeader
                activeTab="inProgress"
                onTabChange={mockOnTabChange}
            />
        );

        const tablist = screen.getByRole('tablist');
        expect(tablist).toHaveAttribute('aria-label', 'Task status tabs');

        const inProgressTab = screen.getByRole('tab', { name: 'In Progress' });
        expect(inProgressTab).toHaveAttribute('aria-controls', 'inProgress-tabpanel');

        const completedTab = screen.getByRole('tab', { name: 'Completed' });
        expect(completedTab).toHaveAttribute('aria-controls', 'completed-tabpanel');
    });

    it('matches snapshot for inProgress active tab', () => {
        const { asFragment } = render(
            <TaskListHeader
                activeTab="inProgress"
                onTabChange={mockOnTabChange}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches snapshot for completed active tab', () => {
        const { asFragment } = render(
            <TaskListHeader
                activeTab="completed"
                onTabChange={mockOnTabChange}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});