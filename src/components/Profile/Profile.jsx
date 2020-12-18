import React from "react";
import "./profile.css";

const Profile = (props) => {
  return (
      <div className="description">
        <img src={props.avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
  );
};

export default Profile;
