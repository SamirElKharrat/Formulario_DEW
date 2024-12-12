import { useState } from "react";
import FrmPersona from "../../../FrmPersona";
import ListaPersonas from "../ListaPersonas/ListaPersonas";

let Personas = [
    { nombre: "Pedro", esMayorDeEdad: true, ciclo: "medio" },
    { nombre: "Ian", esMayorDeEdad: true, ciclo: "superior" },
    { nombre: "Pablo", esMayorDeEdad: false, ciclo: "medio" },
];

export default function Contenedor() {
    let setPersonas;
    [Personas, setPersonas] = useState(Personas);
    function addPersona(persona) {
        setPersonas(Personas => [...Personas, persona]);
    }

    return (
        <div>
            <ListaPersonas Personas={Personas}/>
            <FrmPersona addPersona={addPersona} />
        </div>
    )
}
