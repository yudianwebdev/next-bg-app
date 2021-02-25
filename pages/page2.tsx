import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../component/Layout";
import Cardapaini from "../component/Cardapaini";
const properties: any[] = require("../json/Api.json");
//get semua projects dari properties.json, jadikan satu array
let projects: any[] = properties.reduce((all, { projects }) => {
  if (projects) {
    return [...all, ...projects];
  } else {
    return all;
  }
}, []);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = projects.find((x) => x.path == params?.projects);
  return {
    props: {
      des: data.des || "",
    },
  };
};
const page2 = () => {
  return (
    <Layout>
      <div>{Cardapaini}</div>
    </Layout>
  );
};

export default page2;
