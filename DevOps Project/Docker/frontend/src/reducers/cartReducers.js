import {
  CART_ADD_ITEMS,
  CART_CLEAR_ITEMS,
  CART_REMOVE_ITEMS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
} from '../constants/cartConstants.js';

const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    // First check if the product is already present in the cart or not.
    // If the product is already present in the cart then do not add the product again.
    // If the product does not exist then add the product

    case CART_ADD_ITEMS:
      const item = action.payload;

      // Check if the item is already present in the state.cartItems array.
      // If the product is already present then assign it to the existItem variable.
      const existItem = state.cartItems.find((x) => x.product === item.product);

      // If the product already exists in the state.cartItems array then return the existing state with
      // adjusted cartItems
      if (existItem) {
        // Map through cartItems and replace the mathing product with the new items leaving
        // the rest of the state as it is
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // The product is not already present in the state.cartItems array so add it to the array
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEMS:
      // Return the state such that the cartItems array does not contain the product we need to remove.
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export { cartReducer };
