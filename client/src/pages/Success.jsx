import { React, useEffect } from "react";
import NavbarBasic from "../components/NavbarBasic";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { removeAllProducts } from "../redux/cartRedux";
import styled from "styled-components";
import { mobile } from "../responsive.js";
import { useNavigate } from "react-router-dom";

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	${mobile({})}
`;

const Button = styled.button`
	padding: 15px;
	border: none;
	background-color: black;
	cursor: pointer;
	font-weight: 500;
	color: white;

	font-size: 16;
	&:hover {
		background-color: gray;
		color: black;
	}
	${mobile({ width: "100%" })}
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

const Title = styled.div`
	font-weight: 500;
	text-align: center;
	font-size: 34px;
`;

const SubTitle = styled.div`
	font-weight: 300;
	text-align: center;
	font-size: 28px;
`;

const Success = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let successCart = cart;
	useEffect(() => {
		console.log(successCart);
	}, []);
	return (
		<div>
			<NavbarBasic />
			<Announcement />
			<Info style={{ padding: 10 }}>
				<Button
					onClick={() => {
						dispatch(removeAllProducts({}));
						navigate("/");
					}}>
					Back to Home
				</Button>
				<Title>Payment Recieved!</Title>
				<SubTitle>
					The following products are getting ready to be dispatched!
				</SubTitle>

				{successCart.products.map((product) => (
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

			<Footer />
		</div>
	);
};

export default Success;
