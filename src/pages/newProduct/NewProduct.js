import { useState } from "react";
import "./newProduct.css";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  return (
    <div className="newProduct">
      <div className="newProduct">
        <h1 className="addProductTitle">New Product</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="file" />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input type="text" placeholder="title" />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input type="text" placeholder="description..." />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input type="text" placeholder="100" />
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input type="text" placeholder="jeans" />
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select name="" id="">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button className="addProductButton">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
