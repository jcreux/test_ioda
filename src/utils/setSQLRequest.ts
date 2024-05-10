import getAttributeName from "utils/getAttributeName";
import isLastValue from "utils/isLastValue";
import TRequestElement from "types/TRequestElement";

const setSQLRequest = (request: TRequestElement[]): string => {
	let SQLRequest: string = "SELECT * FROM users";

	if (request.length !== 0) {
		SQLRequest += " WHERE (";

		for (let i = 0; i < request.length; i++) {
			for (let j = 0; j < request[i].length; j++) {
				if (request[i][j].length !== 0) {
					if (request[i][j].length === 1) {
						if (isLastValue(request[i], j + 1)) {
							SQLRequest += getAttributeName(j) + ' = "' + request[i][j][0] + '"';
						} else {
							SQLRequest += getAttributeName(j) + ' = "' + request[i][j][0] + '" AND ';
						}
					} else {
						SQLRequest += "(";
						for (let k = 0; k < request[i][j].length; k++) {
							if (request[i][j].length - 1 === k) {
								if (isLastValue(request[i], j + 1)) {
									SQLRequest += getAttributeName(j) + ' = "' + request[i][j][k] + '")';
								} else {
									SQLRequest += getAttributeName(j) + ' = "' + request[i][j][k] + '") AND ';
								}
							} else {
								SQLRequest += getAttributeName(j) + ' = "' + request[i][j][k] + '" OR ';
							}
						}
					}
				}
			}

			if (request.length - 1 === i) {
				SQLRequest.split(" AND ) OR (").pop();
				SQLRequest += ")";
			} else {
				SQLRequest += ") OR (";
			}
		}
	}

	return SQLRequest + ";";
};

export default setSQLRequest;
