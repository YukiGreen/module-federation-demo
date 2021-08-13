import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuPage() {

  return (<div>
    <div>
      <Link to="/">
        <span className="nav-text">首页</span>
      </Link> | 
      <Link to="/my-react">
        <span className="nav-text">MyReact</span>
      </Link> | 
      <Link to="/react-project-two">
        <span className="nav-text">ReactProjectTwoApp</span>
      </Link> | 
      <Link to="/vue-three-project">
        <span className="nav-text">VueThreeProjectApp</span>
      </Link> | 
      <Link to="/vue-two-project">
        <span className="nav-text">VueTwoProjectApp</span>
      </Link>
    </div>
  </div>);
}
