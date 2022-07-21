import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../responsive.js";

const Container = styled.div`
	display: flex;
	margin-bottom: 20px;
	${mobile({
		overflow: "scroll",
		// flexDirection: "column",
		display: "block",
		height: "125vh",
	})};
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Desc = styled.div`
	padding-right: 10px;
	padding-bottom: 10px;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Centre = styled.div`
	flex: 1;
	margin-left: 20px;
	/* ${mobile({ display: "none" })}; */
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const Right = styled.div`
	flex: 1;
	margin-left: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Title>Record Club</Title>
				<Desc>
					There are many variations of passages of Lorem Ipsum
					available, but the majority have suffered alteration in some
					form, by injected humour, or randomised words which don’t
					look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon>
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon>
						<PinterestIcon />
					</SocialIcon>
					<SocialIcon>
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon>
						<TwitterIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Centre>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Vintage</ListItem>
					<ListItem>Classic</ListItem>
					<ListItem>New Arrivals</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Centre>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<RoomIcon style={{ marginRight: "10px" }} /> Lorem ipsum
					dolor sit amet consectetur elit.
				</ContactItem>
				<ContactItem>
					<PhoneIcon style={{ marginRight: "10px" }} /> +91 8823444544
				</ContactItem>
				<ContactItem>
					<MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
					musicstore@example.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
