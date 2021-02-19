import { useRouter } from "next/router";
import TitleSection from "../../components/titleSection";
import styles from "../../styles pages/Products.module.css";
import { FaFilter, FaArrowDown } from "react-icons/fa";
import Filter from "../../components/filter";
import { useState } from "react";
import Product from "../../components/product";
import Pagination from "../../components/pagination";
import * as constants from "../../constants/endpoints";

export default function Products({ products, page, sizes, categories }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const pageSize = 8;
  const router = useRouter();
  const { id } = router.query;
  const openFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const paginationHandler = (e) => {
    const pageSelected = e.target.innerText;
    router.push(`/productos/${pageSelected}`);
  };

  if (!products && !categories && !sizes) {
    return "Loading";
  }
  return (
    <>
      <div>
        <div style={{ minHeight: 160 }}>
          <div className={styles.title}>
            <TitleSection>Productos</TitleSection>
          </div>
          <div className={styles.filters}>
            <div
              className={`${styles.filter} ${
                isFilterOpen ? styles.selected : ""
              }`}
            >
              <h1 onClick={openFilter}>Filtrar</h1>
              <span className={styles.filterIcon}>
                <FaFilter />
              </span>
            </div>
            <div className={styles.order}>
              <h1>Ordernar</h1>
              <span
                className={`${styles.filterIcon} ${styles.filterIconOrder}`}
              >
                <FaArrowDown />
              </span>
            </div>
          </div>
          <Filter
            categories={categories}
            sizes={sizes}
            isFilterOpen={isFilterOpen}
          />
        </div>
      </div>
      <div className={styles.products}>
        {products.results.length > 0
          ? products.results.map((product) => (
              <Product
                name={product.name}
                image={product.img}
                stock={product.stock}
                sizes={product.sizeId}
                categories={product.categoryId}
              />
            ))
          : ""}
      </div>

      <div>
        <Pagination
          paginationHandler={paginationHandler}
          count={Math.ceil(products.count / pageSize)}
          currentPage={page}
        />
      </div>
    </>
  );
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const param = params.id != 1 ? `?page=${params.id}` : "";
  const query =
    resolvedUrl.slice(12) == `?id=${params.id}` ? "" : resolvedUrl.slice(12);
  console.log(resolvedUrl.slice(12) == `?id=${params.id}`);

  const productsFetch = await fetch(
    `${constants.SERVER_PATH}/api/products/${param}${query}`
  );

  const categoryFetch = await fetch(`${constants.SERVER_PATH}/api/category/`);
  const sizeFetch = await fetch(`${constants.SERVER_PATH}/api/size`);
  const products: [] = await productsFetch.json();
  const categories: [] = await categoryFetch.json();
  const sizes: [] = await sizeFetch.json();
  console.log(products);

  // Pass post data to the page via props
  return { props: { products, page: params.id, categories, sizes } };
}
