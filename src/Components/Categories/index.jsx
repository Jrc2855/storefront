import { connect } from "react-redux";

const Categories = ({ totalQuantity, products }) => {
  return (
    <>
      <h1>Total Product Quantity {totalQuantity}</h1>
      {
        products.map((product, idx) => (
          <article key={`products-${idx}`}>
            <h5>{product.name} has {product.quantity} in stock</h5>
          </article>
        ))
      }
    </>
  )
};

const mapStateToProps = ({ quantity }) => {
  return {
    totalQuantity: quantity.totalQuantity,
    products: quantity.products,
  }
}

export default connect(mapStateToProps)(Categories);