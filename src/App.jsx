import "./App.css";
import { Component } from "react";
import ClassComponent from "./components/ClassComponent";
import FuncComponentA from "./components/FuncComponentA";
import FuncComponentB from "./components/FuncComponentB";

class App extends Component {
    constructor() {
        super();
        this.users = [
            { name: "Alisa", age: 25 },
            { name: "Robert", age: 30 },
            { name: "Tom", age: 22 },
        ];
    }

    render() {
        const [user1, user2, user3] = this.users;

        return (
            <>
                <h1>Naslov iz glavne parent komponente(App.js)</h1>
                <FuncComponentA name={user1.name} age={user1.age} />
                <ClassComponent name={user2.name} age={user2.age} />
                <FuncComponentB>
                    {user3.name}
                    {user3.age}
                </FuncComponentB>
            </>
        );
    }
}

export default App;
