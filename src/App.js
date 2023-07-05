import Table from './Table';
import Title from './Title';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import MarkModal from './MarkModal';
import Mark from './Mark';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/">
              <Table />
          </Route>
          <Route path="/Mark/:id">
              <Mark />
          </Route> 
          <Route path="/Modal">
              <MarkModal />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
