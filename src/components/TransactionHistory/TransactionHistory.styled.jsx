import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 60px auto;
  width: 600px;
  font-size: 14px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const TableHead = styled.thead`
  background-color: #09a1c0;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  th {
    padding: 10px 0;
    width: 200px;
  }
`;

export const TableRow = styled.tr`
  text-align: center;
  color: #5c5c5c;
  :nth-of-type(even) {
    background-color: #e9e9e9;
  }
  td {
    padding: 10px 0;
  }
`;
