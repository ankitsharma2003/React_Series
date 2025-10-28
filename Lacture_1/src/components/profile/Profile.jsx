import React from "react";
import "./Profile.css";

const Profile = ({ data }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avaiable">
          {data.avaiable === true ? <p className="avaiable-p">avaiable</p> : ""}
        </div>
        <p className="price">{data.price}</p>
      </div>
      <div>
        <img src={data.image} alt={data.name} />
        <p>{data.name}</p>
        <p>{data.desination}</p>
        <p>Epic Coder</p>
      </div>
      <div className="skills">
        <ul>
          <li>{data.skills}</li>
        </ul>
      </div>
      <p>{data.bio}</p>
      <a href="/view-profile">View Profile</a>
    </div>
  );
};

export default Profile;
