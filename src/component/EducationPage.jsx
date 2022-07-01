import NaviMenus from "./subComponent/NaviMenus";
import Education from "./subComponent/Education";
const EducationPage = () => {
    return ( 
        <div className="education-page md:flex">
            <NaviMenus/>
            <Education/>
        </div>
     );
}
 
export default EducationPage;