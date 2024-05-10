import TFormProps from "types/TFormProps";

import { Button, StyledForm, SubmitButton, Wrapper } from "components/Form/styled";

const Form = ({ attributes, handleChange, handleClickAdd, handleSubmit }: TFormProps): JSX.Element => {
	return (
		<Wrapper>
			<StyledForm>
				<input
					maxLength={32}
					name="firstName"
					onChange={handleChange}
					placeholder="FIRST NAME"
					type="text"
					value={attributes.firstName}
				/>
				<Button children="+" name="firstName" onClick={handleClickAdd} value="0" />
				<input
					maxLength={32}
					name="lastName"
					onChange={handleChange}
					placeholder="LAST NAME"
					type="text"
					value={attributes.lastName}
				/>
				<Button children="+" name="lastName" onClick={handleClickAdd} value="1" />
				<input
					maxLength={32}
					name="email"
					onChange={handleChange}
					placeholder="EMAIL"
					type="email"
					value={attributes.email}
				/>
				<Button children="+" name="email" onClick={handleClickAdd} value="2" />
				<input
					max="100"
					min="0"
					name="age"
					onChange={handleChange}
					placeholder="AGE"
					type="number"
					value={attributes.age}
				/>
				<Button children="+" name="age" onClick={handleClickAdd} value="3" />
				<select name="gender" onChange={handleChange} value={attributes.gender}>
					<option value="">GENDER</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
				<Button children="+" name="gender" onClick={handleClickAdd} value="4" />
				<input
					maxLength={32}
					name="city"
					onChange={handleChange}
					placeholder="CITY"
					type="text"
					value={attributes.city}
				/>
				<Button children="+" name="city" onClick={handleClickAdd} value="5" />
				<input
					maxLength={32}
					name="zipCode"
					onChange={handleChange}
					placeholder="ZIP CODE"
					type="text"
					value={attributes.zipCode}
				/>
				<Button children="+" name="zipCode" onClick={handleClickAdd} value="6" />
				<input name="lastPurchase" onChange={handleChange} type="date" value={attributes.lastPurchase} />
				<Button children="+" name="lastPurchase" onClick={handleClickAdd} value="7" />
				<select name="clientCategory" onChange={handleChange} value={attributes.clientCategory}>
					<option value="">CLIENT CATEGORY</option>
					<option value="private">Private</option>
					<option value="professional">Professional</option>
				</select>
				<Button children="+" name="clientCategory" onClick={handleClickAdd} value="8" />
				<SubmitButton children="ADD" onClick={handleSubmit} />
			</StyledForm>
		</Wrapper>
	);
};

export default Form;
