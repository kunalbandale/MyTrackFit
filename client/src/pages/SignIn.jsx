import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Container = styled.div`
  widhth: 100%;
  max-width: 500px;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignIn = () => {
    return (
        <Container>
          <div>
            <Title>Welcome to My Track Fit 👋</Title>
            <Span>Please login with your details here</Span>
          </div>
          {/*  */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            <TextInput label="E-mail Address" placeholder="youremail@gmail.com" />
            <TextInput label="Password" placeholder="" password />
            <Button text="SignIn"/>
          </div>
        </Container>
      );
    };

export default SignIn;