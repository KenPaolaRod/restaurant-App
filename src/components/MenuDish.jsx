
function MenuDish(props) {
  return (
    <article className="dish">
      <img src={props.image} alt={props.alt} />
      <div>
        <h3 className="dish-title">{props.dishTitle}</h3>
        <p>{props.dishDescription}</p>
        <span className="price">{props.price}</span>
      </div>
    </article>
  )
}

export default MenuDish