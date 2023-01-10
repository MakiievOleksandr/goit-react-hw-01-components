import styled from 'styled-components';

export const Profile = styled.div`
  padding: 15px 0 0;
  margin: 20px auto;
  width: 500px;
  background-color: rgb(199, 209, 219);
  border-radius: 5px 5px 0 0;
`;

export const Avatar = styled.img`
  width: 200px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.p`
  font-size: 32px;
  font-weight: 500;
  margin: 10px auto;
`;

export const UserTag = styled.p`
  font-size: 24px;
  margin: 10px auto;
`;

export const Location = styled.p`
  font-size: 24px;
  margin: 10px auto;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  background-color: antiquewhite;
`;

export const StatsItem = styled.li`
  list-style: none;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 0 0 5px 5px;
`;

export const StatsLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
