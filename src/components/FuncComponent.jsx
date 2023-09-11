import PropTypes from "prop-types";

export default function FuncComponent({title, ime, godine}) {
    return (
        <>
            <h1>Komponenta</h1>
            <h2>{title}</h2>
            <p>{ime} će za 10 godina imati {godine + 10}</p>

        </>
    );
}


FuncComponent.propTypes = {
    title: PropTypes.string.isRequired,
    ime: PropTypes.string,
    godine: PropTypes.number,
}

FuncComponent.defaultProps = {
    godine: 30,
}