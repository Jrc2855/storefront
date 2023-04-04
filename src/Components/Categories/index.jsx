import { Button, ButtonGroup } from "@mui/material";
import { connect } from "react-redux";
import { set } from "../../Store/reducer";


//-----Category Display Function-----\\
const Categories = ({ categories, set }) => {
  return (
    <>
      <h2>These are da Categories</h2>
      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`categories-${idx}`}
              onClick={() => set(category)}
            >
              {category.displayName}
            </Button>
          ))
        }
      </ButtonGroup>
    </>
  )
};

//-----Map State To Props-----\\
const mapStateToProps = ({ store }) => {
  return {
    categories: store.categories,
  }
}

//-----Map Dispatch To Props-----\\
const mapDispatchToProps = {
  set,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

