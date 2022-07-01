import { Link } from "react-router-dom";
import pp from '../../img/wira-pp.png'
import AboutMe from "../AboutMe";
const NaviMenus = () => {
    return (
        <div className="nav-men flex md:flex-col bg-primary w-screen  h-[15vw] md:w-[250px] md:h-screen shadow-xl">
            <img className="hidden md:block" src={pp}  alt="" />
            <div className="navimenus flex md:flex-col text-white items-center w-full md:w-auto justify-evenly md:h-full pb-72 lg:pb-0 md:bg-transparent text-xs py-5 md:text-base md:py-0 ">
                <Link to="/" className="link-border">Home</Link>
                <Link to="/about" className="link-border">About Me</Link>
                <Link to="/education" className="link-border">Educations</Link>
                <Link to="/hard-skill" className="link-border">Hard Skills</Link>
                <Link to="/soft-skill" className="link-border">Soft Skills</Link>
                <Link to="/download" className="link-border">Download</Link>
            </div>
        </div>
    );
}

export default NaviMenus;