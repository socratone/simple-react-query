import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import BasicId from './pages/Basic/Id';
import Basic from './pages/Basic';
import Cache from './pages/Cache';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Container>
          <Nav>
            <Link to="/basic">Basic</Link>
            <Link to="/cache">Cache</Link>
          </Nav>

          <Switch>
            <Route path="/basic/:id" component={BasicId} />
            <Route path="/basic" component={Basic} />
            <Route path="/cache" component={Cache} />
            <Route path="/" component={Basic} />
          </Switch>
        </Container>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Container = styled.div`
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid gainsboro;
`;

export default App;
