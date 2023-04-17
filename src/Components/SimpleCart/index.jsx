import { When } from "react-if";
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from "../../Store/actions";

const SimpleCart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <When condition={cart.length > 0}>
      <div className="simpleCart">
        <ul>
          {cart.map((item, idx) =>
            <li key={`item${idx}`}>
              {item.name}
              <span
                onClick={() => dispatch(removeProduct(item))}
                className="remove"
              >
                X
              </span>
            </li>)}
        </ul>
      </div>
    </When>
  )
};

export default SimpleCart;