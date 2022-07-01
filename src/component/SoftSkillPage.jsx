import NaviMenus from "./subComponent/NaviMenus";
import SoftSkill from "./subComponent/SoftSkill";

const SoftSkillPage = () => {
    return ( 
        <div className="soft-skill__page md:flex">
            <NaviMenus/>
            <SoftSkill/>
        </div>
     );
}
 
export default SoftSkillPage;