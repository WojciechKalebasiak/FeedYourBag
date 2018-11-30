import React from "react";
import styles from "./SurveyList.module.css";
export default function SurveyListItem({
  survey: { title, body, created, lastResponded, yes, no }
}) {
  return (
    <li className={styles.SurveyListItem}>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Body}>{body}</p>
      {yes || no ? (
        <React.Fragment>
          <span className={styles.Yes}>Yes: {yes}</span>
          <span className={styles.No}>No: {no}</span>
          <div className={styles.Bars}>
            {yes ? (
              <div
                style={{ width: `${(yes / (yes + no)) * 100}%` }}
                className={styles.YesBar}>
                Yes
              </div>
            ) : null}
            {no ? (
              <div
                className={styles.NoBar}
                style={{ width: `${(no / (yes + no)) * 100}%` }}>
                No
              </div>
            ) : null}
          </div>
        </React.Fragment>
      ) : null}
      {lastResponded ? (
        <p className={styles.lrDate}>
          Last Response: {new Date(lastResponded).toLocaleDateString()}
        </p>
      ) : (
        <p className={styles.lrDate}>No response yet</p>
      )}

      <p className={styles.cDate}>
        Send: {new Date(created).toLocaleDateString()}
      </p>
    </li>
  );
}
