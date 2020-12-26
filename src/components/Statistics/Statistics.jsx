import React from "react";
import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistic}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.stat_list}>
      {stats.map((stat) => (
        <li className={styles.item} key={stat.id}>
          <span className={styles.label}> {stat.label}</span>
          <span className={styles.percentage}> {stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Statistics;
