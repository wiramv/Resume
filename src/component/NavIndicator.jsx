import NavIndicatorIcons from "./subComponent/NavIndicatorIcons";
import { useState, useEffect } from 'react';

const NavIndicator = () => {

    const [iconsShape, setIconsShape] = useState(null);

    
   

    useEffect(() => {
        fetch('http://localhost:4000/svg')
            .then(dat => {
                if (!dat.ok) {
                    throw Error('could not fetch data');
                }
                return dat.json();
            })
            .then(shp => {
                setIconsShape(shp);
            })
    }, [])

    return ( 
        <div className="nav-indicator">
            {iconsShape && <NavIndicatorIcons iconsShape={iconsShape}/>}
        </div>
     );
}
 
export default NavIndicator;