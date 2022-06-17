import type { NextComponentType } from "next";
import {GithubOutlined, LinkedinOutlined, TwitterOutlined} from "@ant-design/icons";
import styles from "../../styles/components/HomeComponent.module.css";

const HomeComponent: NextComponentType = () => {
    return <>
        <h1 className={styles.header1}>
            <p className={styles.greet}>Hi, I'm</p>
            Plaban Kumar Mondal
        </h1>
        <div className={`${styles.secondaryCol}`}>
            Sophomore computer science student.
            <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/plaban-kumar-mondal-101900228/"><LinkedinOutlined /></a>
                <a href="https://twitter.com/PlabanKrMondal"><TwitterOutlined /></a>
                <a href="https://github.com/PlabanKr"><GithubOutlined /></a>
            </div>
        </div>
        <div className={styles.contactDiv}>
            <a href="mailto:plaban.kr.mondal00@gmail.com">Contact Me</a>
        </div>
        <div className={styles.skills}>
            {/* <h3>My Skills</h3> */}
            {/* I am familiar with JavaScript, Python, C++. I have built websites with MERN Stack. */}
        </div>
    </>
}

export default HomeComponent;