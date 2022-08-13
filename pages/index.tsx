import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Coder&apos;s Blog - Home Page</title>
        <meta />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <p className="text-primary">Coders Blog</p>
    </div>
  );
};

export default Home;
