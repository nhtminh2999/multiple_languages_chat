import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import './App.css';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/chat' component={Chat} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
