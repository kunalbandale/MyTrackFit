import React, { useState } from "react";
import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/WeeklyStatCard";
import AddWorkout from "../components/AddWorkout";
import WorkoutCard from "../components/cards/WorkoutCard"

const Container = styled.div`
flex:1;
height:100%;
display:flex;
justify-content:center;
padding;22px 0px;
overflow-y:scroll;
`;
const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.div`
display:flex;
flex-direction:column;
padding:0px 16px;
gap:22px;
padding:0px 16px;
@media (max-width:600px) {
gap:12px;
}
`;
const CardWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justfiy-content:center;
gap:20px;
margin-bottom:100px;
@media (max-width:600px) {
gap:12px;
}
`;

const Dashboard = () => {
  const [workout , setWorkout] = useState("");
    const data = { }
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item) => (
            <CountsCard item={item} />
          ))}
        </FlexWrap>
        <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
          <AddWorkout workout={workout} setWorkout={setWorkout}/>
        </FlexWrap>

        <Section>
          <Title>Todays Workout</Title>
          <CardWrapper>
            {/* for now */}
          <WorkoutCard/>
          </CardWrapper>


        </Section>
      </Wrapper>
    </Container>
  );
};
export default Dashboard;
