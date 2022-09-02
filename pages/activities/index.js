import ActivityList from "../../components/activities/activity-list";
import { Fragment } from "react";
import ActivitySearch from "../../components/activities/activity-search";
import { useRouter } from "next/router";
import { getAllActivities } from "../../api-util";

function AllActivitiesPage(props) {
  const router = useRouter();
  const { activities } = props;

  function findActivitiesHandler(year, month) {
    const fullPath = `/activities/${year}/${month}`;
    // load the slug path
    router.push(fullPath);
  }

  return (
    <Fragment>
      <ActivitySearch onSearch={findActivitiesHandler}></ActivitySearch>
      <ActivityList items={activities}></ActivityList>
    </Fragment>
  );
}

export default AllActivitiesPage;

export async function getStaticProps() {
  const allActivities = await getAllActivities();

  return {
    props: {
      activities: allActivities,
    },
    revalidate: 60,
  };
}
