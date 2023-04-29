import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 400px;
  height: auto;
  margin: 30px auto;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid #6d6a6a;
  border-radius: 8px;
  overflow: hidden;
`;

export const Description = styled.div`
  height: auto;
  margin: 0;
  padding: 20px 30px 40px 30px;
`;

export const Avatar = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto 20px;
`;

export const UserName = styled.p`
  margin: 0;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  color: #000;
`;

export const Tag = styled.p`
  margin: 20px 0 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #6d6a6a;
`;

export const Location = styled.p`
  margin: 0;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #6d6a6a;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1px;
  background-color: #6d6a6a;
  border-top: 1px solid #6d6a6a;
`;

export const StatsItem = styled.li`
  display: flex;
  width: calc(100% / 3);
  flex-direction: column;
  justify-content: center;
  padding: 30px 10px;
  background-color: #d8d8d8;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #6d6a6a;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;
