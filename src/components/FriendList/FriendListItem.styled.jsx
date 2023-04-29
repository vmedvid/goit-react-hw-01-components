import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.3);
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #000;
`;
