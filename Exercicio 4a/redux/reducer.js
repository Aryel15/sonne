import { SELECT_PRODUCT} from './actions'; 
import { BUY_PRODUCT} from './actions'; 
 
const initialState = { 
    product:[],
    carrinhoCheio: false
}; 
 
export default function productReducer(state = initialState, action) { 
  switch (action.type) { 
    case SELECT_PRODUCT: 
      return { 
        ...state, 
        product: [...state.product, action.payload],
        carrinhoCheio: true
      };
    case BUY_PRODUCT:
        return { 
            ...state, 
            product: [],
            carrinhoCheio: false
        };
    default: 
      return state; 
  }
}