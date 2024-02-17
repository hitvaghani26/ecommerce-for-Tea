import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

import {  useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
    const [showNavbar, setNavBar] = useState(false)

    function handleScroll() {
        if (scrollY > 20) {
            setNavBar(true)
        }
        else {
            setNavBar(false)
        }
    }
    window.addEventListener("scroll", handleScroll);

    const [showmenu, setmenu] = useState(false);
    function handleMenu(): void {
        setmenu(prev => !prev);
    }
    const navbarAnim = {
        initial:{
            opacity:0
        },
        animate:{
            opacity: 1,
            transition: { duration: 1 }

        }
    }
    interface NavLinkItem {
        path: string;
        name: string;
    }
    const NavLink: NavLinkItem[] = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/contactus",
            name: "Contact Us"
        },
    ]
    return (

        <div className="sticky z-50 top-0">
            {showNavbar && <motion.div className=" absolute  w-full top-0 z-50 backdrop-blur-md"
            variants={navbarAnim}
            initial="initial"
            animate="animate"
            >

                <div >
                    <div className="Navbar  bg-transparent shadow-md  ">
                        <div className="Navbar-body flex justify-between items-center mx-3 font-Signika py-3">
                            <div className="Navbar-logo sm:text-3xl text-lg">
                                FFood
                            </div>
                            <div className="Navbar-links hidden md:block font-semibold">
                                <ul className="flex items-center ">

                                    {NavLink.map((element) => (
                                        <Link to={element.path} className="mx-3">
                                            <li className="mx-3">{element.name}</li>
                                        </Link>
                                    ))}
                                    <Link to="/login" className="mx-3">
                                        <Button variant="outline" className="font-bold" >Login</Button>
                                    </Link>
                                    <Link to="/signup" className="mx-3">
                                        <Button variant="outline" className="font-bold">Sign Up</Button>
                                    </Link>
                                    <Link to="/cart" className="mx-3">
                                        <li className="mx-3">
                                            <FaShoppingCart className="inline-block w-6 h-6" />
                                        </li>
                                    </Link>
                                </ul>

                            </div>
                            <div className="Navbar-links block md:hidden font-semibold">
                                <ul className="flex items-center ">
                                    {showmenu ?
                                        <AiOutlineClose size={25} onClick={handleMenu} className="mx-3" />
                                        :
                                        <RxHamburgerMenu size={25} onClick={handleMenu} className="mx-3" />}

                                </ul>
                            </div>
                        </div>
                    </div>
                    {showmenu &&
                        <div className="bg-white animate-jump-in ">
                            <ul className="flex-row  justify-center items-center ">
                                {NavLink.map((element) => (
                                    <Link to={element.path} className="mx-3">
                                        <li className="mx-3">{element.name}</li>
                                    </Link>
                                ))}
                                <Link to="/login" className="mx-3">
                                    <p className="mx-3">Login</p>
                                </Link>
                                <Link to="/signup" className="mx-3 ">
                                    <p className="mx-3">Sign Up</p>
                                </Link>
                                <Link to="/cart" className="mx-3">
                                    <li className="mx-3">
                                        <FaShoppingCart className="inline-block w-6 h-6" /> Cart
                                    </li>
                                </Link>
                            </ul>
                        </div>}
                </div>
            </motion.div>}

        </div>
    )
}

export default Header