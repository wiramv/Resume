import SoftSkillComponent from './SoftSkillComponent';

const SoftSkill = () => {
    return ( 
        <div className="soft-skill container mx-auto">
            <div className="me__header lg:text-3xl 2xl:text-7xl text-secondary font-bold border-secondary border-4 w-fit px-12 py-4 mx-auto my-12 ">
                SOFT SKILL
            </div>
            <SoftSkillComponent/>
        </div>
     );
}
 
export default SoftSkill;