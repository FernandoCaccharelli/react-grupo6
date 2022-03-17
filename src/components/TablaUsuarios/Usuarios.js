import React, { useEffect, useState } from "react";
// import UsuariosRow from "./UsuariosRow"

function Usuarios() {
    const [Usuarios, setUsuarios] = useState([])

    useEffect( () => {
       
        // async function fetchData () {

        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data.results)
            })
            
        // }
        // fetchData();

    }, [])


    return (
        <div className="card shadow position-top-box fit">
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Email</th>
                        <th scope="col">Fecha de nacimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {Usuarios.map((usuario,i) => {
                        return(
                        <UsuariosRow usuario={usuario} key={usuario.id} />
                        )}
                    )} */}
                </tbody>
            </table>  
        </div>
    )
}

export default Usuarios