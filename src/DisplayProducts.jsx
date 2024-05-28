import axios from "axios";
import React, { useState, useEffect } from "react";
import "./display.css";

function DisplayProducts() {
  const [data, setDatas] = useState([]);
  useEffect(() => {
    async function displayData() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setDatas(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    displayData();
  }, []);
  //  d, title, description, category, price, discountPercentage,
  //   rating, stock, tags, brand, sku, weight, dimensions,
  //    warrantyInformation, shippingInformation, availabilityStatus,
  //    reviews, returnPolicy, minimumOrderQuantity, meta, images, thumbnail}).
  // displayData();
  return (
    <div className="main-container">
      <br></br>
      <br></br>
      <h1 style={{ color: "blue", textAlign: "center", fontSize: "40px" }}>
        PRODUCTS:
      </h1>
      <div className="display-products">
        {data.map((product) => (
          <div className="product-style" key={product.id}>
            <p
              style={{
                fontSize: "40px",
                color: "yellow",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <b> {`${product.id}) `}</b>

              <b> {product.title}</b>
            </p>
            <br></br>
            <br></br>
            <div>
              {product.images.map((img, key) => (
                <img
                  key={key}
                  src={img}
                  alt="beauty"
                  width="200px"
                  height="100px"
                />
              ))}
            </div>
            <p style={{ fontSize: "36px", color: "white", fontWeight: "bold" }}>
              {`${product.category} 💇‍♀️`}
            </p>
            <br></br>

            <p style={{ fontSize: "36px", color: "white", fontWeight: "bold" }}>
              {`Product Price was Rs. ${product.price} only`}
            </p>
            <br></br>

            <p style={{ fontSize: "36px", color: "red", fontWeight: "bold" }}>
              {` 🎉🎊${product.discountPercentage} % Offer!!!!!`}
            </p>
            <br></br>

            <p style={{ fontSize: "36px", color: "white" }}>
              {`Rating will be : ${product.rating}`}
            </p>
            <br></br>

            <p
              style={{ fontSize: "36px", color: "white", textAlign: "right" }}
            >{`☞ ☞ ${product.stock} Stock will be remain `}</p>
            <br></br>
            <div className="product-items">
              <p style={{ fontSize: "30px", color: "black" }}>
                {`${product.tags} `}
              </p>
              <br></br>

              <p style={{ fontSize: "30px", color: "black" }}>
                {`Brand is ${product.brand}`}
              </p>
            </div>
            <br></br>
            <p
              style={{
                fontSize: "30px",
                color: "deeppink",
                textAlign: "center",
              }}
            >{`SKU ${product.sku}`}</p>
            <br></br>

            <ul style={{ fontSize: "30px", color: "black" }}>
              <li>{` ${product.warrantyInformation} 🤝`}</li>
              <li>{`${product.shippingInformation}🚢`}</li>
              <li>{product.availabilityStatus}</li>
            </ul>
            {/* <p>{product.dimensions}</p> */}

            {/* <div>
              {product.reviews.map((val, index) => (
                <p key={index}>Review: {val.comment}</p>
              ))}
            </div> */}

            <br></br>
            <p style={{ fontSize: "30px", color: "white" }}>
              {`↪ ${product.returnPolicy} ↩`}
            </p>
            <br></br>
            <p style={{ fontSize: "30px", color: "blue" }}>
              <u>DESCRIPTION: </u>
              {product.description}
              <br></br>
            </p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;
