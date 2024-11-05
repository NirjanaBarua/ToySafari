import { Outlet } from "react-router-dom";
import Navbar from "../Compo/Navbar/Navbar";
import Footer from "../Compo/Footer/Footer";

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main className="flex-grow">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;
