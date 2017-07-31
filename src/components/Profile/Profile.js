import React from 'react';
import './profile.css';

const Profile = ({userProfile}) => {
    console.log('ppppppp',userProfile);
    // userProfile.data !== undefined ? userProfile = userProfile.data : userProfile = userProfile
    return (
      <div className="ui centered raised orange card">
        <a className="image">
        <img src="https://avatars0.githubusercontent.com/u/8875901?v=4" alt=""/>
        </a>
        <div className="content">
          <a className="header">{userProfile.name}</a>
          <div className="meta">
            <a>{userProfile.email}</a>
            <a href={`https://github.com/${userProfile.login}`}>Account</a>
            <a href={`https://github.com/${userProfile.login}/?tab=repositories`}>Repositories</a>
            <a href={`https://github.com/${userProfile.login}?tab=followers`}>Followers</a>
            <br/>
            <a>{userProfile.location}</a>
          </div>
        </div>
      </div>
    );
}

export default Profile;