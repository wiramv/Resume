import Download from "./subComponent/Download";
import NaviMenus from "./subComponent/NaviMenus";

const DownloadPage = () => {
    return ( 
        <div className="download__page flex">
            <NaviMenus/>
            <Download/>
        </div>
     );
}
 
export default DownloadPage;