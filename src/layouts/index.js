import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>;


export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1.25rem 1rem` }}>
    <Helmet>
      <title>Joyuer's Site</title>
    </Helmet>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" css={{ textShadow: `none`, backgroundImage: `none`, ':hover': {textShadow: `none`, backgroundImage: `none`, backgroundColor: `#fff`} }}>
        <h2 style={{ display: `inline`}}>Joyuer.cn</h2>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);

