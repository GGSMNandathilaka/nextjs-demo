import classes from "./activity-summary.module.css";

function ActivitySummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default ActivitySummary;
