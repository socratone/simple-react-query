import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  color: white;
  background: dodgerblue;
  cursor: pointer;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  font-weight: 700;

  &:hover {
    background: royalblue;
  }

  &:active {
    background: dodgerblue;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  padding: 10px;
  color: #303030;
  border: 1px solid gainsboro;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: whitesmoke;
  }

  &:active {
    background: gainsboro;
  }
`;
