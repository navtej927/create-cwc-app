function AboutPage(props) {
  console.log("AboutPage ------", props);
  return <div>Page: {props.page}</div>;
}

export async function getStaticProps(context) {
  return {
    props: {
      page: "AboutPage",
    },
  };
}

export default AboutPage;
