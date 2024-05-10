import TRequestElement from "types/TRequestElement";

const isEmptyRequestElement = (element: TRequestElement): boolean => {
	for (let i = 0; i < element.length; i++) {
		if (element[i].length !== 0) {
			return false;
		}
	}

	return true;
};

export default isEmptyRequestElement;
