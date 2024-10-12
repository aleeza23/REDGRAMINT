import React, { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import Header from "../compoenents/Header";
import Footer from "../compoenents/Footer";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import ProductCard from "../compoenents/ProductCard";
import styles from "../assets/styles/Products.module.scss";
import { useWixContext } from "../context/wixContext";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const { productList, fetchCategoryProducts } = useWixContext();
  const [categoryList, setCategoryList] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("id");
  const searchName = queryParams.get("name");
  const [price, setPrice] = useState([1, 1000]);
  const { categories } = useWixContext();

  useEffect(() => {
    if (categoryId) {
      fetchCategoryProducts(categoryId, setCategoryList);
    } else if (!searchName) {
      setCategoryList(productList);
    }
    window.scrollTo(0, 0);
  }, [categoryId, searchName]);

  const filteredProducts = categoryList.filter(product => {
    if (searchName) {
      return product.name.toLowerCase().includes(searchName.toLowerCase());
    }
    return true;
  });

  const isDefaultCategory =
    categoryId === "00000000-000000-000000-000000000001" ||
    location.pathname === "/products" ||
    location.pathname === "/products/00000000-000000-000000-000000000001";

  return (
    <>
      <Header />
      <div className={styles.products}>
        <div className="container mb-5" style={{ marginTop: "30px" }}>
          <div className="row g-3">
            <div className="col-md-3 pe-5">
              <div className={styles.filter}>
                <p>
                  <BsFilter size={30} className="me-3" />
                  Filter
                </p>
                <div
                  style={{
                    marginTop: "70px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                  }}
                >
                  <Range
                    marks={{
                      1: `PKR 1`,
                      1000: `PKR 1000`,
                    }}
                    min={1}
                    max={1000}
                    defaultValue={[1, 1000]}
                    tipFormatter={(value) => `PKR ${value}`}
                    tipProps={{
                      placement: "top",
                      visible: true,
                    }}
                    value={price}
                    onChange={(price) => setPrice(price)}
                  />
                  <hr className="mt-5 text-white" />
                  <div className="mt-3">
                    <h4 className="mb-3 text-white">Categories</h4>
                    <div className={styles.categories}>
                      {categories.map((item) => (
                        <li
                          style={{
                            cursor: "pointer",
                            textDecoration: 'none',
                            listStyleType: "none",
                            backgroundColor: item._id === categoryId ? "#e7ae1f" : "transparent",
                            borderRadius: item._id === categoryId ? '13px' : '0px',
                            padding: item._id === categoryId ? "3px 0px 3px 7px" : "0", // Optional: Add some padding to the active item
                          }}
                          className="mb-2"
                          key={item?._id}
                        >
                          <Link
                            style={{
                              textDecoration: 'none',
                              color: item._id === categoryId ? "white" : 'white',
                            }}
                            to={`/products?id=${item._id}`}
                          >
                            {item?.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row g-3">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))
                ) : (
                  searchName ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                      <div className="text-center text-white">
                        <h5>No products found for "{searchName}".</h5>
                      </div>
                    </div>
                  ) : (
                    categoryList.length === 0 && !isDefaultCategory ? (
                      <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                        <div className="text-center text-white">
                          <h5>No products available in this category.</h5>
                        </div>
                      </div>
                    ) : (
                      productList.length > 0 || isDefaultCategory ? (
                        productList.map((product) => (
                          <ProductCard key={product._id} product={product} />
                        ))
                      ) : (
                        <div className="text-center text-white">
                          <h5>No products available.</h5>
                        </div>
                      )
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
