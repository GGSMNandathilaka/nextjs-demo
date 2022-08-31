import { useRouter } from "next/router";
import { Fragment } from "react";

import { getActivityById } from "../../dummy-data";
import ActivitySummary from "../../components/activity-detail/activity-summary";
import ActivityLogistics from "../../components/activity-detail/activity-logistics";
import ActivityContent from "../../components/activity-detail/activity-content";
import ErrorAlert from "../../components/ui/error-alert";

function DetailedActivityPage() {
  const router = useRouter();
  const activityId = router.query.activityId;
  const activity = getActivityById(activityId);

  if (!activity) {
    return (
      <ErrorAlert>
        <p>No Activity Found !</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <ActivitySummary title={activity.title}></ActivitySummary>
      <ActivityLogistics
        date={activity.date}
        purpose={activity.purpose}
        image={activity.image}
        imageAlt={activity.title}
      ></ActivityLogistics>
      <ActivityContent>
        <p>{activity.purpose}</p>
        <p>{activity.description}</p>
      </ActivityContent>
    </Fragment>
  );
}

export default DetailedActivityPage;
