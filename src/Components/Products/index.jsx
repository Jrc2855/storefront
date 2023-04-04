const initialState = {
  products: [
    {name: 'Red Book', quantity: 0},
    {name: 'Blue Book', quantity: 0},
    {name: 'Green Book', quantity: 0},
  ],
  totalQuantity: 0,
}

function productReducer(state = initialState, action){
  switch(action.type){
    case 'INCREMENT':
      return{
        ...state,
        products: state.products.map(product => {
          if(product.name === action.payload.name){
            return{
              name:product.name,
              quantity: product.quantity + 1,
            }
          }
          return product;
        }),
        totalQuantity: state.totalQuantity + 1,
      }
    case 'DECREMENT':
      return{
        ...state,
        products: state.products.map(product => {
          if(product.name === action.payload.name){
            return{
              name:product.name,
              quantity: product.quantity + 1,
            }
          }
          return product;
        }),
        totalQuantity: state.totalQuantity + 1,
      }
    default:
      return state
  }
}

// const Products = () => {
//   return (
//     <>
//       <p>Proof of life for Products Component</p>
//     </>
//   )
// }

export default productReducer;