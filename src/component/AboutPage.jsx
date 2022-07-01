import AboutMe from "./AboutMe";
import NaviMenus from "./subComponent/NaviMenus";

const AboutPage = () => {
    return ( 
        <div className="about-page md:flex">
            <NaviMenus/>
            <AboutMe/>
        </div>
     );
}
 
export default AboutPage;