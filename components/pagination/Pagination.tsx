import styles from './Pagination.module.css';

interface IPagination {
  count: number;
  currentPage: number;
  paginationHandler: () => {};
}
export const Pagination = ({ count, currentPage, paginationHandler }: IPagination) => {
  const pages = Array.from(Array(count).keys());

  return (
    <div className={styles.pagination}>
      {pages.map((page, index) => (
        <div
          onClick={paginationHandler}
          key={index}
          className={`${styles.page} ${page + 1 === parseInt(currentPage) ? styles.selected : ''}`}
        >
          {page + 1}
        </div>
      ))}
    </div>
  );
};
