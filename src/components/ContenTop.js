import React from "react";
import { useState, useEffect } from 'react'
import ContentTotales from './ContentTotales'
// import UltimoCreado from './UltimoCreado';



function ContenTop(){

    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    // const [ultimoUsuario, setUltUsuario] = useState(true)
    // const [ultimoProducto, setUltProducto] = useState(true)
    

    useEffect( () => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setUsuarios(data)
            // setUltUsuario(false)
        })

    }, [])

    useEffect( () => {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
            // setUltProducto(false)
        })

    }, [])

    useEffect( () => {
        fetch('/api/categorias')
        .then(response => response.json())
        .then(data => setCategorias(data))
    }, [])
    

    return (
        <React.Fragment>
            {/* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> */}
        {/*<!-- ContenTop -->*/}
        <div className="content-text" >
						<span> Dashboard </span>
					</div>
            <div className="row padded-h">
                <ContentTotales titulo='Usuarios' total={usuarios.count}/>

                <ContentTotales titulo='Productos' total={productos.count}/>

                <ContentTotales titulo='Categorias' total={categorias.count}/>    

                
                {/* <UltimoCreado titulo='Usuario' ultimo={usuarios.data.slice(-1)[0].email}/>
                
                               
                <UltimoCreado titulo='Producto' ultimo={productos.data.slice(-1)[0].title}/> */}
                
            </div>
        </React.Fragment>
    )
}
export default ContenTop;