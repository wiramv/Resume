import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";



const Home = () => {
    return (
        <div className="homes">
        <div className="home flex bg-white  absolute bottom-0 left-0 right-0 w-screen items-center py-0 justify-center px-8 md:px-0 lg:w-1/2 lg:h-screen">
            <div className="sub-home w-96 m-10">
                <div className="sub-title text-3xl uppercase font-open-sans">
                    hi there
                </div>
                <div className="title-name text-dark font-open-sans text-6xl uppercase font-bold">
                    i'm <span className="text-secondary">wira</span>
                </div>
                <span className="w-full h-2 bg-primary block my-4 rounded-full"></span>
                <div className="my-position sub-title text-3xl -mb-5 font-open-sans">React Js Developer</div>
                <p className="tracking-wider text-justify text-sm my-8">Hi, my name is Wira and I'am a self taught web Developer and a Graphic Designer, I can Both design and create a web app from scratch using figma and React or Next js. I have an Economics Degree from Padjadjaran University, But since I reallly love designing and programing I decided to take a web developing career</p>
                <Link to="/about" className="border-2  border-primary px-4 py-2 rounded-md transition-all duration-150 ease-in-out hover:bg-primary hover:border-secondary-light hover:shadow-md hover:text-white">More About Me</Link>
            </div>
        </div>
        <ProfilePicture />
        </div>
    );
}

export default Home;