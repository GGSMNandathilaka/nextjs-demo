import { Fragment } from "react";

import ActivitySummary from "../../components/activity-detail/activity-summary";
import ActivityLogistics from "../../components/activity-detail/activity-logistics";
import ActivityContent from "../../components/activity-detail/activity-content";
import ErrorAlert from "../../components/ui/error-alert";
import { getActivityById, getFeaturedActivities } from "../../api-util";

function DetailedActivityPage(props) {
  const { activity } = props;

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

export async function getStaticProps(context) {
  const activityId = context.params.activityId;
  const detailedActivity = await getActivityById(activityId);

  return {
    props: {
      activity: detailedActivity,
    },
  };
}

export async function getStaticPaths() {
  const allActivities = await getFeaturedActivities();
  const paths = allActivities.map((activity) => ({
    params: { activityId: activity.id },
  }));

  return { paths: paths, fallback: "blocking" };
}
