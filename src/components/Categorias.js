import React, {useEffect, useState } from "react";

function Categorias() {
    const [Categorias, setCategorias] = useState([])

    useEffect( () => {
        fetch('/api/categorias')
        .then(response => response.json())
        .then(data => setCategorias(data.data))
    }, [])
    
    return (
        <div className="card shadow position-top-box fit">
            <h3>Categorias</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {Categorias.map((categoria,i) => 
                        <tr key={i}>
                            <td>{categoria.id}</td>
                            <td>{categoria.category}</td> 
                        </tr>
                    )}
                </tbody>
            </table>              
        </div>
    )
}

export default Categorias;