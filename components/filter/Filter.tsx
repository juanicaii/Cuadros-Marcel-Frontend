import styles from "./Filter.module.css";

export const Filter = ({ isFilterOpen }) => {
  return (
    <div className={`${styles.filter} ${!isFilterOpen ? styles.hide : ""}`}>
      <div className={styles.filterContainer}>
        <div className={styles.categories}>
          <h1>Categorias</h1>
          <div className={styles.category}>
            <p className={styles.selectedCategory}>Diptico</p>
            <p>Diptico</p>
            <p>Diptico</p>
            <p>Diptico</p>
            <p>Diptico</p>
          </div>
        </div>
        <div className={styles.sizes}>
          <h1>Tamaños</h1>
          <div className={styles.size}>
            <p className={styles.selectedSize}>50x50</p>
            <p>50x50</p>
            <p>50x50</p>
            <p>50x50</p>
            <p>50x50</p>
          </div>
        </div>
      </div>
    </div>
  );
};
