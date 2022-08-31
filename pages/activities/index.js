import { getAllActivities } from "../../dummy-data";
import ActivityList from "../../components/activities/activity-list";
import { Fragment } from "react";
import ActivitySearch from "../../components/activities/activity-search";
import { useRouter } from "next/router";

function AllActivitiesPage() {
  const router = useRouter();
  const allActivities = getAllActivities();

  function findActivitiesHandler(year, month) {
    const fullPath = `/activities/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <ActivitySearch onSearch={findActivitiesHandler}></ActivitySearch>
      <ActivityList items={allActivities}></ActivityList>
    </Fragment>
  );
}

export default AllActivitiesPage;
