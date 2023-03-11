import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import HomeComponent from "../components/home/homeComponent";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <div className={styles.homeBody}>
        <HomeComponent />
      </div>
    </div>
  );
};

export default Home;
