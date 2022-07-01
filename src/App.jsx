import Home from "./component/Home";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import NavIndicator from "./component/NavIndicator";
import AboutPage from "./component/AboutPage";
import EducationPage from "./component/EducationPage";
import HardSkillPage from "./component/HardSkillPage";
import SoftSkillPage from "./component/SoftSkillPage";
import DownloadPage from "./component/DownloadPage";




const App = () => {
    
   

    return (
        <div className="app font-poppins">
        <Router>
            <NavIndicator/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/education" element={<EducationPage/>}/>
                <Route path="/hard-skill" element={<HardSkillPage/>}/>
                <Route path="/soft-skill" element={<SoftSkillPage/>}/>
                <Route path="/download" element={<DownloadPage/>}/>
            </Routes> 
        </Router>
        </div>
    );
}

export default App;