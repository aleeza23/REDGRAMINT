import React, { useEffect, useState, lazy, Suspense } from "react";
import { BsFilter } from "react-icons/bs";
import Header from "../compoenents/Header";
import Footer from "../compoenents/Footer";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "../assets/styles/Products.module.scss";
import { useWixContext } from "../context/wixContext";
import { Link, useLocation } from "react-router-dom";
import SkeletonLoader from "../compoenents/Skeleton";

// Dynamically import ProductCard
const ProductCard = lazy(() => import("../compoenents/ProductCard"));

const Products = () => {
  const { productList, fetchCategoryProducts, categories } = useWixContext();
  const [categoryList, setCategoryList] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get("id");
  const searchName = queryParams.get("name");
  const [price, setPrice] = useState([1, 1000]);

  useEffect(() => {
    console.log("Fetching products for category:", categoryId);
    if (categoryId) {
      fetchCategoryProducts(categoryId, setCategoryList);
    } else if (!searchName) {
      setCategoryList(productList);
    }
    window.scrollTo(0, 0);
  }, [categoryId, searchName, fetchCategoryProducts, productList]);

  const filteredProducts = searchName
    ? productList.filter(product =>
        product.name.toLowerCase().includes(searchName.toLowerCase())
      )
    : categoryList;

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
                      {categories &&
                        categories.map((item) => (
                          <li
                            style={{
                              cursor: "pointer",
                              textDecoration: 'none',
                              listStyleType: "none",
                              backgroundColor: item._id === categoryId ? "#e7ae1f" : "transparent",
                              borderRadius: item._id === categoryId ? '13px' : '0px',
                              padding: item._id === categoryId ? "3px 0px 3px 7px" : "0",
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
                    <Suspense fallback={<SkeletonLoader />} key={product._id}>
                      <ProductCard product={product} />
                    </Suspense>
                  ))
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
                        <Suspense fallback={<SkeletonLoader />} key={product._id}>
                          <ProductCard product={product} />
                        </Suspense>
                      ))
                    ) : (
                      <div className="text-center text-white">
                        <h5>No products available.</h5>
                      </div>
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
