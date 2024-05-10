import headerCategories from "consts/headerCategories";

import { Categories, Category, Link, Wrapper } from "components/Header/styled";

const Header = (): JSX.Element => {
	return (
		<Wrapper>
			<Categories>
				{headerCategories.map((headerCategory) => (
					<Category key={headerCategory.id}>
						<Link children={headerCategory.name} href={headerCategory.url} />
					</Category>
				))}
			</Categories>
		</Wrapper>
	);
};

export default Header;
