import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./activity-logistics.module.css";
import Bars4Icon from "../icons/bars-4-icon";

function ActivityLogistics(props) {
  const { date, purpose, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={Bars4Icon}>
          <address>{purpose}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default ActivityLogistics;
