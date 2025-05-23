const TaskListHeader = () => {
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
                    color: '#FFF',
                    position: 'relative',
                    cursor: 'pointer'
                }}
            >
                In Progress
            </div>

            <div
                style={{
                    padding: '0 25px',
                    color: '#FFF',
                    position: 'relative',
                    cursor: 'pointer'
                }}
            >
                Completed
            </div>
        </div>
    );
};

export default TaskListHeader;