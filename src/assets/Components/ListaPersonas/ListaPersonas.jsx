import PropTypes from 'prop-types';


export default function ListaPersonas({Personas}) {
    return (
        <div>
            <ul>
                {Personas.map(({ nombre: name }) => (
                    <li key={name}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


PropTypes.ListaPersonas = {
    Personas: PropTypes.arrayOf(PropTypes.shape({
        nombre : PropTypes.string,
        esMayorDeEdad : PropTypes.bool,
        ciclo : PropTypes.string
    })),
    
}


ListaPersonas.defaultProps = {
    Personas: [],
};