import './App.css';
import Title from './components/Title';
import LoginPage from './components/LoginPage';
import ChatPage from './components/ChatPage';
import ErrorPage from './components/ErrorPage';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <LoginPage path="/" />
        <ChatPage path="/main" />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;
