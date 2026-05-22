import ProductList from "./components/productslist";
import ProductTitle from "./productTitle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProduct from "./components/addProduct";
import EditProduct from "./components/editProduct";
import {AppProvider} from './Context/context'

function App() {
  return (
    <AppProvider>
      <Router>
        <ProductTitle />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/components/addProduct" element={<AddProduct />} />
          <Route path="/components/editProduct/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
export default App;
