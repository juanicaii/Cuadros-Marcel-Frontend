import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Filter.module.css';

interface IFilter {
  isFilterOpen: boolean;
  sizes: Array<{ id: Number; name: String; price: Number }>;
  categories: Array<{ id: Number; name: String }>;
}

export const Filter = ({ isFilterOpen, sizes, categories }: IFilter) => {
  const [categorySelected, setCategorySelected] = useState([]);
  const [sizeSelected, setSizeSelected] = useState([]);
  const router = useRouter();

  const filterHandler = (id, type) => {
    let selected = categorySelected;
    let selectedSiz = sizeSelected;
    if (type === 'category') {
      if (!selected.includes(id)) {
        selected.push(id);
      } else {
        selected = selected.filter((state) => state != id);
      }
    }
    if (type === 'size') {
      if (!selectedSiz.includes(id)) {
        selectedSiz.push(id);
      } else {
        selectedSiz = selectedSiz.filter((state) => state != id);
      }
    }
    setCategorySelected(selected);
    setSizeSelected(selectedSiz);
    router.push({
      pathname: router.pathname,
      query: { id: 1, categoryId: selected, sizeId: selectedSiz },
    });
  };

  return (
    <div className={`${styles.filter} ${!isFilterOpen ? styles.hide : ''}`}>
      <div className={styles.filterContainer}>
        <div className={styles.categories}>
          <h1>Categorias</h1>
          <div className={styles.category}>
            {categories.map((category) => (
              <p
                className={categorySelected.includes(category.id) ? styles.selectedCategory : ''}
                onClick={() => {
                  filterHandler(category.id, 'category');
                }}
                key={category.id}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.sizes}>
          <h1>Tamaños</h1>
          <div className={styles.size}>
            {sizes.map((size) => (
              <p
                className={sizeSelected.includes(size.id) ? styles.selectedSize : ''}
                onClick={() => {
                  filterHandler(size.id, 'size');
                }}
                key={size.id}
              >
                {size.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
