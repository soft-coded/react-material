import { Button, TextField } from "@mui/material";

const Login = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column"
			}}
		>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
					marginTop: "1rem",
					backgroundColor: "rgb(241, 241, 241)",
					padding: 20,
					borderRadius: 10
				}}
			>
				<h3 style={{ textAlign: "center" }}>Log In</h3>
				<TextField label="Email"></TextField>
				<TextField label="Password" type="password"></TextField>
				<Button>Submit</Button>
			</form>
		</div>
	);
};

export default Login;
