import styled from "styled-components";
import NavbarBasic from "../components/NavbarBasic";
import Announcement from "../components/Announcement";
import { mobile } from "../responsive.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/api";
import { useSelector } from "react-redux";

const InnerContainer = styled.div`
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 30%;
	background-color: white;
	${mobile({ width: "70%" })}
`;

const Title = styled.h1`
	font-size: 32px;
	font-weight: 300;
	text-align: center;
`;

const TestInfo = styled.p`
	font-weight: 300;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Error = styled.span`
	color: red;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: black;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled {
		color: black;
		cursor: not-allowed;
	}
`;

const Link = styled.a`
	margin: 5px 0px;
	font-size: 14px;
	text-decoration: underline;
	cursor: pointer;
`;

const OuterContainer = styled.div``;

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, { username, password });
	};
	return (
		<OuterContainer>
			<NavbarBasic />
			<Announcement />
			<InnerContainer>
				<Wrapper>
					<Title onClick={handleClick} disabled={isFetching}>
						LOGIN
					</Title>
					<Form>
						<TestInfo>
							Test Username: user <br />
							Test Password: password
						</TestInfo>
						<Input
							placeholder="Username"
							onChange={(e) => setUsername(e.target.value)}
						/>
						<Input
							placeholder="Password"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button onClick={handleClick}>LOGIN</Button>
						{error && <Error>Something Went Wrong!</Error>}
						<Link>FORGOT PASSWORD?</Link>
						<Link>CREATE A NEW ACCOUNT</Link>
					</Form>
				</Wrapper>
			</InnerContainer>
		</OuterContainer>
	);
};

export default Login;
