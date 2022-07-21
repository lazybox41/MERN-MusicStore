import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 00px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
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
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const Navbar = () => {
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
					<Logo>MUSICSTORE</Logo>
				</Centre>
				<Right></Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
