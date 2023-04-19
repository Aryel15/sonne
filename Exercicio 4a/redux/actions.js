export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const BUY_PRODUCT = 'BUY_PRODUCT';
 
export function selectProduct(product) { 
  return { 
    type: SELECT_PRODUCT,
    payload: product
  };
}
export function buyProduct() { 
  return { 
    type: BUY_PRODUCT,
    payload: null
  };
}