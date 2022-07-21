import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive.js";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { publicRequest } from "../requests.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const KEY =
	"pk_test_51JlsDMSEqkjgaboejrsge1W7djrMWmsCckdssQPNeDSIVCxQqgszusj9T2vJ8xtPhkqkQnm3Kh3ARLIFTmqStSWU00jZGHW843";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.div`
	font-weight: 300;
	text-align: center;
	font-size: 34px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${mobile({ display: "block" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	${mobile({})}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 180px;
	${mobile({ display: "none" })}
`;

const Details = styled.div`
	padding: 0px 10px;
	display: flex;

	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductType = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Summary = styled.div`
	flex: 1;
	padding: 20px;
	height: 60vh;
`;

const SummaryTitle = styled.div`
	font-weight: 200;
	font-size: 34px;
`;

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`;

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const onToken = (token) => {
		setStripeToken(token);
	};
	const navigate = useNavigate();
	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await publicRequest.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: cart.total * 100,
				});
				navigate("/success", { stripeData: res.data });
			} catch (error) {}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, navigate]);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR CART</Title>

				<Bottom>
					<Info>
						{cart.products.map((product) => (
							<Product>
								<ProductDetail>
									<Image src={product.img} />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductId>
											<b>ID:</b> {product._id}
										</ProductId>

										<ProductType>
											<b>Type:</b> {product.type}
										</ProductType>
										<ProductType>
											<b>Genre:</b> {product.categories}
										</ProductType>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<ProductAmount>
											{product.quantity}
										</ProductAmount>
									</ProductAmountContainer>
									<ProductPrice>
										Rs. {product.price * product.quantity}
									</ProductPrice>
								</PriceDetail>
							</Product>
						))}
						<Hr />
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<Typography style={{ color: "red", marginBottom: 10 }}>
							<br />
							Test Card No: 4242 4242 4242 4242
							<br />
							Date: 04/45 &nbsp; CVV: 1234
						</Typography>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>
								Rs. {cart.total}
							</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>
								Estimated Shipping
							</SummaryItemText>
							<SummaryItemPrice>
								Rs. {parseInt(cart.total / 15)}
							</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>
								- Rs. {parseInt(cart.total / 15)}
							</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>
								Rs. {cart.total}
							</SummaryItemPrice>
						</SummaryItem>

						<StripeCheckout
							name="MusicStore"
							billingAddress
							shippingAddress
							description={`Total Amount is Rs. ${cart.total} `}
							amount={cart.total * 100}
							stripeKey={KEY}
							token={onToken}>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default Cart;
