import Image from "../assets/lemon_dessert.jpg";

export default function SectionHero() {
    return(
        <section className="mainbox specials">
            <div className="specials_header">
                <h2 className="darksans">Specials</h2>
                <button className="btn1">Online Menu</button>
            </div>
            
            <div className="flex_container">
                <div className="dishbox">
                    <div className="dishimg">
                        <img src={Image} alt="dish"/>
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
                            rosemary croutons. 
                        </p>
                        <button className="btn1">
                            Order a delivery
                        </button>
                    </div>
                </div>

                <div className="dishbox">
                    <div className="dishimg">
                        <img src={Image} alt="dish"/>
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
                            rosemary croutons. 
                        </p>
                        <button className="btn1">
                            Order a delivery
                        </button>
                    </div>
                </div>

                <div className="dishbox">
                    <div className="dishimg">
                        <img src={Image} alt="dish"/>
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
                            rosemary croutons. 
                        </p>
                        <button className="btn1">
                            Order a delivery
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}