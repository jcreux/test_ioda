const getAttributeName = (index: number): string | undefined => {
	switch (index) {
		case 0:
			return "first_name";
		case 1:
			return "last_name";
		case 2:
			return "email";
		case 3:
			return "age";
		case 4:
			return "gender";
		case 5:
			return "city";
		case 6:
			return "zip_code";
		case 7:
			return "last_purchase";
		case 8:
			return "client_category";
	}
};

export default getAttributeName;
