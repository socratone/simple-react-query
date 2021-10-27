import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Basic from './pages/Basic';

function App() {
  return (
    <Router>
      <Container>
        <Nav>
          <Link to="/basic">Basic</Link>
        </Nav>

        <Switch>
          <Route path="/basic">
            <Basic />
          </Route>
        </Switch>
      </Container>
    </Router>
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
