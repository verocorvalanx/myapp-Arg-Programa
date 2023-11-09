import Descripcion from "../Descripcion/Descripcion"
import EncabezadoProducto from "../EncabezadoProducto/EncabezadoProducto"
import Stock from "../Stock/Stock"

const Producto = () => {
    //
    return (
        <div>
            <EncabezadoProducto />
            <Descripcion />
            <Stock />
        </div>
    )
}

export default Producto