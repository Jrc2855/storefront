import { Button, Card } from "@mui/material";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Store/actions";

//-----Products Function-----\\
const Products = () => {
  const { products } = useSelector(state => state);
  const { activeCategory } = useSelector(state => state.categories)
  const dispatch = useDispatch();
  return (
    <>
      {activeCategory && <h2>{activeCategory.displayName}</h2>}
      {activeCategory && <p>{activeCategory.description}</p>}
      {activeCategory && products.map((product, idx) => (
        <Card key={`products-${idx}`} >
          {product.name}
          <Button
            size="small"
            onClick={() => dispatch(addProduct(product))}
          >
            Add to cart
          </Button>
        </Card>
      ))
      }
    </>
  )
};

export default Products;
























//-----Legacy Code-----//
//-----Map State To Props-----\\
// const mapStateToProps = ({ store }) => {
//   return {
//     products: store.products,
//     activeCategory: store.activeCategory,
//   }
// }

// export default connect(mapStateToProps)(Products);