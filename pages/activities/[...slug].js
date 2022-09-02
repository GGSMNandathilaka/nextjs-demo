import { Fragment } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import ActivityList from "../../components/activities/activity-list";
import ResultsTitle from "../../components/activities/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredActivities } from "../../api-util";

function FilteredActivityPage(props) {
  const { activities, date } = props;
  const router = useRouter();

  if (!activities || activities.length === 0) {
    return (
      <ErrorAlert>
        <p>No events found for the chose filter !</p>
      </ErrorAlert>
    );
  }

  const dateObj = new Date(+date.year, +date.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={dateObj}></ResultsTitle>
      <ActivityList items={activities}></ActivityList>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const params = context.params.slug;

  const filteredYear = +params[0];
  const filteredMonth = +params[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2020 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredActivities = await getFilteredActivities({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      activities: filteredActivities,
      date: {
        year: filteredYear,
        month: filteredMonth,
      },
    },
  };
}

export default FilteredActivityPage;
