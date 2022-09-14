function HomePage(props) {
  console.log("HomePage --------", props);
  return <div>Welcome to {props.page}</div>;
}

export const getServerSideProps = (ctx) => {
  console.log("HomePage getServerSideProps ---------");
  return {
    props: {
      page: "HomePage",
    },
  };
};

export default HomePage;
