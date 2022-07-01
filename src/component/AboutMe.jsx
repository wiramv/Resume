const AboutMe = () => {
    return (
        <div className="about-me container mx-auto">
            <div className="me__header text-3xl md:text-4xl lg:text-7xl text-secondary font-bold border-secondary border-4 w-fit px-12 py-4 mx-auto my-12 ">
                ABOUT ME
            </div>
            <div className="para w-5/6 lg:w-4/6 mx-auto md:leading-5 lg:leading-6">
                <p className="tracking-wider">i’m <span className="font-semibold text-primary">Wira Mahatvavirya</span>, React Js Developer / Graphic Designer</p>
                <p>With more than 3 years of freelancing web developer and graphic designer experience  i have been doing many freelancing job to worldwide client. I also used to handle many international client on my previous job as a marketing manager . With my experince in handling foreign client I’m confident in my capability to speak fluently using English as the main language. </p>
                <p className="my-8">I also have a high willingness to learn anything new, this is shown by my ability to learning to code by my own self without</p>
                <p>any related formal education. My Experience and education in management degree also help me to do a better time management, and teamworking. it also help me to always planning my work so it always be done on time.</p>
            </div>
            <div className="data-below flex flex-col md:flex-row mx-auto w-5/6 lg:w-fit mt-12 gap-24">
                <div className="data-set flex flex-col  items-center gap-10">
                    <div className="numbering text-3xl lg:text-7xl text-secondary font-semibold">
                        50+
                    </div>
                    <div className="captioning">
                        worldwide freelance clients
                    </div>
                </div>
                <div className="data-set flex flex-col items-center gap-10">
                    <div className="numbering text-3xl lg:text-7xl text-secondary font-semibold">
                        250+
                    </div>
                    <div className="captioning">
                        graphic & web development project
                    </div>
                </div>
                <div className="data-set flex flex-col items-center gap-10">
                    <div className="numbering text-3xl lg:text-7xl text-secondary font-semibold">
                        2 year
                    </div>
                    <div className="captioning">
                        web development experience
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;