import { useQuery, useQueryClient } from 'react-query';
import { getUsers } from '../../api/get';
import { useHistory } from 'react-router';
import {
  Container,
  ButtonContainer,
  Button,
  ItemContainer,
  Item,
} from '../../components/styledComponents';

const Cache = () => {
  const history = useHistory();
  const queryClient = useQueryClient();

  const { data } = useQuery('users', getUsers, { staleTime: Infinity });

  const handleClickInvalidateQueries = () => {
    queryClient.invalidateQueries('users');
  };

  const handleClick = (id: number) => {
    history.push(`/basic/${id}`);
  };

  return (
    <Container>
      <ButtonContainer style={{ marginBottom: '10px' }}>
        <Button onClick={handleClickInvalidateQueries}>
          invalidateQueries
        </Button>
      </ButtonContainer>
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

export default Cache;
