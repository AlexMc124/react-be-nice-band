import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home">
                    <img
                        src="Titles/benice_straight_Bfill_cropped.png"
                        class="h-10 hover:h-14"
                        alt="Be Nice Logo"
                    />
                    </NavLink>
                    <NavLink to="/Bio" activeStyle>
                        About Us!
                    </NavLink>
                    <NavLink to="/gigs" activeStyle>
                        Gigs
                    </NavLink>
                    <NavLink to="/merch" activeStyle>
                        Merch!
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;