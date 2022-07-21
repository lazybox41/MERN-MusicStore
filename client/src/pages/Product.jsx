import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Newsletter from "../components/Newsletter";
import { publicRequest } from "../requests.js";
import Footer from "../components/Footer";
import { mobile } from "../responsive.js";
import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux.js";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ display: "block" })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: "100%" })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 36px;
`;

const FilterContainer = styled.div`
	width: 50%;

	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterTitle1 = styled.span`
	font-size: 20px;
	font-weight: 200;
	margin-right: 10px;
`;

const FilterType = styled.select`
	margin-left: 10px;
	padding: 5px;
	border: none;
	font-size: 20px;
`;

const FilterOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
	font-size: 18px;
`;

const Button = styled.button`
	padding: 15px;
	border: none;
	background-color: black;
	cursor: pointer;
	font-weight: 500;
	color: white;
	width: 50%;
	&:hover {
		background-color: gray;
		color: black;
	}
	${mobile({ width: "100%" })}
`;

const InputContainer = styled.div`
	display: flex;
	margin: 20px 0px;
	${mobile({ display: "block" })}
`;

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [type, setType] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get("/products/find/" + id);
				setProduct(res.data);
			} catch (error) {}
		};
		getProduct();
	}, [id]);

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	const handleQuantity = (operation) => {
		if (operation === "dec") {
			if (quantity > 1) setQuantity(quantity - 1);
		} else {
			setQuantity(quantity + 1);
		}
	};

	const handleClick = () => {
		if (type) {
			dispatch(addProduct({ ...product, quantity, type }));
		} else {
			alert("Please Select Type");
		}
	};

	return (
		<Container>
			<Navbar />
			<Announcement />

			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Desc>{product.desc}</Desc>
					<Price>{"Rs. " + product.price}</Price>
					<InputContainer>
						<AddContainer>
							<AmountContainer>
								<FilterTitle1>Quantity </FilterTitle1>

								<RemoveIcon
									onClick={() => handleQuantity("dec")}
								/>
								<Amount>{quantity}</Amount>
								<AddIcon
									onClick={() => handleQuantity("inc")}
								/>
							</AmountContainer>
						</AddContainer>
						<FilterContainer>
							<Filter>
								<FilterTitle>Type</FilterTitle>

								<FilterType
									onChange={(e) => {
										setType(e.target.value);
									}}>
									<FilterOption>Select Type</FilterOption>
									{product.type?.map((t) => {
										return (
											<FilterOption key={t}>
												{t}
											</FilterOption>
										);
									})}
								</FilterType>
							</Filter>
						</FilterContainer>
					</InputContainer>

					<Button onClick={handleClick}>ADD TO CART</Button>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
