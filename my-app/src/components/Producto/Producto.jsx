import Descripcion from "../Descripcion/Descripcion"
import EncabezadoProducto from "../EncabezadoProducto/EncabezadoProducto"
import Stock from "../Stock/Stock"
import './Producto.css';

const Producto = () => {
    
    return (
        <div className="Product">
            <EncabezadoProducto />
            <Descripcion />
            <Stock />
        </div>
    )
}

export default Producto