import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from "../responsive.js";
import { useSelector } from "react-redux";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	padding: 00px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({ padding: " 0px" })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	${mobile({ display: "none" })}
`;

const Language = styled.span`
	cursor: pointer;
	font-size: 14px;
`;

const Centre = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.div`
	font-weight: bold;
	font-size: 32px;
	padding: 10px;
	${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ justifyContent: "center", flex: 2, marginRight: "10px" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px" })}
`;

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user.currentUser);

	const handleLogout = () => {
		localStorage.clear();
		window.reload();
	};

	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					{/* <SearchContainer>
						<Input />
						<SearchIcon style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer> */}
				</Left>
				<Centre>
					<Link
						to="/"
						style={{ textDecoration: "none", color: "black" }}>
						<Logo>RECORD CLUB</Logo>
					</Link>
				</Centre>

				<Right>
					{/* {!user && (
						<Link
							to="/register"
							style={{ textDecoration: "none", color: "black" }}>
							<MenuItem>REGISTER</MenuItem>
						</Link>
					)} */}
					{!user && (
						<Link
							to="/login"
							style={{ textDecoration: "none", color: "black" }}>
							<MenuItem>LOGIN</MenuItem>
						</Link>
					)}

					<Link
						to="/cart"
						style={{ textDecoration: "none", color: "black" }}>
						<MenuItem>
							<Badge badgeContent={quantity} color="primary">
								<ShoppingCartIcon />
							</Badge>
						</MenuItem>
					</Link>
					{user && (
						<Link
							to="/"
							onClick={handleLogout}
							style={{ textDecoration: "none", color: "black" }}>
							<MenuItem>LOGOUT</MenuItem>
						</Link>
					)}
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
