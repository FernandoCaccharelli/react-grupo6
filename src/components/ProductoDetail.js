import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

function ProductoDetail(){

    const [Producto, setProducto] = useState({})

    let { id } = useParams()

    useEffect( () => {
        fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProducto(data))
    }, [])

    return (
        <div className="card shadow position-top-box">
            <h3>{Producto.name}</h3>
            <br/>
            <span>Descripcion del producto: </span>
            <br/>
            <div>{Producto.description}</div>
            <br/>
            <span>Imagen: </span>
            <br/>
            <div><img src={`api/products/images/${Producto.image}`} alt={Producto.name}/></div>
            <br/>
            {/* <span>Categoria: {Producto.category}</span> */}
            <br/>
            <span>Precio: {Producto.price}</span>                                                        
            <br/>
        </div>
    )
}
export default ProductoDetail;