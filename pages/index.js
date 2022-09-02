import { getFeaturedActivities } from "../api-util";
import ActivityList from "../components/activities/activity-list";

function FeaturedActivitiesPage(props) {
  const { activities } = props;
  return (
    <div>
      <ActivityList items={activities} />
    </div>
  );
}

export default FeaturedActivitiesPage;

export async function getStaticProps(context) {
  const featuredActivities = await getFeaturedActivities();
  return {
    props: { activities: featuredActivities },
  };
}
