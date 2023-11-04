import { menu } from "./menu"
import MenuDish from "./MenuDish"
import Button from "./Button"


function MenuUI() {
  return (
    <div className="menu-container">
      <h1>° Authentic Colombian Food °</h1>
      <h2>Our Menu</h2>
      <div className="dishes-menu">
          {menu.map(dish => <MenuDish image={dish.image} dishTitle={dish.dishTitle} dishDescription={dish.dishDescription} alt={dish.atl} price={dish.price} key={dish.id} />)}
      </div>
    </div>
  )
}

export default MenuUI