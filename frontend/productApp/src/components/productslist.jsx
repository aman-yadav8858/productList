import { useContext, useEffect, useState } from "react";
import AppContext from "../Context/context";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const { refreshData } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    refreshData();
    getProducts();
  };

  return (
    <div className="container mt-4">
      <div className="m-2">
        <Link to="/components/addProduct">
          <button className="btn btn-secondary px-3 shadow-none">Add New</button>
        </Link>
      </div>
      <div className="row justify-content-center align-itmes-center">
        <table className="table text-center align-middle shadow-sm">
          <thead className="table-light">
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/components/editProduct/${product._id}`}>
                    <button className="btn btn-primary shadow-none px-3">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger shadow-none px-3"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
