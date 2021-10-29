import { useQuery } from 'react-query';
import { useHistory, useRouteMatch } from 'react-router';
import { getUser } from '../../api/get';
import { Button, Container } from '../../components/styledComponents';

const BasicId = () => {
  const history = useHistory();
  const match = useRouteMatch<{ id: string }>();
  const id = Number(match.params.id);

  const { data } = useQuery(['user', id], () => getUser(id));

  const handleClick = () => history.goBack();

  return (
    <Container>
      <Button onClick={handleClick} style={{ marginBottom: '10px' }}>
        Back
      </Button>
      <div>{data?.name}</div>
    </Container>
  );
};

export default BasicId;
