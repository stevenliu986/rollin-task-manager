import PrimaryButton from "../button/PrimaryButton";
import PrimaryTitle from "../title/PrimaryTitle";
import Task from "./Task";
import TaskListHeader from "./TaskListHeader";

export default function TaskList() {
    return (<>
        <PrimaryTitle>My tasks</PrimaryTitle>
        <TaskListHeader />
        <Task />
        <PrimaryButton>
            Create a new task
        </PrimaryButton>
    </>)
}