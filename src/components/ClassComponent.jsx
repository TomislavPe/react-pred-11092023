import { Component } from "react";
export default class Komponenta extends Component {
    render() {
        const { name, age } = this.props;
        return (
            <>
                <h2>Klasna komponenta</h2>
                <p>Ime korisnika 2: {name}</p>
                <p>Dob korisnika 2: {age}</p>
            </>
        );
    }
}
