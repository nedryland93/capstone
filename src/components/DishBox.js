import { Link } from "react-router-dom";

export default function DishBox(props) {
    return (
        <div className="dishbox">
            <div className="dishimg">
                <img src={props.picture} alt={props.title}/>
            </div>
            <div className="dishinfo">
                <div className="dish_header">
                    <h3 className="darksans">{props.title}</h3>
                    <h3 className="price">&#36;{props.price}</h3>
                </div>
                <p className="darksans">
                    {props.description}
                </p>
                <Link to="/delivery" className="link" onClick={() => props.change("Del")}>
                    <button className="btn1" aria-label="On Click">
                        Order a delvery
                    </button>
                </Link>
            </div>
        </div>
    );
}