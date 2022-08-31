import ActivityList from "../components/activities/activity-list";
import { getFeaturedActivities } from "../dummy-data";

function FeaturedActivitiesPage() {
  const featuredActivities = getFeaturedActivities();
  return (
    <div>
      <ActivityList items={featuredActivities} />
    </div>
  );
}

export default FeaturedActivitiesPage;
