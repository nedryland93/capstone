import { useEffect } from "react";
import SectionHero from "./SectionHero";
import SectionSpecials from "./SectionSpecials";
import SectionRatings from "./SectionRatings";
import SectioAbout from "./SectionAbout";
import "./Main.css";

export default function Main({change}) {
    useEffect(() => {
        document.title="Little Lemon - Home";
    }, []);

    return (
        <main>
            <SectionHero change={change}/>
            <SectionSpecials change={change}/>
            <SectionRatings/>
            <SectioAbout/>
        </main>
    );
}