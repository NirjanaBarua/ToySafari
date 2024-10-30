import { Outlet } from "react-router-dom";
import Navbar from "../Compo/Navbar/Navbar";
import Footer from "../Compo/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;