import { useState } from "react";

import CurrentElement from "components/CurrentElement/CurrentElement";
import emptyAttributes from "consts/emptyAttributes";
import Form from "components/Form/Form";
import Header from "components/Header/Header";
import isEmptyRequestElement from "utils/isEmptyRequestElement";
import RequestElement from "components/RequestElement/RequestElement";
import SQLSection from "components/SQLSection/SQLSection";
import TAttributes from "types/TAttributes";
import TRequestElement from "types/TRequestElement";

const App = (): JSX.Element => {
	const [attributes, setAttributes] = useState<TAttributes>(emptyAttributes);
	const [request, setRequest] = useState<TRequestElement[]>([]);
	const [requestElement, setRequestElement] = useState<TRequestElement>([[], [], [], [], [], [], [], [], []]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const newAttributes: TAttributes = { ...attributes };

		newAttributes[e.target.name as keyof TAttributes] = e.target.value;
		setAttributes(newAttributes);
	};

	const handleClickAdd = (e: React.FormEvent<HTMLButtonElement>): void => {
		e.preventDefault();

		const index: number = parseInt(e.currentTarget.value);
		const newAttributes: TAttributes = { ...attributes };
		const value: string = attributes[e.currentTarget.name as keyof TAttributes];

		if (value.length !== 0 && !requestElement[index].includes(value)) {
			requestElement[index].push(value);
		}

		setRequestElement(requestElement);
		newAttributes[e.currentTarget.name as keyof TAttributes] = "";
		setAttributes(newAttributes);
	};

	const handleClickDelete = (index: number): void => {
		const newRequest = [...request];

		newRequest.splice(index, 1);
		setRequest(newRequest);
	};

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
		e.preventDefault();

		const values = Object.values(attributes);

		for (let i = 0; i < values.length; i++) {
			if (values[i].length !== 0 && !requestElement[i].includes(values[i])) {
				requestElement[i].push(values[i]);
			}
		}

		if (!isEmptyRequestElement(requestElement)) {
			request.push(requestElement);
		}

		setRequest(request);
		setRequestElement([[], [], [], [], [], [], [], [], []]);
		setAttributes(emptyAttributes);
	};

	return (
		<div>
			<Header />
			<Form
				attributes={attributes}
				handleChange={handleChange}
				handleClickAdd={handleClickAdd}
				handleSubmit={handleSubmit}
			/>
			<CurrentElement attributes={attributes} requestElement={requestElement} />
			<h2 style={{ textAlign: "center" }}>↓ ↓ ↓ ↓</h2>
			{request.map((req, index) => (
				<>
					<RequestElement
						element={req}
						handleClickDelete={handleClickDelete}
						isRemovable={true}
						index={index}
						key={index}
					/>
				</>
			))}
			<SQLSection request={request} />
		</div>
	);
};

export default App;
