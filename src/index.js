import reactDom from "react-dom";
import App from "./App";
import './style.css';
import './cust.css';
// ! root

const root = document.querySelector("#root");


// React dom
reactDom.render(
    <App />, root
)