import styled from "styled-components";

import TLinkProps from "types/TLinkProps";

export const Categories = styled.ul``;

export const Category = styled.li`
	display: inline-block;
	text-align: center;
	width: 100px;

	&:hover {
		background-color: darkgrey;
		color: white;
		cursor: pointer;
	}
`;

export const Link = styled.a<TLinkProps>`
	color: inherit;
	display: block;
	text-decoration: none;
`;

export const Wrapper = styled.div`
	align-items: center;
	background-color: grey;
	display: flex;
	height: 30px;
	justify-content: center;
`;
