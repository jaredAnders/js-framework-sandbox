import React from 'react';

const ProfilePic = (props) => {
  return (
    <img src={props.imageUrl} style={{height: 100, width: 100}}/>
  );
};

export default ProfilePic;
