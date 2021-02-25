import React from "react";
import Layout from "../component/Layout";
import { GetStaticPaths, GetStaticProps } from "next";
import SlideShow from "../component/Slideshow";
import Apaya from "../component/Cardapaya";

const properties: any[] = require("../json/Api.json");

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = properties.find((x) => x.path == params?.category);
  return {
    props: {
      slides: data.slides || [],
      apaya: data.apaya || [],
    },
  };
};
function Home({ slides = [], apaya = [] }) {
  return (
    <Layout>
      <SlideShow images={slides} />
      {apaya.map(
        (
          { title, img, path }: { title: string; path: string; img: string },
          i: number
        ) => (
          <Apaya title={title} img={img} path={path} key={i} />
        )
      )}
    </Layout>
  );
}

export default Home;
