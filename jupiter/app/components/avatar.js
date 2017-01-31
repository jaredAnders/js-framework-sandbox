import React, { Component } from 'react';
import ProfilePic from './profile_pic';
import ProfileLink from './profile_link';

const Avatar = (props) => {
  return (
    <div>
      Hello {props.name}
    </div>
  )
};

export default Avatar;
