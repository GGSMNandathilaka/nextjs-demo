import ActivityItem from "./activity-item";
import classes from "./activity-list.module.css";

function ActivityList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items &&
        items.map((item) => (
          <ActivityItem
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            type={item.type}
            purpose={item.purpose}
            id={item.id}
          />
        ))}
    </ul>
  );
}

export default ActivityList;
