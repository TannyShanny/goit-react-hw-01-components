import React from "react";
import Profile from "./components/Profile/Profile.jsx";
import "./App.css";
import user from "./user.json";
import Stats from "./components/Stats/Stats.jsx";

console.log(user);

const App = () => {
  return (
    <div className="profile">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />
    </div>
  );
};

export default App;
