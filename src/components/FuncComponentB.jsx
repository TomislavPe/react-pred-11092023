export default function FuncComponentB(props) {
    const [name, age] = props.children;
    return (
        <>
            <h2>Funkcijska komponenta dva</h2>
            <p>Ime korisnika 3: {name}</p>
            <p>Dob korisnika 3: {age}</p>
            <p>Proslijeđeni children propsi: {props.children}</p>
        </>
    );
}
