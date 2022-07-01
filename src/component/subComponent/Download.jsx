import cv from "../../files/resume.pdf";
import mitrais from "../../files/mitrais.pdf";


const Download = () => {
    return ( 
        <div className="download mx-auto">
            <div className="me__header lg:text-3xl  2xl:text-7xl
             text-secondary font-bold border-secondary border-4 w-fit px-12 py-4 mx-auto my-24 lg:my-12 ">
                Download
            </div>

            <fieldset className="border-2 rounded-lg p-1 md:p-10 w-5/6 mx-auto h-3/6 grid grid-cols-3 gap-4 border-primary">
                <legend className="px-5">Download Document</legend>
                <a href={cv} class="dld-btn">Wira's Resume</a>
                <a href={mitrais} class="dld-btn">Mitrais cover Letter</a>
                <a href="#" class="dld-btn">Monster Group cover Letter</a>
                <a href="#" class="dld-btn">Lolipad cover Letter</a>
                <a href="#" class="dld-btn">Padjdjaran TI cover Letter</a>
                <a href="#" class="dld-btn">Geek Portal cover Letter</a>
                <a href="#" class="dld-btn">Netzone Media cover Letter</a>
            </fieldset>

        </div>
     );
}
 
export default Download;
