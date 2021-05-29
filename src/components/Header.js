import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="disney logo" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home icon image" />{' '}
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search icon image" />{' '}
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist icon image" />{' '}
          <span>WATCH LIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="originals icon image" />{' '}
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movies icon image" />{' '}
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series icon image" />{' '}
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg
        src="https://avatars.githubusercontent.com/u/40603802?v=4"
        alt="profile image"
      />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin: 0 11px;
    padding: 0 1px;

    img {
      height: 20px;
      cursor: pointer;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.2px;
      cursor: pointer;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
