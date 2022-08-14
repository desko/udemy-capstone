import Category from "../category/category.component";
import './categories.style.scss';

const Categories = ({categories}) => {
	  return (
		<div className="categories">
			{categories.map(categoryItem => (
				<Category category={categoryItem} key={categoryItem.id}/>							
			))}
		</div>
	  )
}

export default Categories;