import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getUsers } from '../../api/get';
import { useHistory } from 'react-router';

const Basic = () => {
  const history = useHistory();
  const { data } = useQuery('users', getUsers);

  const handleClick = (id: number) => {
    history.push(`/basic/${id}`);
  };

  return (
    <Container>
      <ItemContainer>
        {data?.map((item) => (
          <Item key={item.id} onClick={() => handleClick(item.id)}>
            {item.name}
          </Item>
        ))}
      </ItemContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
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

export default Basic;
