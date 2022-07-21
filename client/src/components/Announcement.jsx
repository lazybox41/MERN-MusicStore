import React from "react";
import styled from "styled-components";

const Container = styled.div`
	text-align: center;
	background-color: black;
	color: white;
	padding: 5px;
`;

const Announcement = () => {
	return <Container>Limited Offer: Free Shipping on all orders!</Container>;
};

export default Announcement;
