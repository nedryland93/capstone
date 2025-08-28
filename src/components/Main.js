import SectionHero from "./SectionHero";
import SectionSpecials from "./SectionSpecials";
import SectionRatings from "./SectionRatings";
import SectioAbout from "./SectionAbout";
 
import "./Main.css";

export default function main() {
    return (
        <main>
            <SectionHero/>
            <SectionSpecials/>
            <SectionRatings/>
            <SectioAbout/>
        </main>
    );
}