import Image1 from "../assets/MarioAdrian1.jpg";
import Image2 from "../assets/MarioAdrian2.jpg";

export default function SectionHero() {
    return(
        <section className="mainbox about">
            <div className="info">
                <h1 className="greenserif centred">Little lemon</h1>
                <h2 className="darkserif centred">Portland, Oregon</h2>
                <p className="darksans">
                    We are a family owned Mediterranean
                    restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
            </div>
            <img src={Image1} alt="Mario and Adrian"/>
            <img src={Image2} alt="Mario and Adrian"/>
        </section>
    );
}