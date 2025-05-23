interface TaskListHeaderProps {
    activeTab: 'inProgress' | 'completed';
    onTabChange: (tab: 'inProgress' | 'completed') => void;
}

const TaskListHeader = ({ activeTab, onTabChange }: TaskListHeaderProps) => {
    return (
        <div style={{
            width: '100%',
            height: '53px',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#252525',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
        }}>
            <div
                style={{
                    padding: '0 25px',
                    color: activeTab === 'inProgress' ? '#FFF532' : '#FFF',
                    position: 'relative',
                    cursor: 'pointer'
                }}
                onClick={() => onTabChange('inProgress')}
            >
                In Progress
                {activeTab === 'inProgress' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#FFF532'
                    }} />
                )}
            </div>

            <div
                style={{
                    padding: '0 25px',
                    color: activeTab === 'completed' ? '#FFF532' : '#FFF',
                    position: 'relative',
                    cursor: 'pointer'
                }}
                onClick={() => onTabChange('completed')}
            >
                Completed
                {activeTab === 'completed' && (
                    <div style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: '#FFF532'
                    }} />
                )}
            </div>
        </div>
    );
};

export default TaskListHeader;