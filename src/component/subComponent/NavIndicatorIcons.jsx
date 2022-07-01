

const NavIndicatorIcons = ({iconsShape}) => {

      
    return (
         <div className="nav-icon flex gap-5 left-0 md:left-auto right-0 mx-auto w-fit md:flex-col absolute top-5 md:top-1/4 bg-light py-4 px-2 shadow-lg md:right-8 z-10 rounded-full">
            {iconsShape.map((shp) => (
                <div className="shape" key={shp.id}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-primary hover:fill-secondary transition-all duration-150 ease-linear">
                        <path fillRule="evenodd" clipRule="evenodd" d={shp.shape}  />
                    </svg>
                </div>
            ))}
        </div>

    )

}


export default NavIndicatorIcons;

