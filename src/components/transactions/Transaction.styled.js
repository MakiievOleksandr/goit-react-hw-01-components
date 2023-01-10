import styled from 'styled-components';

export const Transactions = styled.table`
  width: 500px;
  margin: 20px auto;
  border-collapse: collapse;
`;

export const TableData = styled.td`
  text-align: center;
  padding: 10px 5px;
  border: 2px solid black;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: cornsilk;
  }
`;

export const TableHeader = styled.th`
  padding: 10px 5px;
  border: 2px solid black;
  background-color: rgb(186, 156, 156);
`;
