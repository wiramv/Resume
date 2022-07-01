import NaviMenus from "./subComponent/NaviMenus";
import HardSkill from "./subComponent/HardSkill";

const HardSkillPage = () => {
    return ( 
        <div className="hard-skill__page md:flex">
            <NaviMenus/>
            <HardSkill/>
        </div>
     );
}
 
export default HardSkillPage;