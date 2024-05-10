import TRequestElement from "types/TRequestElement";

type TRequestElementProps = {
	element: TRequestElement;
	handleClickDelete: (index: number) => void;
	index: number;
	isRemovable: boolean;
};

export default TRequestElementProps;
