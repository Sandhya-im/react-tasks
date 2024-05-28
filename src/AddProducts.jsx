import React, { useState } from "react";
import axios from "axios";
import "./Add.css";

function AddProducts() {
  const [formData, setFormData] = useState({
    pName: "",
    price: "",
    discount: "",
    total: "",
    sku: "",
    stock: "",
  });
  console.log(formData);

  const registerForm = (e) => {
    e.preventDefault();
    setFormData({
      pName: "",
      price: "",
      discount: "",
      total: "",
      sku: "",
      stock: "",
    });

    async function insertData() {
      const datas = await axios.post("https://httpbin.org/post", formData);
      console.log("inserted", datas);
    }
    insertData();
    alert("Thanks for Registration");
  };

  return (
    <div>
      <form className="forms" method="get">
        <div>
          <label>Product Name:</label>
          <br></br>
          <input
            type="text"
            id="pName"
            name="pName"
            value={formData.pName}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: [e.target.value] });
            }}
          ></input>
        </div>

        <div>
          <label>Price:</label>
          <br></br>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: [e.target.value] });
            }}
          ></input>
        </div>

        <div>
          <label>Discount:</label>
          <br></br>
          <input
            type="text"
            id="discount"
            name="discount"
            value={formData.discount}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: [e.target.value] });
            }}
          ></input>
        </div>

        <div>
          <label>Total:</label>
          <br></br>
          <input
            type="number"
            id="total"
            name="total"
            value={
              formData.price === "" || formData.discount === ""
                ? (formData.total = "")
                : (formData.total = formData.total =
                    formData.price + 18 / 100 - formData.discount)
            }
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: [e.target.value] });
            }}
          ></input>
        </div>

        <div>
          <label>SKU:</label>
          <br></br>
          <input
            type="text"
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: [e.target.value] });
            }}
          ></input>
        </div>

        <div>
          <label>Stock In Hand:</label>
          <br></br>
          <input
            type="text"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: [e.target.value] });
            }}
          ></input>
        </div>

        <div>
          <button onClick={registerForm} id="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProducts;
