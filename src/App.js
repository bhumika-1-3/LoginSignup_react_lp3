import './App.css';
import Layout from '../src/components/Layout'
import Layoutpg2 from './components/Layoutpg2';
import Login from './components/Login';
import FinalPage from './components/finalPage';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/" exact>
  <Layout/>
  </Route>
  <Route path={`/login`} >
    <Login/>
  </Route>
  <Route path={`/signup/details`}>
    <Layoutpg2/>
  </Route>
  <Route path={`/mainPage/:name`}>
<FinalPage/>
  </Route>
  </Switch>
    </div>
    </Router>
  );
}
export default App;
