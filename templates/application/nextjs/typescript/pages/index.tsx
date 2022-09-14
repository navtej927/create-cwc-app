import { GetServerSideProps } from "next";
import React from 'react';

function HomePage(props) {
  return (<div>Welcome</div>)
}

export async function getServerSideProps (ctx) {
  return {
    props: {
      page: "HomePage",
    },
  };
}

export default HomePage;
