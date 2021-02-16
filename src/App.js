import './App.css';
import Title from './components/Title';
import LoginPage from './components/LoginPage';
import ChatPage from './components/ChatPage';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Title />
      <Router>
        <LoginPage />
        <ChatPage />
      </Router>
    </div>
  );
}

export default App;
