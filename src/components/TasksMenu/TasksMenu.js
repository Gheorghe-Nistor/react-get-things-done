import TasksColumn from './TasksColumn/TasksColumn';
import Button from '../UI/Button/Button';
import classes from './TasksMenu.module.css';

const TasksMenu = props => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.row}>
                <TasksColumn title={"TO DO"} backgroundColor={'#f39506'}/>
                <TasksColumn title={"IN PROGRESS"} backgroundColor={'#fae847'}/>
                <TasksColumn title={"DONE"} backgroundColor={'#9af207'}/>
            </div>
            <Button content={"Add a task"}/>
        </div>
    )
};

export default TasksMenu;