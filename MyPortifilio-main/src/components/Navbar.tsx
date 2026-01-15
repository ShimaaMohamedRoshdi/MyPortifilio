// import React, { useState } from 'react';
// import styled from '@emotion/styled';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Nav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
//   background: rgba(0, 0, 0, 0.8);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// `;

// const NavContainer = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
//   padding: 1rem 2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 768px) {
//     padding: 0.75rem 1.25rem;
//   }
// `;

// const Logo = styled(Link)`
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: #ffffff;
//   text-decoration: none;
//   background: linear-gradient(45deg, #9546ff, #ff46c7);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavLink = styled(Link)`
//   color: ${(props: { isactive?: string }) => props.isactive === 'true' ? '#9546ff' : 'rgba(255, 255, 255, 0.85)'};
//   text-decoration: none;
//   font-size: 1.1rem;
//   font-weight: 500;
//   transition: all 0.3s ease;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -5px;
//     left: 0;
//     width: ${(props: { isactive?: string }) => props.isactive === 'true' ? '100%' : '0'};
//     height: 2px;
//     background: linear-gradient(90deg, #9546ff, #ff46c7);
//     transition: width 0.3s ease;
//   }

//   &:hover {
//     color: #9546ff;
//     &::after {
//       width: 100%;
//     }
//   }
// `;

// const MobileButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   color: #ffffff;
//   font-size: 1.5rem;
//   cursor: pointer;
//   padding: 0.5rem;
//   z-index: 1001;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const MobileMenu = styled.div<{ isOpen: boolean }>`
//   display: none;

//   @media (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.95);
//     backdrop-filter: blur(10px);
//     transform: translateX(${props => props.isOpen ? '0' : '100%'});
//     transition: transform 0.3s ease;
//     padding: 5rem 2rem 2rem;
//     gap: 2rem;
//     z-index: 1000;

//     ${NavLink} {
//       font-size: 1.25rem;
//       text-align: center;
//       padding: 1rem;
//       width: 100%;
//       border-radius: 8px;
//       background: rgba(255, 255, 255, 0.05);
      
//       &:hover {
//         background: rgba(149, 70, 255, 0.1);
//       }

//       &::after {
//         display: none;
//       }
//     }
//   }
// `;

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <Nav>
//       <NavContainer>
//         <Logo to="/">Portfolio</Logo>
//         <NavLinks>
//           <NavLink to="/" isactive={(location.pathname === '/').toString()}>
//             Home
//           </NavLink>
//           <NavLink to="/about" isactive={(location.pathname === '/about').toString()}>
//             About
//           </NavLink>
//           <NavLink to="/skills" isactive={(location.pathname === '/skills').toString()}>
//             Skills
//           </NavLink>
//           <NavLink to="/projects" isactive={(location.pathname === '/projects').toString()}>
//             Projects
//           </NavLink>
//           <NavLink to="/contact" isactive={(location.pathname === '/contact').toString()}>
//             Contact
//           </NavLink>
//         </NavLinks>
//         <MobileButton onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </MobileButton>
//         <MobileMenu isOpen={isOpen}>
//           <NavLink to="/" isactive={(location.pathname === '/').toString()} onClick={toggleMenu}>
//             Home
//           </NavLink>
//           <NavLink to="/about" isactive={(location.pathname === '/about').toString()} onClick={toggleMenu}>
//             About
//           </NavLink>
//           <NavLink to="/skills" isactive={(location.pathname === '/skills').toString()} onClick={toggleMenu}>
//             Skills
//           </NavLink>
//           <NavLink to="/projects" isactive={(location.pathname === '/projects').toString()} onClick={toggleMenu}>
//             Projects
//           </NavLink>
//           <NavLink to="/contact" isactive={(location.pathname === '/contact').toString()} onClick={toggleMenu}>
//             Contact
//           </NavLink>
//         </MobileMenu>
//       </NavContainer>
//     </Nav>
//   );
// };

// export default Navbar;












