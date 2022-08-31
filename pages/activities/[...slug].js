import { Fragment } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import { getFilteredActivities } from "../../dummy-data";
import ActivityList from "../../components/activities/activity-list";
import ResultsTitle from "../../components/activities/results-title";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredActivityPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  if (
    isNaN(+filteredYear) ||
    isNaN(+filteredMonth) ||
    +filteredMonth < 1 ||
    +filteredMonth > 12
  ) {
    return (
      <ErrorAlert>
        <p>Invalid filter. Please adjust your values</p>
      </ErrorAlert>
    );
  }

  const filteredActivities = getFilteredActivities({
    year: +filteredYear,
    month: +filteredMonth,
  });

  if (!filteredActivities || filteredActivities.length === 0) {
    return (
      <ErrorAlert>
        <p>No events found for the chose filter !</p>
      </ErrorAlert>
    );
  }

  const date = new Date(+filteredYear, +filteredMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <ActivityList items={filteredActivities}></ActivityList>
    </Fragment>
  );
}

export default FilteredActivityPage;
