import { Link } from 'react-router-dom';
//1) Importar una función de React que me ayuda a trabajar con el estado. (useState)
import { useState } from "react";
import './ItemCount.css'


const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  //Acá en la parte superior del componente siempre voy a trabajr con los hooks:

  const [contador, setContador] = useState(inicial);

  //Entre los () voy a pasarle el valor inicial del estado.
  //2) useState me retorna un array con dos elementos. El primero es el estado y el segundo es una función que me actualiza el valor del estado.

  //Funciones para los eventos:

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };


  return (
    <>
        <div>
            <button className='miBtn' onClick={ decrementar }> - </button>
            <strong> {contador} </strong>
            <button className='miBtn' onClick={ incrementar }> + </button>
        </div>
        { stock > 0 && <button className='miBtn' onClick={()=> funcionAgregar(contador)}> Agregar al Carrito </button>}
        <Link to="/" className = "miBtn" > Seguir Comprando</Link>
    </>
  )
};

//Incrementar y decrementar van sin parentesis porque si no se ejecutarían al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones.

export default ItemCount;
