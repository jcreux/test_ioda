import TRequestElementProps from "types/TRequestElementProps";

import { Button, Table, Tbody, Td, Th, Thead, Tr, Wrapper } from "components/RequestElement/styled";

const RequestElement = ({ element, handleClickDelete, index, isRemovable }: TRequestElementProps): JSX.Element => {
	return (
		<Wrapper>
			<Table>
				<Thead>
					<Tr>
						<Th>First name</Th>
						<Th>Last name</Th>
						<Th>Email</Th>
						<Th>Age</Th>
						<Th>Gender</Th>
						<Th>City</Th>
						<Th>Zip code</Th>
						<Th>Last purchase</Th>
						<Th>Client category</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						{element.map((elem, index) => (
							<Td key={index}>{elem.map((e) => e + " / ")}</Td>
						))}
					</Tr>
				</Tbody>
			</Table>
			{isRemovable ? <Button onClick={() => handleClickDelete(index)}>X</Button> : null}
		</Wrapper>
	);
};

export default RequestElement;
