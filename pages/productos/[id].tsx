import { useRouter } from "next/router";
import TitleSection from "../../components/titleSection";
import styles from "../../styles pages/Products.module.css";
import { FaFilter, FaArrowDown } from "react-icons/fa";
import Filter from "../../components/filter";
import { useState } from "react";
import Product from "../../components/product";
import Pagination from "../../components/pagination";
export default function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const openFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const paginationHandler = (e) => {
    const pageSelected = e.target.innerText;
    router.push(`/productos/${pageSelected}`);
  };
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
          <Filter isFilterOpen={isFilterOpen} />
        </div>
      </div>
      <div className={styles.products}>
        <Product name="Mirando al mar" image="image 1.png" />
        <Product name="Mirando al mar" image="image 1.png" />
        <Product name="Mirando al mar" image="image 1.png" />
        <Product name="Mirando al mar" image="image 1.png" />
        <Product name="Mirando al mar" image="image 1.png" />
      </div>

      <div>
        <Pagination
          paginationHandler={paginationHandler}
          count={5}
          currentPage={id}
        />
      </div>
    </>
  );
}
