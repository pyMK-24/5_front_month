import { Link, Outlet } from "react-router-dom"
import style from "./Layout.module.css"

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/posts"}>Posts</Link>
                </nav>
            </header>
            <Outlet />
            <footer>
                © 2025
            </footer>
        </>
    )
}
