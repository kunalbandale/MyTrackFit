import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/icons-material";

const Card = styled.div`
 flex: 1;
  min-width: 200px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + '20'};
  border-radius: 14px;
  display: flex;
  gap: 6px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + '15'};
`;
const Title = styled.div`
font-weight:600;
font-size:16px;
color: ${({ theme }) => theme.primary};
@media (max-width:600px) {
font-size:14px;
}
`;



const WeeklyStatCard = ( {data}) => {
    return <Card>
        <Title>Weekly Calories Burned</Title>
        {data?.totalWeeksCaloriesBurnt && (
            <BarChart xAxis={[
                {scaleType:"band", data:data?.totalWeeksCaloriesBurnt?.weeks}
            ]}
            series = {[{data: data?.totalWeeksCaloriesBurnt?.caloriesBurned}]}
            height={300}
            />
        )}
    </Card>
};

export default WeeklyStatCard;