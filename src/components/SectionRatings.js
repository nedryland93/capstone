import Profile from "../assets/profile.jpg";

export default function SectionHero() {
    return(
        <section className="mainbox ratings">
            <h2 className="darksans rating_title">Testimonials</h2>

            <div className="flex_container">
                <div className="ratingbox">
                    <div className="rating_header">
                        <div className="profile">
                            <img src={Profile} alt="Profile"/>
                        </div>
                        <h3 className="darksans">Emma</h3>
                    </div>
                    <p className="darksans">Very good!</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>

                <div className="ratingbox">
                    <div className="rating_header">
                        <div className="profile">
                            <img src={Profile} alt="Profile"/>
                        </div>
                        <h3 className="darksans">Dorothy</h3>
                    </div>
                    <p className="darksans">Very taste!</p>
                    <p>⭐⭐⭐⭐</p>
                </div>

                <div className="ratingbox">
                    <div className="rating_header">
                        <div className="profile">
                            <img src={Profile} alt="Profile"/>
                        </div>
                        <h3 className="darksans">Emily</h3>
                    </div>
                    <p className="darksans">Best restaurant!</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
            </div>
        </section>
    );
}