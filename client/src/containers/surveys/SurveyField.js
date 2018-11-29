import React from "react";
import styles from "./SurveyField.module.css";
export default function SurveyField({
  input,
  label,
  meta: { error, touched }
}) {
  return (
    <div className={styles.SurveyField}>
      <label className={styles.Label}>{label}</label>
      <input {...input} className={styles.Input} />
      {touched && error ? <div className={styles.Error}>{error}</div> : null}
    </div>
  );
}
