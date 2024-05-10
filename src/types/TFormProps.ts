import TAttributes from "types/TAttributes";

type TFormProps = {
	attributes: TAttributes;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	handleClickAdd: (e: React.FormEvent<HTMLButtonElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
};

export default TFormProps;
