import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import User from "./components/User";
import Calender from "./components/Calender";
import Projects from "./components/Projects";
import ToDos from "./components/ToDos";
import EditToDo from "./components/EditToDo";

function App() {
  return (
    <div>
      <Header>
        <User/>
        <Calender/>
        <Projects/>    
      </Header>
      <Main>
        <ToDos/>
        <EditToDo/>
      </Main>
    </div>
  );
}

export default App;
