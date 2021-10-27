import { useQuery } from 'react-query';
import { useRouteMatch } from 'react-router';
import styled from 'styled-components';
import { getUser } from '../../api/get';

const BasicId = () => {
  const match = useRouteMatch<{ id: string }>();
  const id = Number(match.params.id);

  const { data } = useQuery(['user', id], () => getUser(id));

  return <Container>{data?.name}</Container>;
};

const Container = styled.div`
  padding: 20px;
`;

export default BasicId;
