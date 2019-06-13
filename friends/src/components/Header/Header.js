import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = (props) => {
  const HeaderWrapper = styled.header `
    display: flex;
    justify-content: center;
    background-color: #222;
    color: #f2f2f2;
    height: 50px;
    align-items: center;

    nav   {
      display: flex;
    }

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      justify-content: space-between;
    }

    a {
      display: inline-block;
      padding: 10px 20px;
      margin-right: 2rem;
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      font-size: 1.3rem;
    }
  `

    return (
      <HeaderWrapper>
        <nav>
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/add_new">New friend</Link></li>
          </ul>
        </nav>
      </HeaderWrapper>
  )
}

export default Header
