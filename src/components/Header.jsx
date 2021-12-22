import { auth, provider } from "../firebase"
import styled from "styled-components"


export default function Header() {
  const handleAuth = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)
    })
      .catch((error) => {
      alert(error.message)
    })
  }
  
  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      <NavMenu>
        <a>
          <img src="images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" />
          <span>SERIES</span>
        </a>

      </NavMenu>
      <UserImg src="https://avatars.githubusercontent.com/u/90736469?v=4"/>
      <LoginBtn onClick={handleAuth}> login </LoginBtn>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 36px;
  height: 70px;
  background: #090b13;
  color: white;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 40px;
  align-items: center;
  font-weight: bold;
  font-smooth: always;
  gap: 18px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      margin-right: 10px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

        &:after {
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }


`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`


const LoginBtn = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all 200ms ease 0s;
cursor: pointer;

&:hover {
  background-color: #f9f9f9;
  color: #000;
  border-color: transparent;
}
`
