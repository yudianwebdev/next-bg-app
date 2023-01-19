import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../component/Layout";
import Cardapaini from "../../component/Cardapaini";
const properties: any[] = require("../../json/Api.json");
//get semua [properties] dari properties.json, jadikan satu array

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = properties.map(({ path }) => {
    return {
      params: { category: path },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = properties.find((x) => x.path == params?.category);
  return {
    props: {
      title: data.title || "",
      img: data.img || null,
    },
  };
};
const page2 = ({ title }) => {
  return (
    <Layout>
      <div>
        <Cardapaini title={title} />
      </div>
    </Layout>
  );
};

export default page2;
