import unpad from "../../img/unpad.png";
import krida from "../../img/krida.png";
import prev from "../../img/prev.png";
import next from "../../img/next.png";

import { useState } from "react";


const Education = () => {
    const [tran, setTran] = useState('translate-x-[0]');
    const [counter, setCounter] = useState(0)
    let sliderClass = `slider w-full relative flex flex-nowrap transition-all duration-200 ease-linear ${tran} `;
    // prevbtn
    const prevBtn = () => {
        if (counter === 0) {
            setCounter(counter + 1);
            setTran('translate-x-[-100%]');
        } else {
            setCounter(0);
            setTran('translate-x-[0]');
        }
    }
    // nextbtn
    const nextBtn = () => {
        if (counter === 1) {
            setCounter(0);
            setTran('translate-x-[0]');
        } else {
            setCounter(counter + 1);
            setTran('translate-x-[-100%]');
        }
    }

    return (
        <div className="mx-auto relative ">
            {/* button */}
            <div className="button-edu absolute left-0 gap-10 lg:gap-0 right-0 bottom-[60%] md:bottom-[20%] lg:bottom-[45%] z-10 flex justify-between w-fit lg:w-[115%] px-7 mx-auto  lg:translate-x-[-6%]">
                <button onClick={prevBtn}>
                    <img src={prev} alt="" className="btn-edu"/>
                </button>
                <button onClick={nextBtn}>
                    <img src={next} alt="" className="btn-edu"/>
                </button>
            </div>
            <div className="education mx-auto relative">
                {/* indicator*/}
                {/* <div className="button-edu absolute left-0 right-0 bottom-[35%] z-10 flex justify-between w-full px-7 mx-auto">
                <button onClick={prevBtn}>
                    <img src={prev} alt="" className="w-16"/>
                </button>
                <button onClick={nextBtn}>
                    <img src={next} alt="" className="w-16"/>
                </button>
            </div> */}
                <div className="me__header text-3xl md:text-4xl lg:text-7xl text-secondary font-bold border-secondary border-4 w-fit px-12 py-4 mx-auto my-36 lg:my-12">
                    EDUCATIONS
                </div>
                <div className="carousel w-[90vw] md:w-[65vw] aspect-[1100/650]  mx-auto rounded-2xl shadow-2xl overflow-hidden">
                    {/* slider */}
                    <div className={sliderClass} >





                        {/* slider-data */}
                        <div className="slider-data flex-none">
                            <div className="slider-image relative">
                                <div className="text-edu">
                                    <h1 className="campus ">Padjadjaran University</h1>
                                    <div className="faculty">Barchelor of Economics</div>
                                    <div>Management Major - 2009</div>

                                </div>
                                <img src={unpad} className=' w-[90vw] md:w-[65vw]' alt="" srcset="" />
                            </div>
                        </div>










                        {/* slider-data */}
                        <div className="slider-data flex-none">
                            <div className="slider-image relative">
                            <div className="text-edu">
                                    <h1 className="campus">SMAT Krida Nusantara</h1>
                                    <div className="faculty">Social Studies</div>
                                    <div>2006</div>

                                </div>
                                <img src={krida} className='w-[90vw] md:w-[65vw]' alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education;