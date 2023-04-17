import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { select, get } from "../../Store/actions";
import { useEffect } from "react";



//-----Category Display Function-----\\
const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get('categories'))
    dispatch(get('products'))
  }, []);

  return (
    <>
      <h3>Browse our categories</h3>
      {
        categories.map((category, idx) => (
          <Button
          key={`categories-${idx}`}
          onClick={() => dispatch(select(category))}
          >
            {category.displayName}
          </Button>
        ))
      }
    </>
  )
}

export default Categories;

