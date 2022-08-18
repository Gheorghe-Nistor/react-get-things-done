import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={classes.button} style={{alignSelf: props.alignSelf}}>
      {props.content}
    </button>
  );
};

export default Button;
