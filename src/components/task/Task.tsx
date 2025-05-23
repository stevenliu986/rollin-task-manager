import { Divider, Card, Checkbox, Button, Flex } from 'antd';
import TaskHeader from './TaskHeader';
import PrimaryButton from '../button/PrimaryButton';
import TaskDetail from './TaskDetail';
import deleteIcon from '../../assets/images/Delete Icon.png';

export default function Task() {

    return (
        <Card
            style={{
                width: '100%',
                maxWidth: 500,
                margin: '16px auto',
                backgroundColor: '#252525',
                position: 'relative',
                borderRadius: '16px'
            }}
        >
            <TaskHeader />
            <Divider style={{
                margin: '12px 0',
                backgroundColor: '#767676',
                height: '2px',
            }} />

            <Flex style={{ alignItems: 'flex-start' }}>
                <Checkbox
                    style={{
                        marginRight: '12px',
                    }}
                />
                <TaskDetail />
                <Button
                    type="text"
                >
                    <img src={deleteIcon} alt="delete icon" />
                </Button>
            </Flex>

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
                >
                    Manage task
                </PrimaryButton>
            </div>
        </Card>
    );
};