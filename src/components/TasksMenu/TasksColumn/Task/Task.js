import classes from './Task.module.css';

const Task = (props) => {
    return <li className={classes.task} draggable>
        <p>{props.content}</p>
        <span>X</span>
    </li>
};

export default Task;
