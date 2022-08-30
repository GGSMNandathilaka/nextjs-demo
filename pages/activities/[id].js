import { useRouter } from "next/router";

function DetailedActivityPage() {
  const router = useRouter();
  const path = router.query;

  return (
    <div>
      <h1>Detailed Activity {path.id}</h1>
    </div>
  );
}

export default DetailedActivityPage;
