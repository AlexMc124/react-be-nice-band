import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #ffb3ff;
	height: 95px;
	display: flex;
	justify-content: space-between;
	padding: 0.2rem calc((100vw - 1500px) / 2);
	z-index: 12;
	class: "w-full";
`;



export const NavLogo = styled(Link)`
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	&.active {
		height: 110%;
	}
`;


export const NavLink = styled(Link)`
	color: grey;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	font-size: 1.2rem;
	height: 100%;
	cursor: pointer;
	&.active {
		color: #000000;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
