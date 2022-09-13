import { TypesActions } from "./TypesActions";

export const Reducers = (state, action) => {
  switch (action.Type) {
    case TypesActions.ADD_CARRITO: {

      let id = action.payload.id;
      let nuevo = action.payload;

      const nue = state.find(nuev => nuev.id === id);

      if (nue) {
        return state.map(sta=> sta.id === id ? {...sta, cantidad: sta.cantidad + 1 } : sta)
      }else {
        return [...state, {...nuevo, cantidad: 1}]
      }

    }
    case TypesActions.DELE_ALL_CARRITO: {
      return (state = []);
    }
  }
};
