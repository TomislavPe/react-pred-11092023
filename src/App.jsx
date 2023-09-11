import "./App.css";
import FuncComponent from "./components/FuncComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
    return (
        <>
            <ClassComponent />
            <FuncComponent title="title poslan" ime="Tomislav" godine={40}>
            <p>Dodatan opis...</p>
            </FuncComponent>
        </>
    );
}

export default App;
