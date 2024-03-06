const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };

    case "REMOVE_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ProductReducer;