import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Styled Components
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  // background: rgba(0, 0, 0, 0.9);
    background: linear-gradient(180deg, rgba(30, 5, 51, 0.8) 0%, rgba(58, 15, 102, 0.1) 100%);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(45deg, #9546ff, #ff46c7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ isactive?: string }>`
  position: relative;
  color: ${(props) => (props.isactive === "true" ? "#9546ff" : "#fff")};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;

  &:hover {
    color: #9546ff;
  }

  /* Before pseudo-element (underline animation) */
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #9546ff;
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  /* After pseudo-element (small glow effect) */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 0;
    height: 2px;
    background: rgba(149, 70, 255, 0.5);
    transition: width 0.4s ease, left 0.4s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const MobileButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1200;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background: linear-gradient(135deg, #1e0533 0%, #3a0f66 50%, #1e0533 100%);
  background-size: 400% 400%;
  animation: gradientMove 6s ease infinite;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  padding: 4rem 1.5rem 2rem;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);

  ${NavLink} {
    font-size: 1rem;
    padding: 0.75rem;
    text-align: left;
    width: 100%;
    color: #fff;

    &:hover {
      color: #ff46c7;
    }
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-size: 1.8rem;
  cursor: pointer;
  color: #fff;
`;

// Navbar Component
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Portfolio</Logo>

        {/* Desktop Navigation */}
        <NavLinks>
          <NavLink to="/" isactive={(location.pathname === "/").toString()}>
            Home
          </NavLink>
          <NavLink to="/about" isactive={(location.pathname === "/about").toString()}>
            About
          </NavLink>
          <NavLink to="/skills" isactive={(location.pathname === "/skills").toString()}>
            Skills
          </NavLink>
          <NavLink to="/projects" isactive={(location.pathname === "/projects").toString()}>
            Projects
          </NavLink>
          <NavLink to="/contact" isactive={(location.pathname === "/contact").toString()}>
            Contact
          </NavLink>
        </NavLinks>

        {/* Mobile Menu Toggle Button */}
        <MobileButton onClick={toggleMenu}>
          <FaBars />
        </MobileButton>
      </NavContainer>

      {/* Sidebar Menu */}
      <MobileMenu isOpen={isOpen}>
        <CloseButton onClick={toggleMenu} />

        <NavLink to="/" isactive={(location.pathname === "/").toString()} onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/about" isactive={(location.pathname === "/about").toString()} onClick={toggleMenu}>
          About
        </NavLink>
        <NavLink to="/skills" isactive={(location.pathname === "/skills").toString()} onClick={toggleMenu}>
          Skills
        </NavLink>
        <NavLink to="/projects" isactive={(location.pathname === "/projects").toString()} onClick={toggleMenu}>
          Projects
        </NavLink>
        <NavLink to="/contact" isactive={(location.pathname === "/contact").toString()} onClick={toggleMenu}>
          Contact
        </NavLink>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
















// import React, { useState } from 'react';
// import styled from '@emotion/styled';
// import { Link, useLocation } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Nav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1100;
//   background: rgba(0, 0, 0, 0.9); /* Darker background */
//   backdrop-filter: blur(12px);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.15);
// `;

// const NavContainer = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
//   padding: 1rem 2rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 768px) {
//     padding: 0.75rem 1.5rem;
//   }
// `;

// const Logo = styled(Link)`
//   font-size: 1.8rem;
//   font-weight: 700;
//   color: #ffffff;
//   text-decoration: none;
//   background: linear-gradient(45deg, #9546ff, #ff46c7);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 1.2rem;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const NavLink = styled(Link)`
//   position: relative;
//   color: ${(props: { isactive?: string }) => (props.isactive === 'true' ? '#9546ff' : '#fff')};
//   text-decoration: none;
//   font-size: 1rem;
//   font-weight: 500;
//   transition: all 0.3s ease;

//   &:hover {
//     color: #9546ff;
//   }

//   /* Add before & after pseudo-elements */
//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -3px;
//     left: 50%;
//     width: 0;
//     height: 2px;
//     background: linear-gradient(90deg, #9546ff, #ff46c7);
//     transition: all 0.3s ease;
//   }

//   &::before {
//     transform: translateX(-50%);
//   }

//   &:hover::before,
//   &:hover::after {
//     width: 100%;
//   }
// `;

// const MobileButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   color: #ffffff;
//   font-size: 1.8rem;
//   cursor: pointer;
//   z-index: 1200;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// /* Sidebar Menu */
// const MobileMenu = styled.div<{ isOpen: boolean }>`
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 260px;
//   height: 100vh;
//   // background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #e94560);
//   background: linear-gradient(135deg, #1e0533 0%, #3a0f66 50%, #1e0533 100%);
//   background-size: 400% 400%;
//   animation: gradientMove 6s ease infinite;
//   transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
//   transition: transform 0.3s ease;
//   padding: 4rem 1.5rem 2rem;
//   z-index: 1100;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);

//   ${NavLink} {
//     font-size: 1rem;
//     padding: 0.75rem;
//     text-align: left;
//     width: 100%;
//     color: #fff;

//     &:hover {
//       color: #ff46c7;
//     }
//   }

//   @keyframes gradientMove {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
// `;

// const CloseButton = styled(FaTimes)`
//   position: absolute;
//   top: 1rem;
//   right: 1.5rem;
//   font-size: 1.8rem;
//   cursor: pointer;
//   color: #fff;
// `;

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <Nav>
//       <NavContainer>
//         <Logo to="/">Portfolio</Logo>
//         <NavLinks>
//           <NavLink to="/" isactive={(location.pathname === '/').toString()}>Home</NavLink>
//           <NavLink to="/about" isactive={(location.pathname === '/about').toString()}>About</NavLink>
//           <NavLink to="/skills" isactive={(location.pathname === '/skills').toString()}>Skills</NavLink>
//           <NavLink to="/projects" isactive={(location.pathname === '/projects').toString()}>Projects</NavLink>
//           <NavLink to="/contact" isactive={(location.pathname === '/contact').toString()}>Contact</NavLink>
//         </NavLinks>
//         <MobileButton onClick={toggleMenu}>
//           <FaBars />
//         </MobileButton>
//         <MobileMenu isOpen={isOpen}>
//           <CloseButton onClick={toggleMenu} />
//           <NavLink to="/" isactive={(location.pathname === '/').toString()} onClick={toggleMenu}>Home</NavLink>
//           <NavLink to="/about" isactive={(location.pathname === '/about').toString()} onClick={toggleMenu}>About</NavLink>
//           <NavLink to="/skills" isactive={(location.pathname === '/skills').toString()} onClick={toggleMenu}>Skills</NavLink>
//           <NavLink to="/projects" isactive={(location.pathname === '/projects').toString()} onClick={toggleMenu}>Projects</NavLink>
//           <NavLink to="/contact" isactive={(location.pathname === '/contact').toString()} onClick={toggleMenu}>Contact</NavLink>
//         </MobileMenu>
//       </NavContainer>
//     </Nav>
//   );
// };

// export default Navbar;
