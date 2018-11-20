import React from "react";
import styles from "./Home.module.css";
import classnames from "classnames";
export default function Home() {
  return (
    <div className={styles.Home}>
      <h3 className={classnames([styles.Emails], "Heading")}>
        Send emails to your customers.
      </h3>
      <h3 className={classnames([styles.Feedback], "Heading")}>
        Get feedback from them.
      </h3>
      <h3 className={classnames([styles.MainHeading], "Heading")}>
        Feed Your Bag.
      </h3>
    </div>
  );
}
