import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const Header = () => {
  const { cart } = useSelector(state => state)
  return (
    <>
      <Grid container p={2}>
        <Grid item>
          <h4>THISISTHECOMPANYNAME INC.</h4>
        </Grid>
        <Grid item style={{textAlign: 'right', alignSelf: 'center'}}>
          CART({cart.length})
        </Grid>
      </Grid>
    </>
  )
};

export default Header;