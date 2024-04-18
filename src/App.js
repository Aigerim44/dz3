import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Todo from "./components/todo/Todo";
import TodosPage from "./pages/todosPage/TodosPage";
function App() {
    return (
        <div className="App">
            <MainPage/>
            <AboutPage/>
            <Todo/>
            <TodosPage/>

        </div>
    );
}

export default App;
