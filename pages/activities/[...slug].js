import { useRouter } from "next/router";
import _ from "lodash";

function CatchAllActivityPage() {
  const router = useRouter();
  const path = router.query;

  if (!_.isEmpty(path)) {
    const year = path.slug[0];
    const month = path.slug[1];
    return <h1>Catch All Activity on {`${year}/${month}`}</h1>;
    return <h1>Success</h1>;
  } else {
    return <p>Loading...</p>;
  }
}

export default CatchAllActivityPage;
