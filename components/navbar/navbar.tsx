import type { NextComponentType } from "next";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import styles from "../../styles/components/Navbar.module.css";

const Navbar: NextComponentType = () => {
  const router: NextRouter = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.linkGroup}>
        <Link href="/">
          <a
            className={
              router.pathname == "/"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            Home
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              router.pathname == "/projects"
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            Projects
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
