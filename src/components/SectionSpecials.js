import GreekSalad from "../assets/greek_salad.jpg";
import Bruschetta from "../assets/bruschetta.jpg";
import LemonDessert from "../assets/lemon_dessert.jpg";
import { Link } from "react-router-dom";
import DishBox from "./DishBox";

export default function SectionHero({change}) {
    return(
        <section className="mainbox specials">
            <div className="specials_header">
                <h2 className="darksans">Specials</h2>
                <Link to="/delivery" className="link" onClick={() => change("Del")}>
                    <button className="btn1" aria-label="On Click">
                        Order a delvery
                    </button>
                </Link>
            </div>
            
            <div className="flex_container">
                <DishBox 
                    picture={GreekSalad}
                    title="Greek Salad"
                    price="12.99"
                    description="
                        The famous greek salad of crispy lettuce, 
                        peppers, olives and our Chicago style feta 
                        cheese, garnished with crunchy garlic and 
                        rosemary... 
                    "
                    change={change}
                />

                <DishBox 
                    picture={Bruschetta}
                    title="Bruschetta"
                    price="8.99"
                    description="
                        Our Bruschetta is made from grilled 
                        bread that has been smeared with garlic 
                        and seasoned with salt and olive oil. 
                        Toppings of tomato... 
                    "
                    change={change}
                />

                <DishBox 
                    picture={LemonDessert}
                    title="Lemon Dessert"
                    price="6.99"
                    description="
                        A refreshing lemon dessert with a 
                        perfect balance of sweetness and tang, 
                        crafted to cleanse the palate. 
                        Light, zesty, and irresistible...  
                    "
                    change={change}
                />
            </div>
        </section>
    );
}
