import styled from '@emotion/styled';

export const StatisticsWrap = styled.section`
  width: 400px;
  margin: 60px auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid #6d6a6a;
  border-radius: 8px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;
  color: #000;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  padding: 15px 15px;
  background-color: ${props => props.backgroundColor};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;

export const Percentage = styled.span`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
