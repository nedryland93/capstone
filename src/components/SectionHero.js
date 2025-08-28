import Image from "../assets/lemon_dessert.jpg";

export default function SectionHero() {
    return(
        <section className="mainbox hero">
            <div className="info">
                <h1 className="yellowserif centred">Little lemon</h1>
                <h2 className="whiteserif centred">Portland, Oregon</h2>
                <p className="whitesans">
                    We are a family owned Mediterranean
                    restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
                <div className="centred">
                    <button className="btn1">
                        Reserve a table
                    </button>
                </div>
                
            </div>
            <div className="image">
                <img src={Image} alt="Little lemon restaurant"/>
            </div>
        </section>
    );
}