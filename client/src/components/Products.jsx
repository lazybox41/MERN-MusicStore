import { React, useState, useEffect } from "react";
import styled from "styled-components";
//import { popularProducts } from "../data";
import Product from "./Product";
import { mobile } from "../responsive.js";
import axios from "axios";

const Container = styled.div`
	display: flex;
	padding: 10px 20px;
	justify-content: space-between;
	flex-wrap: wrap;
`;
const Heading = styled.span`
	margin-left: 20px;
	font-size: 56px;
	font-weight: bold;
	${mobile({ display: "none" })}
`;

const Products = (cat) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const c = cat["cat"];
				const res = c
					? await axios.get(
							`http://localhost:5000/api/products?category=${c}
						   		`
					  )
					: await axios.get(`http://localhost:5000/api/products`);

				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [cat]);

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return (
		<div>
			<Heading>List of Records</Heading>
			<Container>
				{products.map((item) => (
					<Product item={item} />
				))}
			</Container>
		</div>
	);
};

export default Products;
