import styles from "../css/MostrarElementos.module.css";
import { useApiRequest } from "../hooks/useApiRequest";
import { ElementsItems } from "./ElementsItems";
import { Loading } from "./Loading";
import { TypesActions } from "../useReducers/TypesActions";
import { useReducer } from "react";
import { Reducers } from "../useReducers/Reducers";
import { CarritoElmentItems } from "./CarritoElmentItems";
import { Link } from "react-router-dom";

export const MostrarElementos = () => {
  let initialState = [];
  const { elementos, loading } = useApiRequest({ query: "products" });
  const [state, dispatch] = useReducer(Reducers, initialState);


  if (loading) {
    return <Loading />;
  }

  const add_carrito = (element) => {
    dispatch({
      Type: TypesActions.ADD_CARRITO,
      payload: element,
    });
  };

  const limpiar_carrito = () => {
    dispatch({
      Type: TypesActions.DELE_ALL_CARRITO,
    });
  };

  const aumentar = (element)=>{
    dispatch({
      Type: TypesActions.AUMENTAR,
      payload: element,
    });
  }
  const disminuir = (element)=>{
    dispatch({
      Type: TypesActions.DISMINUIR,
      payload: element,
    });
  }

  return (
    <>
      <ul className={styles.container}>
        {elementos.map((element) => (
          <ElementsItems
            key={element.id}
            element={element}
            add_carrito={add_carrito}
          />
        ))}
      </ul>

      <div className="text-center">
        <h1>Carrito de Compras</h1>
        <hr />
        <button className="btn btn-outline-danger" onClick={limpiar_carrito}>
          Vaciar carrito
        </button>
       

        <button className="btn btn-primary">{state.length}</button>
        <div className={styles.container}>
          {state.length === 0 ? (
            <h4>El carrito esta vacio</h4>
          ) : (
            state.map((states,i) => (
              <CarritoElmentItems key={i} element={states} disminuir={disminuir} aumentar={aumentar} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
