import { SelectedProducts } from "./components/products/ProductsPage";

type Action =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number }
  | { type: "RESET" };

export const initialState: SelectedProducts = {};

export function reducer(state: SelectedProducts, action: Action) {

  switch (action.type) {
    case "INCREMENT": {
      const count = state[action.payload] || 0;
      console.log(state)
      return {
        ...state,
        [action.payload]: count + 1,
      };
    }
    case "DECREMENT": {
      const count = state[action.payload] || 0;
      const newCount = Math.max(0, count - 1);
      return {
        ...state,
        [action.payload]: newCount,
      };
    }
    case "RESET": {
      return state;
    }
    default:
      return state;
  }
}