import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './navbarElements';
import {useState, useEffect} from 'react';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80 ){
            setScrollNav(true);
        }
        else
        {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav);
    }, [])


    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavbarLogo to='/' onClick={toggleHome}>
                    Dolla
                </NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>SignUp</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;