import { useEffect } from "react";
import SectionHero from "./SectionHero";
import SectionSpecials from "./SectionSpecials";
import SectionRatings from "./SectionRatings";
import SectioAbout from "./SectionAbout";
import "./Main.css";

export default function Main() {
    useEffect(() => {
        document.title="Little Lemon - Home";
    }, []);

    return (
        <main>
            <SectionHero/>
            <SectionSpecials/>
            <SectionRatings/>
            <SectioAbout/>
        </main>
    );
}