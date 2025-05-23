interface TaskListHeaderProps {
    activeTab: 'inProgress' | 'completed';
    onTabChange: (tab: 'inProgress' | 'completed') => void;
}

const TaskListHeader = ({ activeTab, onTabChange }: TaskListHeaderProps) => {
    return (
        <div
            role="tablist"
            aria-label="Task status tabs"
            style={{
                width: '100%',
                height: '53px',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#252525',
                borderTopLeftRadius: '16px',
                borderTopRightRadius: '16px',
            }}
        >
            <button
                role="tab"
                aria-selected={activeTab === 'inProgress'}
                aria-controls="inProgress-tabpanel"
                onClick={() => onTabChange('inProgress')}
                style={{
                    padding: '0 25px',
                    color: activeTab === 'inProgress' ? '#FFF532' : '#FFF',
                    position: 'relative',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    fontSize: 'inherit',
                    fontFamily: 'inherit'
                }}
            >
                In Progress
                {activeTab === 'inProgress' && (
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FFF532'
                        }}
                    />
                )}
            </button>

            <button
                role="tab"
                aria-selected={activeTab === 'completed'}
                aria-controls="completed-tabpanel"
                onClick={() => onTabChange('completed')}
                style={{
                    padding: '0 25px',
                    color: activeTab === 'completed' ? '#FFF532' : '#FFF',
                    position: 'relative',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    fontSize: 'inherit',
                    fontFamily: 'inherit'
                }}
            >
                Completed
                {activeTab === 'completed' && (
                    <div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            bottom: '-8px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FFF532'
                        }}
                    />
                )}
            </button>
        </div>
    );
};

export default TaskListHeader;