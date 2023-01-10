import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #b4dff2;
`;

export const Avatar = styled.img`
  margin-left: 20px;
`;

export const FriendName = styled.p`
  margin: 0 0 0 20px;
  padding: 10px 0;
  font-size: 24px;
  font-weight: 500;
`;

export const ConnectStatus = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  &.true {
    background-color: rgb(22, 168, 22);
  }

  &.false {
    background-color: rgb(212, 55, 55);
  }
`;
