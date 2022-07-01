import bilingual from '../../img/soft/bilingual.png';
import teamWork from '../../img/soft/team.png';
import timeManagement from '../../img/soft/time.png';
import leadership from '../../img/soft/leadership.png';
import learn from '../../img/soft/learn.png';

import { useState } from 'react';


const SoftSkillComponent = () => {
    const [soft, setSoft] = useState([
        {id: 1, img : bilingual, text: 'bilingual'},
        {id: 2, img : teamWork, text: 'team work'},
        {id: 3, img : timeManagement, text: 'time management'},
        {id: 4, img : leadership, text: 'leadership'},
        {id: 5, img : learn, text: 'willingness to learn'}
    ])


    return ( 
        <div className="soft-skill__component grid grid-cols-2 px-6 lg:px-0 lg:grid-cols-3 gap-24 mt-36">
            {soft.map((sft)=>(
                <div className="soft__icn flex flex-col items-center gap-12" key={sft.id}>
                    <img className=' h-[80px] xl:h-[100px] transition-all duration-200 ease-in-out hover:my-[-20px] hover:h-[120px] object-contain drop-shadow-md hover:drop-shadow-2xl' src={sft.img} alt={sft.text} />
                    <div>{sft.text}</div>
                </div>
            ))}
        </div>
     );
}
 
export default SoftSkillComponent;