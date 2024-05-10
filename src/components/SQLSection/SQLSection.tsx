import { Box, LinearProgress, LinearProgressProps, Typography } from "@mui/material";
import { ReactElement, useState } from "react";

import setSQLRequest from "utils/setSQLRequest";
import TSQLSectionProps from "types/TSQLSectionProps";

import { Button, Wrapper } from "components/SQLSection/styled";

const LinearProgressWithLabel = (props: LinearProgressProps & { value: number }): ReactElement => {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
};

const SQLSection = ({ request }: TSQLSectionProps): JSX.Element => {
	const [progress, setProgress] = useState<number>(0);
	const [SQL, setSQL] = useState<string>("");

	const handleClickRequest = () => {
		setSQL(setSQLRequest(request));

		const timer = setInterval(() => {
			setProgress((progress) => (progress >= 100 ? 100 : progress + 1));
		}, 10);

		return () => clearInterval(timer);
	};

	return (
		<Wrapper>
			<Button children="GENERATE SQL REQUEST" onClick={handleClickRequest} />
			{SQL !== "" ? (
				<>
					<LinearProgressWithLabel value={progress} />
					{progress === 100 ? <p>{SQL}</p> : null}
				</>
			) : null}
		</Wrapper>
	);
};

export default SQLSection;
