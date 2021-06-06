//import logo from './logo.svg';
//import './App.css';
import 'bootstrap'
import {BtnAdd} from "./components/BtnAdd"
import TodoList from "./components/TodoList"
import DashBoard from "./components/DashBoard"
import { connect } from 'react-redux'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Todo list</h1>
        <BtnAdd/>
      </header>
      <DashBoard/>
      <TodoList/>
      
    </div>
  );
}

// const mapStateToProps = state =>{
//   return {token: state.auth.token}
// }

export default connect(null,null)(App)
