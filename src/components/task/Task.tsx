import React, { useState } from 'react';
import { Divider, Card, Checkbox, Button, Flex, Modal, Spin } from 'antd';
import TaskHeader from './TaskHeader';
import PrimaryButton from '../button/PrimaryButton';
import TaskDetail from './TaskDetail';
import deleteIcon from '../../assets/images/Delete Icon.png';
import type { ITask } from './AddTask';
import './task.css';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface ITaskProps {
    taskDetail: Readonly<ITask>;
    onDelete?: () => Promise<void> | void;
    onToggle?: (checked: boolean) => Promise<void> | void;
}

const CARD_STYLE: React.CSSProperties = {
    width: '100%',
    maxWidth: 500,
    margin: '16px auto',
    backgroundColor: '#252525',
    position: 'relative',
    borderRadius: '16px'
};

const LOADER_STYLE: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1
};

const DIVIDER_STYLE: React.CSSProperties = {
    margin: '12px 0',
    backgroundColor: '#767676',
    height: '2px'
};

const Task: React.FC<ITaskProps> = ({
    taskDetail,
    onDelete,
    onToggle
}) => {
    const [taskStatus, setTaskStatus] = useState<boolean>(taskDetail.complete);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleCheckBoxChange = async (evt: CheckboxChangeEvent) => {
        const newStatus = evt.target.checked;
        setTaskStatus(newStatus);
        try {
            setLoading(true);
            onToggle?.(newStatus);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card style={CARD_STYLE}>
            {loading && (
                <div style={LOADER_STYLE}>
                    <Spin size="large" />
                </div>
            )}

            <TaskHeader taskDetail={{ ...taskDetail, complete: taskStatus }} />
            <Divider style={DIVIDER_STYLE} />

            <Flex style={{ alignItems: 'flex-start' }}>
                <Checkbox
                    className="circle-checkbox"
                    checked={taskStatus}
                    onChange={handleCheckBoxChange}
                    disabled={loading}
                    style={{
                        marginRight: '12px',
                    }}
                    aria-label={taskStatus ? "Mark task as incomplete" : "Mark task as complete"}
                />
                <TaskDetail taskDetail={taskDetail} />
                <Button
                    type="text"
                    onClick={() => setIsDeleteModalOpen(true)}
                    disabled={loading}
                    aria-label="Delete task"
                >
                    <img src={deleteIcon} alt="delete icon" />
                </Button>
            </Flex>

            <Modal
                title={<span style={{ fontSize: '1.25rem' }}>Are you sure you want to delete this task?</span>}
                open={isDeleteModalOpen}
                onCancel={() => setIsDeleteModalOpen(false)}
                styles={{
                    header: {
                        textAlign: 'center',
                        fontWeight: 500,
                        padding: '8px',
                    },
                    body: {
                        textAlign: 'center',
                        padding: '8px 24px 16px'
                    },
                    content: {
                        borderRadius: '18px'
                    }
                }}
                footer={
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1.5rem'
                    }}>
                        <PrimaryButton
                            key="cancel"
                            onClick={() => setIsDeleteModalOpen(false)}
                            style={{
                                backgroundColor: 'transparent',
                                border: '1px solid #252525',
                                color: '#252525',
                                width: '156px',
                                height: '40px',
                                fontSize: '0.875rem',
                                margin: 0
                            }}
                            aria-label="Cancel task deletion"
                        >
                            Go back
                        </PrimaryButton>
                        <PrimaryButton
                            key="delete"
                            onClick={() => {
                                setIsDeleteModalOpen(false);
                                onDelete?.();
                            }}
                            style={{
                                backgroundColor: '#FF50BE',
                                width: '156px',
                                height: '40px',
                                fontSize: '0.875rem',
                                margin: 0
                            }}
                            aria-label="Confirm task deletion"
                        >
                            Yes, delete
                        </PrimaryButton>
                    </div>
                }
                closable={false}
            >
                <p style={{ margin: 0, fontSize: '0.875rem' }}>This action cannot be undone.</p>
            </Modal>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginTop: '16px'
            }}>
                <PrimaryButton
                    style={{
                        height: '40px',
                        width: '263px',
                        backgroundColor: '#FFF',
                        fontSize: '1rem',
                    }}
                    disabled={loading}
                    aria-label="Manage task details"
                >
                    Manage task
                </PrimaryButton>
            </div>
        </Card>
    );
};

export default React.memo(Task);