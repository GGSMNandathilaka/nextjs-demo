function UserIdPage(props) {
  return <h1>{props.userId}</h1>;
}

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      userId: `userId-${params.uid}`,
    },
  };
}
