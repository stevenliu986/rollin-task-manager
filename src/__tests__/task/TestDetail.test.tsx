import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TaskDetail from '../../components/task/TaskDetail';
import { Flex } from 'antd';
import type { ITask } from '../../components/task/AddTask';

vi.mock('antd', async (importOriginal) => {
    const mod = await importOriginal();
    return {
        ...mod,
        Typography: {
            Title: ({ children, style }: any) => (
                <div data-testid="task-title" style={style}>{children}</div>
            ),
            Paragraph: ({ children, style }: any) => (
                <div data-testid="task-description" style={style}>{children}</div>
            )
        }
    };
});

describe('TaskDetail Component', () => {
    const mockTask: ITask = {
        id: 1,
        title: 'Test Task',
        description: 'Test Description',
        complete: false,
        created: '2023-01-01'
    };

    const mockCompletedTask: ITask = {
        ...mockTask,
        complete: true
    };

    it('renders task title and description correctly', () => {
        render(
            <Flex>
                <TaskDetail taskDetail={mockTask} />
            </Flex>
        );

        expect(screen.getByTestId('task-title')).toHaveTextContent('Test Task');
        expect(screen.getByTestId('task-description')).toHaveTextContent('Test Description');
    });

    it('matches snapshot for incomplete task', () => {
        const { asFragment } = render(
            <Flex>
                <TaskDetail taskDetail={mockTask} />
            </Flex>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('matches snapshot for completed task', () => {
        const { asFragment } = render(
            <Flex>
                <TaskDetail taskDetail={mockCompletedTask} />
            </Flex>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});