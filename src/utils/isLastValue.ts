import TRequestElement from "types/TRequestElement";

const isLastValue = (element: TRequestElement, index: number): boolean => {
	for (let i = index; i < element.length; i++) {
		if (element[i][0]) {
			return false;
		}
	}

	return true;
};

export default isLastValue;
