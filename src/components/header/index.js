import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <NavMenu>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/latest-news">LatestNews</Link>
        <Link to="/popular-news">PopularNews</Link>
      </Links>
    </NavMenu>
  );
};

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkblue;

  a {
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 10px 10px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;

    &:hover,
    .active {
      background-color: gray;
    }
  }
`;

const Links = styled.div`
  height: 100%;
`;

export default Header;
