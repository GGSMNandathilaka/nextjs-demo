import Head from "next/head";
import { getFeaturedActivities } from "../api-util";
import ActivityList from "../components/activities/activity-list";

function FeaturedActivitiesPage(props) {
  const { activities } = props;
  return (
    <div>
      <Head>
        <title>Maths Activities</title>
        <meta
          name="description"
          content="Find a lot of great maths activities"
        ></meta>
      </Head>
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
