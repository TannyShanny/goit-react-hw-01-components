import React from "react";
import "./stats.css"

const Stats = (props) => {
    return (
        <ul className="stats">
        <li className="stats-item">
          <span className="label">Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li className="stats-item">
          <span className="label">Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li className="stats-item">
          <span className="label">Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    )
}

export default Stats;