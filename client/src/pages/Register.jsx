import styled from "styled-components";
import NavbarBasic from "../components/NavbarBasic";
import Announcement from "../components/Announcement";
import { mobile } from "../responsive.js";

const InnerContainer = styled.div`
	background-size: cover;
	display: flex;
	justify-content: center;
	overflow-y: auto;
`;

const Wrapper = styled.div`
	width: 40%;
	background-color: white;
	margin-top: 30px;
	${mobile({ width: "70%", height: "120vh" })}
`;

const Title = styled.div`
	font-size: 32px;
	font-weight: 300;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	background-color: black;
	color: white;
	cursor: pointer;
`;

const OuterContainer = styled.div``;

const Register = () => {
	return (
		<OuterContainer>
			<NavbarBasic />
			<Announcement />
			<InnerContainer>
				<Wrapper>
					<Title>CREATE ACCOUNT</Title>
					<Form>
						<Input placeholder="First Name" />
						<Input placeholder="Last Name" />
						<Input placeholder="Username" />
						<Input placeholder="Email" />
						<Input placeholder="Password" />
						<Input placeholder="Confirm Password" />
						<Agreement>
							By creating an account, I consent to the processing
							of my personal data in accordance with the{" "}
							<b>PRIVACY POLICY</b>
						</Agreement>
						<Button>CREATE ACCOUNT</Button>
					</Form>
				</Wrapper>
			</InnerContainer>
		</OuterContainer>
	);
};

export default Register;
