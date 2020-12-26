import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.description}>
      <img
        src={props.avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
      />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.tag}>@{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>
  );
};

export default Profile;
