import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/index';
import SigninPage from './Pages/Signin';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={SigninPage} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
