
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoListFunctional from './components/TodoList/TodoListFunctional';
import UserProfile from './components/UserProfile/UserProfile';
import Transfer from './components/Transfer/Transfer.jsx'
import { BrowserRouter as Router, Route , Routes, } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/user/:id' Component={UserProfile}>
        
      </Route>
    </Routes>

   </Router>
  );
}

export default App;
