import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../Store/actions";


//-----Category Display Function-----\\
const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Browse our categories</h3>
      {
        categories.map((category, idx) => (
          <Button
          key={`categories - ${idx}`}
          onClick={() => dispatch(set(category))}
          >
            {category.displayName}
          </Button>
        ))
      }
    </>
  )
}

export default Categories;

