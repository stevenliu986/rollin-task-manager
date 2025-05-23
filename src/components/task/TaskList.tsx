import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { get, del, put } from '../../utils/httpClient';
import PrimaryButton from '../button/PrimaryButton';
import PrimaryTitle from '../title/PrimaryTitle';
import TaskListHeader from './TaskListHeader';
import Task from './Task';
import type { ITask } from "./AddTask";

export default function TaskList() {
    const [taskList, setTaskList] = useState<ITask[]>([]);
    const [activeTab, setActiveTab] = useState<'inProgress' | 'completed'>('inProgress');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const filteredTasks = taskList.filter(task =>
        activeTab === 'inProgress' ? !task.complete : task.complete
    );

    const handleTaskToggle = async (id: number, complete: boolean) => {
        try {
            setLoading(true);
            setTaskList(prev => prev.map(task =>
                task.id === id ? { ...task, complete } : task
            ));

            const taskToUpdate = taskList.find(task => task.id === id);
            if (taskToUpdate) {
                await put(`/tasks/${id}`, { ...taskToUpdate, complete });
            }
        } catch (error) {
            console.error('Update failed', error);
            setTaskList(prev => prev.map(task =>
                task.id === id ? { ...task, complete: !complete } : task
            ));
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = async (id: number) => {
        try {
            setLoading(true);
            await del(`/tasks/${id}`);
            setTaskList(prev => prev.filter(task => task.id !== id));
        } catch (error) {
            console.error('Deletion failed', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await get<ITask[]>('/tasks');
            setTaskList(response.data);
        } catch (error) {
            console.error('Failed to get tasks', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div style={{ width: '90%', margin: '3rem auto' }}>
            <PrimaryTitle>My tasks</PrimaryTitle>
            <TaskListHeader
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />

            {loading ? (
                <div>Loading...</div>
            ) : (
                filteredTasks.map(task => (
                    <Task
                        key={task.id}
                        taskDetail={task}
                        onDelete={() => handleDeleteClick(task.id)}
                        onToggle={(complete) => handleTaskToggle(task.id, complete)}
                    />
                ))
            )}

            <PrimaryButton
                onClick={() => navigate('/addTask')}
                style={{ marginTop: '20px' }}
            >
                Create a new task
            </PrimaryButton>
        </div>
    );
}