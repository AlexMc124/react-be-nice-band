import React from "react";
import { Nav, NavLink, NavMenu, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <div class="flex flex-row items-stretch w-full font-mono">
            <NavMenu>
              <NavLogo to="/home">
                <img
                  src="Titles/benice_straight_Bfill_cropped.png"
                  class="h-10 hover:h-14"
                  alt="Be Nice Logo"
                />
              </NavLogo>
              <NavLink to="/bio" activeStyle>
                About Us!
              </NavLink>
              <NavLink to="/gigs" activeStyle>
                Gigs
              </NavLink>
              <NavLink to="/contact" activeStyle>
                Contact Us!
              </NavLink>
            </NavMenu>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
