import './category.style.scss';

const Category = ({category}) => {
	const {modificator, imageUrl, title} = category;

	return (
		<div className={'category ' + (modificator !== undefined ? `category--${modificator}` : '')}>
			<figure className="category__background">
				<img src={imageUrl} alt="" />
			</figure>

			<div className="category__content">
				<h2>{title}</h2>

				<p>Shop Now</p>
			</div>
		</div>
	);
}

export default Category;