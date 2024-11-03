import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handlelogOut = () => {
        logOut();
    }
    const toggleDropDown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    return (
        <div>
            <div className="navbar px-20">
                {/* Navbar Start */}
                <div className="navbar-start  ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" onClick={toggleDropDown} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-center shadow flex space-y-2">

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>


                                <NavLink
                                    to="/all-toys"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    All Toys
                                </NavLink>


                                <NavLink
                                    to="/mytoys"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    My Toys
                                </NavLink>

                                <NavLink
                                    to="/addtoys"
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Add Toy
                                </NavLink>

                                <div>
                                    {
                                        user ? (
                                            <>
                                                <span className="font-bold">{user.displayName || user.email}</span>
                                                <div onClick={handlelogOut} className="btn bg-purple-400 hover:bg-purple-500 text-white mt-2">Logout</div>
                                            </>
                                        ) : (
                                            <div className="space-x-2">
                                                <NavLink to="/login" className="btn bg-purple-400 hover:bg-purple-500 text-white">
                                                    Login
                                                </NavLink>
                                                <NavLink to="/signup" className="btn bg-purple-400 hover:bg-purple-500 text-white">
                                                    SignUp
                                                </NavLink>
                                            </div>
                                        )
                                    }
                                </div>

                            </ul>
                        )}
                    </div>
                    {/* Logo in navbar-start for large devices */}
                    <div className="hidden lg:block">
                        <img
                            src="/images/Toysafari.png"
                            alt=""
                            className="w-52"
                        />
                    </div>
                </div>

                {/* Navbar Center for large devices */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex space-x-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Home
                        </NavLink>
                        <NavLink
                            to="/all-toys"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            All Toys
                        </NavLink>
                        <NavLink
                            to="/mytoys"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            My Toys
                        </NavLink>
                        <NavLink
                            to="/addtoys"
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Add Toy
                        </NavLink>
                    </ul>
                </div>

                {/* Navbar End for user actions */}
                <div className="navbar-end hidden lg:flex">
                    <div>
                        {
                            user ? (
                                <div className="space-x-2">
                                    <span className="font-bold">{user.displayName || user.email}</span>
                                    <div onClick={handlelogOut} className="btn bg-purple-400 hover:bg-purple-500 text-white">Logout</div>
                                </div>
                            ) : (
                                <div className="space-x-2">
                                    <NavLink to="/login" className="btn bg-purple-400 hover:bg-purple-500 text-white">
                                        Login
                                    </NavLink>
                                    <NavLink to="/signup" className="btn bg-purple-400 hover:bg-purple-500 text-white">
                                        SignUp
                                    </NavLink>
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* Logo for small devices */}
                <div className="navbar-end lg:hidden">
                    <img
                        src="/images/Toysafari.png"
                        alt=""
                        className="w-52"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
