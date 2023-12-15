import { NavLink } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-20 w-[100%] bg-red-200 flex justify-start items-center text-3xl sticky pl-20 font-bold">
            <NavLink className={"hover:text-cyan-500 hover:delay-100"} to="/">Home</NavLink>
            <NavLink className={"mx-10 hover:text-cyan-500 hover:delay-100"} to="/about-us">About Us</NavLink>
            <NavLink className={"hover:text-cyan-500 hover:delay-100"} to="/contact">Contact</NavLink>
        </nav>
    );
}