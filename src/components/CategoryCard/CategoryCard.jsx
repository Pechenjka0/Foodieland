import { Image } from 'minista'
import './CategoryCard.scss'

export default (props) => {
  const {
    title,
    imgSrc,
    color,
  } = props

  return (
    <article
      className='category-card'
    >
      <div
        style={{ '--categoryCardColor': color }}
        className="category-card__body"
      >
        <div
          className="category-card__image-wrapper"
          style={{'--categoryCardImage': `url('${imgSrc}')`}}
        >
          <Image className='category-card__image' src={imgSrc} />
        </div>
        <h3 className="category-card__title h6">{title}</h3>
      </div>
    </article>
  )
}