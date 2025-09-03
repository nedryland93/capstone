import GreekSalad from "../assets/greek_salad.jpg";
import Bruschetta from "../assets/bruschetta.jpg";
import LemonDessert from "../assets/lemon_dessert.jpg";
import { Link } from "react-router-dom";

export default function SectionHero() {
    return(
        <section className="mainbox specials">
            <div className="specials_header">
                <h2 className="darksans">Specials</h2>
                <Link to="/delivery" className="link">
                    <button className="btn1">
                        Order a delvery
                    </button>
                </Link>
            </div>
            
            <div className="flex_container">
                <div className="dishbox">
                    <div className="dishimg">
                        <img src={GreekSalad} alt="Greek salad"/>
                    </div>
                    <div className="dishinfo">
                        <div className="dish_header">
                            <h3 className="darksans">Greek Salad</h3>
                            <h3 className="price">&#36;12.99</h3>
                        </div>
                        <p className="darksans">
                            The famous greek salad of crispy lettuce, 
                            peppers, olives and our Chicago style feta 
                            cheese, garnished with crunchy garlic and 
                            rosemary... 
                        </p>
                        <Link to="/delivery" className="link">
                            <button className="btn1">
                                Order a delvery
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="dishbox">
                    <div className="dishimg">
                        <img src={Bruschetta} alt="dish"/>
                    </div>
                    <div className="dishinfo">
                        <div className="dish_header">
                            <h3 className="darksans">Bruschetta</h3>
                            <h3 className="price">&#36;8.99</h3>
                        </div>
                        <p className="darksans">
                            Our Bruschetta is made from grilled 
                            bread that has been smeared with garlic 
                            and seasoned with salt and olive oil. 
                            Toppings of tomato... 
                        </p>
                        <Link to="/delivery" className="link">
                            <button className="btn1">
                                Order a delvery
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="dishbox">
                    <div className="dishimg">
                        <img src={LemonDessert} alt="dish"/>
                    </div>
                    <div className="dishinfo">
                        <div className="dish_header">
                            <h3 className="darksans">Lemon Dessert</h3>
                            <h3 className="price">&#36;6.99</h3>
                        </div>
                        <p className="darksans">
                            A refreshing lemon dessert with a 
                            perfect balance of sweetness and tang, 
                            crafted to cleanse the palate. 
                            Light, zesty, and irresistible... 
                        </p>
                        <Link to="/delivery" className="link">
                            <button className="btn1">
                                Order a delvery
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
