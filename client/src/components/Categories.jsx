import React from "react";
import { categories } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive.js";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    margin-bottom: 20px;
    ${mobile({ flexDirection: "column", padding: "0px" })};
`;
const Heading = styled.span`
    padding: 20px;
    font-size: 56px;
    font-weight: bold;
    ${mobile({ display: "none" })};
`;

const Categories = () => {
    return (
        <div>
            <Heading>Categories</Heading>
            <Container>
                {categories.map((item) => (
                    <CategoryItem item={item} />
                ))}
            </Container>
        </div>
    );
};

export default Categories;
