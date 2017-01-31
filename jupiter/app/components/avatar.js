import React from 'react';
import ProfilePic from './profile_pic';
import ProfileLink from './profile_link';

const Avatar = (props) => {
  return (
    <div>
      <ProfilePic imageUrl={props.imageUrl}/>
      <ProfileLink username={props.username} />
    </div>
  );
};

export default Avatar;
