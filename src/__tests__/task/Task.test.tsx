import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Task from '../../components/task/Task';
import type { ITask } from '../../components/task/AddTask';

vi.mock('./TaskHeader', () => ({
    default: ({ taskDetail }: { taskDetail: ITask }) => (
        <div data-testid="task-header">{taskDetail.title}</div>
    )
}));

vi.mock('./TaskDetail', () => ({
    default: ({ taskDetail }: { taskDetail: ITask }) => (
        <div data-testid="task-detail">{taskDetail.description}</div>
    )
}));

vi.mock('../button/PrimaryButton', () => ({
    default: ({ children, ...props }: any) => (
        <button {...props}>{children}</button>
    )
}));

vi.mock('antd', async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod,
        Checkbox: ({ onChange, ...props }: any) => (
            <input
                type="checkbox"
                onChange={(e) => onChange?.({ target: { checked: e.target.checked } })}
                {...props}
            />
        ),
        Modal: ({ children, ...props }: any) => (
            props.open ? <div data-testid="antd-modal">{children}</div> : null
        )
    };
});

describe('Task Component', () => {
    const mockTask: ITask = {
        id: 1,
        title: 'Test Task',
        description: 'Test Description',
        complete: false,
        created: '2023-01-01',
        due: '2023-12-31'
    };

    const mockOnToggle = vi.fn();
    const mockOnDelete = vi.fn();

    beforeEach(() => {
        mockOnToggle.mockClear();
        mockOnDelete.mockClear();
    });

    it('toggles task status when checkbox is clicked', async () => {
        render(
            <Task
                taskDetail={mockTask}
                onToggle={mockOnToggle}
                onDelete={mockOnDelete}
            />
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        await waitFor(() => {
            expect(mockOnToggle).toHaveBeenCalledWith(true);
        });
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <Task
                taskDetail={mockTask}
                onToggle={mockOnToggle}
                onDelete={mockOnDelete}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
});