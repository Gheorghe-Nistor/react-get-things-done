import Task from './Task/Task';
import classes from './TasksColumn.module.css';

const TasksColumn = props => {
    return (
        <div className={classes.tasksColumn}>
            <p className={classes.title} style={{backgroundColor: props.backgroundColor+'E6'}}>{props.title}</p>
            <ul>
                <Task content="Read a book"/>
                <Task content="Watch a good movie"/>
            </ul>
        </div>
    );
}

export default TasksColumn;