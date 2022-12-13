import { useSelector } from 'react-redux';
import './styles/categoriesPage.css';

const Categories = () => {
  const title = useSelector((state) => state.categoriesReducer.status);

  return (
    <section className="categories-section">
      <h1>{title}</h1>
    </section>
  );
};

export default Categories;
