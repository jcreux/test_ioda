import RequestElement from "components/RequestElement/RequestElement";
import TCurrentElementProps from "types/TCurrentElementProps";
import TRequestElement from "types/TRequestElement";

const CurrentElement = ({ attributes, requestElement }: TCurrentElementProps): JSX.Element => {
	const element: TRequestElement = [[], [], [], [], [], [], [], [], []];
	const values = Object.values(attributes);

	for (let i = 0; i < requestElement.length; i++) {
		element[i][0] = values[i];
		for (let j = 0; j < requestElement[i].length; j++) {
			element[i].push(requestElement[i][j]);
		}
	}

	return <RequestElement element={element} handleClickDelete={() => {}} isRemovable={false} index={0} />;
};

export default CurrentElement;
