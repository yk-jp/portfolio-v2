import type { NextPage } from "next";
import Head from "next/head";

import Aboutme from "../components/aboutme";
import Projects from "../components/projects";
import Contact from "../components/contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yusuke Portfolio</title>
      </Head>

      <section id="aboutme">
        <Aboutme />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
