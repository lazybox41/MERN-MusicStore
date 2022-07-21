import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive.js";

const Container = styled.div`
    /* display: flex;
flex-direction: column; */
    align-content: center;
    justify-content: center;
    text-align: center;
    height: 50vh;
    ${mobile({ height: "30vh" })}
`;

const Title = styled.span`
    font-size: 70px;
    font-weight: bold;
    margin-bottom: 20px;
    ${mobile({ fontSize: "36px" })}
`;
const Description = styled.div`
    font-size: 20px;
    padding: 5px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ fontSize: "12px" })}
`;
const Input = styled.input`
    border: none;
    font-size: 16px;
    padding: 10px;
    flex: 8;
    ${mobile({ fontSize: "12px", padding: "8px", flex: 6 })}
`;
const Button = styled.button`
    background-color: white;
    border: none;
    flex: 1;
    cursor: pointer;
`;
const InputContainer = styled.div`
    border: 0.5px solid gray;
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-left: 25%;
    ${mobile({ width: "51%" })}
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>
                Get notified as soon as your favorite products hit the stores!
            </Description>
            <InputContainer>
                <Input placeholder="Email Address" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
