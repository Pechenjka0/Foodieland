import { Image } from 'minista'
import './CategoryCard.scss'

export default (props) => {
  const {
    title,
    imgSrc,
    gradient,
  } = props

  return (
    <article
      className='category-card'
      style={{ backgroundImage: gradient }}
    >
      <Image className='category-card__image' src={imgSrc} />
      <h3 className="category-card__title h6">{title}</h3>
    </article>
  )
}