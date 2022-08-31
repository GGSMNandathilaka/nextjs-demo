import classes from "./activity-content.module.css";

function ActivityContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default ActivityContent;
