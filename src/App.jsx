import Categories from "./Components/Categories";
import Footer from "./Components/Footer/Index";
import Header from "./Components/Header";
import Products from "./Components/Products";
import SimpleCart from "./Components/SimpleCart"

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Products />    
      <SimpleCart />
      <Footer />
    </>
  );
}

export default App;
