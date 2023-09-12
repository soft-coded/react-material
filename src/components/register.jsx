import { TextField, Button } from "@mui/material";

const Register = () => {
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
				<h3 style={{ textAlign: "center" }}>Register</h3>
				<TextField label="Name"></TextField>
				<TextField label="Email" type="email"></TextField>
				<TextField label="Address"></TextField>
				<TextField label="Contact number"></TextField>
				<TextField label="Password" type="password"></TextField>
				<Button>Submit</Button>
			</form>
		</div>
	);
};

export default Register;
