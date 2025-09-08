import { useEffect } from "react";
import DishBox from "./DishBox";
import GreekSalad from "../assets/greek_salad.jpg";
import Bruschetta from "../assets/bruschetta.jpg";
import LemonDessert from "../assets/lemon_dessert.jpg";
import Pasta from "../assets/pasta.jpg";
import GrilledFish from "../assets/grilled_fish.jpg";
import "./Delivery.css";

export default function Delivery({info, change}) {
    useEffect(() => {
        document.title="Little Lemon - Delivery";
    }, []);

    return (
        <div 
            className="delivery" 
            style={{flex: "1"}}
        >
            <div className="titlebox">
                <h1 className="yellowserif">Delivery</h1>
            </div>

            <p style={{textAlign: "center", fontStyle: "italic"}}>
                Note to reviewer: This panel below is for testing purposes only.
            </p>
            
            <p style={{textAlign: "center", margin: "0 1rem 3rem 1rem"}}>
                Available booking time testing panel: {
                    info.map(item => {
                        return (
                            <span> {item} - </span>
                        );
                    })
                }
            </p>
            <div 
                className="flex_container" 
                id="deliveryInfo"
            >
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

                <DishBox 
                    picture={GrilledFish}
                    title="Grilled Fish"
                    price="18.99"
                    description="
                        A tender grilled fish with delicate
                        smoky notes, seasoned to enhance its
                        natural flavor. Savory, light, and 
                        perfectly satisfying... 
                    "
                    change={change}
                />

                <DishBox 
                    picture={Pasta}
                    title="Pasta"
                    price="14.99"
                    description="
                        A classic pasta dish with rich, 
                        flavorful sauce,tossed to coat every 
                        strand perfectly. Comforting, hearty, 
                        and utterly delicious...
                    "
                    change={change}
                />
            </div>
        </div>
        
    );
}