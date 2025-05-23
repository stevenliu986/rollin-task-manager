import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskHeader from '../../components/task/TaskHeader';
import type { ITask } from '../../components/task/AddTask';

vi.mock('../../assets/images/Leading Icon.png', () => ({
    default: 'test-leading-icon.png'
}));

vi.mock('antd', async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod,
        Button: ({ children, style, ...props }: any) => (
            <button style={style} {...props} data-testid="ant-button">
                {children}
            </button>
        )
    };
});

describe('TaskHeader Component', () => {
    const mockTask: ITask = {
        id: 1,
        title: 'Test Task',
        description: 'Test Description',
        complete: false,
        created: '2023-01-01',
        due: '2023-12-31T00:00:00.000Z'
    };

    const mockCompletedTask: ITask = {
        ...mockTask,
        complete: true
    };

    it('renders status button correctly for incomplete task', () => {
        render(<TaskHeader taskDetail={mockTask} />);

        const statusButton = screen.getAllByTestId('ant-button')[0];
        expect(statusButton).toHaveTextContent('In Progress');
        expect(statusButton).toHaveStyle({
            backgroundColor: '#196BE5',
            border: '1px solid #196BE5'
        });
    });

    it('renders status button correctly for completed task', () => {
        render(<TaskHeader taskDetail={mockCompletedTask} />);

        const statusButton = screen.getAllByTestId('ant-button')[0];
        expect(statusButton).toHaveTextContent('Completed');
        expect(statusButton).toHaveStyle({
            backgroundColor: '#11a436',
            border: '1px solid #11a436'
        });
    });

    it('renders due date button when due date exists', () => {
        render(<TaskHeader taskDetail={mockTask} />);

        const dueButton = screen.getAllByTestId('ant-button')[1];
        expect(dueButton).toHaveTextContent('2023-12-31');
        expect(dueButton).toHaveStyle({
            backgroundColor: '#F5F5F5'
        });
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'leading-icon');
    });

    it('formats due date correctly by removing last 5 characters', () => {
        render(<TaskHeader taskDetail={{ ...mockTask, due: '2023-12-31T23:59:59.000Z' }} />);

        const dueButton = screen.getAllByTestId('ant-button')[1];
        expect(dueButton).toHaveTextContent('2023-12-31T23:59:59');
    });

    it('matches snapshot for incomplete task with due date', () => {
        const { asFragment } = render(<TaskHeader taskDetail={mockTask} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches snapshot for completed task without due date', () => {
        const { asFragment } = render(<TaskHeader taskDetail={mockCompletedTask} />);
        expect(asFragment()).toMatchSnapshot();
    });
});