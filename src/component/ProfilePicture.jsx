import pp from "../img/wira-pp.png";

const ProfilePicture = () => {
    return ( 
        <div className="propic h-full transition-all hidden md:block ease-in-out duration-300 propic-home">
            <img className="h-full object-cover" src={pp} alt="" />
        </div>
     );
}
 
export default ProfilePicture;