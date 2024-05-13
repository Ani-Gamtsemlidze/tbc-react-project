import {SelectedProducts } from "./components/products/ProductsPage";
type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

export const initialState: SelectedProducts = {};

export function reducer(state: SelectedProducts, action: Action) {

  switch (action.type) {
    case "INCREMENT": {
      const count = state[action.payload] || 0;
      return {
        ...state,
        [action.payload]: count + 1,
      };
    }
    case "DECREMENT": {
        const count = state[action.payload] || 0;
        const newCount = Math.max(0, count - 1);
        
        if (newCount === 0) {
          const newState = { ...state };
          delete newState[action.payload];
          return newState;
        } else {
          return {
            ...state,
            [action.payload]: newCount,
          };
        }
      }
      
    case "RESET": {
        localStorage.removeItem("selectedProducts");
      return {};
    }
    default:
      return state;
  }
}
