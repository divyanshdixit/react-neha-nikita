// add the global layoout for this app.

import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom"
import { GetContacts } from "../components/Contact";

export const loader = async () => {
    const contacts = await GetContacts();
    return {contacts};
}

const RootLayout = () => {
    return (
        <>
            <div id="navbar">
                <h1> Main nav bar layout </h1>
                <ul>
                    <li> 
                        <Link to='/'> Home </Link>
                        <Link to='about'> About </Link>
                        <Link to='products'> Products </Link>
                        <NavLink
                            to='contact'
                            className={({ isActive, isPending }) =>
                            isActive
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                        >
                           Contact us 
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* We need to tell the root route where we want it to render its child routes. We do that with <Outlet>. */}
            <Outlet/>
        </>
    )
} 

export default RootLayout;