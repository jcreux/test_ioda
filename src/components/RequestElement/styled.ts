import styled from "styled-components";

export const Button = styled.button`
	height: 20px;
	width: 100%;

	&:hover {
		cursor: pointer;
	}
`;

export const Table = styled.table`
	border-collapse: collapse;
	text-align: center;
	width: 100%;
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
	border: 1px solid black;
	padding: 10px;
`;

export const Th = styled.th`
	border: 1px solid black;
	padding: 10px;
`;

export const Thead = styled.thead`
	background-color: darkgrey;
`;

export const Tr = styled.tr``;

export const Wrapper = styled.div`
	margin: 20px auto;
	width: 80%;
`;
