// icon import
import htmlIcn from '../../img/icons/html.png';
import cssIcn from '../../img/icons/css.png';
import jsIcn from '../../img/icons/javascript.png';
import reactIcn from '../../img/icons/react.png';
import tailIcn from '../../img/icons/tailwind.png';
import bootIcn from '../../img/icons/bootstrap.png';
import nextIcn from '../../img/icons/nextjs.png';
import nodeIcn from '../../img/icons/nodejs.png';
import laraIcn from '../../img/icons/laravel.png';
import mongoIcn from '../../img/icons/mongo.png';
import figmaIcn from '../../img/icons/figma.png';
import xdIcn from '../../img/icons/xd.png';
import illustratorIcn from '../../img/icons/illustrator.png';
import premiereIcn from '../../img/icons/premiere.png';
import afterIcn from '../../img/icons/after.png';
import photoshopIcn from '../../img/icons/photoshop.png';
import designerIcn from '../../img/icons/designer.png';
import photoIcn from '../../img/icons/photo.png';
import publishIcn from '../../img/icons/publisher.png';
import blenderIcn from '../../img/icons/blender.png';
import { useState } from 'react';




const HardSkillIcon = () => {

    const [icons, setIcons] = useState([
        {id:1, img: htmlIcn, text : "html - 5"},
        {id:2, img: cssIcn, text : "css - 3"},
        {id:3, img: jsIcn, text : "es - 12"},
        {id:4, img: reactIcn, text : "react js"},
        {id:5, img: tailIcn, text : "tailwind css"},
        {id:6, img: bootIcn, text : "bootstrap 5"},
        {id:7, img: nextIcn, text : "next js"},
        {id:8, img: nodeIcn, text : "node Js"},
        {id:9, img: laraIcn, text : "laravel"},
        {id:10, img: mongoIcn, text : "mongo db"},
        {id:11, img: figmaIcn, text : "figma"},
        {id:12, img: xdIcn, text : "adobe xd"},
        {id:13, img: illustratorIcn, text : "illustrator"},
        {id:14, img: premiereIcn, text : "premiere"},
        {id:15, img: afterIcn, text : "after effect"},
        {id:16, img: photoshopIcn, text : "photoshop"},
        {id:17, img: designerIcn, text : "designer"},
        {id:18, img: photoIcn, text : "photo"},
        {id:19, img: publishIcn, text : "publisher"},
        {id:20, img: blenderIcn, text : "blender 3d"},
    ])





    return ( 
        <div className="hard__skill-icon grid gap-24 px-10 md:px-0  lg:gap-3 2xl:gap-10 grid-cols-3 lg:grid-cols-5">
            {icons.map((icn)=>(
                <div className="hs md:h[80px] xl:h-[130px] flex flex-col items-center gap-3" key={icn.id}>
                    <img src={icn.img} className="transition-all duration-150 ease-in-out h-[40px] 2xl:h-[80px] lg:hover:mx-[-15px] lg:hover:h-[100px] object-cover drop-shadow-md hover:drop-shadow-xl"/>
                    <div className="hs-text">
                        {icn.text}
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default HardSkillIcon;