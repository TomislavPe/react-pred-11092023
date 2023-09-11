import { Component } from "react";

// function Komponenta() {
//     return <div>Komponenta</div>;
// }

const Komponenta = (props) => {
    return(
    <>
        <div>Komponenta</div>
        <h2>{props.title}</h2>
    </>
    )
};

// class Komponenta extends Component {

//     render() {
//         return (
//             <>
//                 <h1>Komponenta</h1>
//                 <h2>{this.props.title}</h2>
//             </>
//         );
//     }
// }

export default Komponenta;
