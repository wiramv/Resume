import HardSkillIcon from "./HardSkillIcon";



const HardSkill = () => {
    return ( 
        <div className="hard-skill mx-auto h-screen ">
            <div className="me__header lg:text-3xl  2xl:text-7xl
             text-secondary font-bold border-secondary border-4 w-fit px-12 py-4 mx-auto my-24 lg:my-12 ">
                HARD SKILL
            </div>
            <div className="skill-set1 h-4/6 lg:h-auto overflow-scroll lg:overflow-hidden">
                <HardSkillIcon/>
            </div>
        </div>
     );
}
 
export default HardSkill;