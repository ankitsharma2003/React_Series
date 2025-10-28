import React from 'react'
import profiles from "../../json/profile";
import Profile from './Profile';

const ProfileCard = () => {
  return (
    <div style={{ display : 'flex'}}>
        {profiles.map((pr, index) => {
            return <Profile key={index} data={pr} />
        })}
    </div>
  )
}

export default ProfileCard