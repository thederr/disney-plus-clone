import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="home-icon"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="search"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="originals"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="movies"/>
                    <span>MOIVES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="series"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/derrickimg.jpg" alt="avatar"/>
        </Nav>
            
    
    )
}

export default Header

const Nav =styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
   display: flex;
   flex: 1;
   margin-left 20px;
   align-items:center;
   a{
       display:flex;
       align-items: center;
       padding: 0 12px;
       cursor-pointer;
       img {
            height: 20px;
       }

       span {
            font-sizel 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after{
                content:"";
                height: 2px;
                background: white;
                position: absolute;
                // top:0;
                left: 0;
                right: 0;
                bottom:-6px;
                opacity: 0;
                transform : scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
       }

       &:hover {
           span:after {
               transform: scaleX(1);
               opacity:1;
           }
       }
   }
`
const UserImg = styled.img`
   width: 48px;
   height: 48px;
   border-radius: 50%;
   cursor-pointer;
`