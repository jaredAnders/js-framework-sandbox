import React from 'react';

const ProfileLink = (props) => {
  const url = `https://github.com/${props.username}`;

  return (
    <a href={url}>{props.username}</a>
  );
};

export default ProfileLink;
