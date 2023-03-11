import React from "react";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import styles from "../../styles/components/Navbar.module.css";

const Navbar: React.FC = () => {
  const router: NextRouter = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.linkGroup}>
        <Link
          href="/"
          className={
            router.pathname == "/"
              ? `${styles.link} ${styles.active}`
              : `${styles.link}`
          }
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={
            router.pathname == "/projects"
              ? `${styles.link} ${styles.active}`
              : `${styles.link}`
          }
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
