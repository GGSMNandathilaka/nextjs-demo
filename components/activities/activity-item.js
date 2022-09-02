import Image from "next/image";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Bars4Icon from "../icons/bars-4-icon";
import DateIcon from "../icons/date-icon";
import TagIcon from "../icons/tag-icon";
import Button from "../ui/button";
import classes from "./activity-item.module.css";

function ActivityItem(props) {
  const { image, title, date, type, purpose, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/activities/${id}`;
  return (
    <li className={classes.item}>
      <Image src={`/${image}`} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.purpose}>
            <Bars4Icon />
            <address>{purpose}</address>
          </div>
          <div className={classes.purpose}>
            <TagIcon />
            <address>{type}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Activity</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default ActivityItem;
