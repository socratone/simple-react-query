import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getUsers } from '../../api/get';
import {
  Container,
  ItemContainer,
  Item,
} from '../../components/styledComponents';

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

export default Basic;
