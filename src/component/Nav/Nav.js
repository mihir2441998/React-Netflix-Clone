import { useState } from "react";
import "./Nav.css";
import Search from "../Search";


function Nav() {



    return (
        <div className="nav">
            <div className="nav_logo">
                <img className="nav_logo_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            </div>
            <div>
                <ul className="navbar_links">
                    <li className="navbar_link">TV Shows</li>
                    <li className="navbar_link">Movies</li>
                    <li className="navbar_link">Recently Added</li>
                    <li className="navbar_link">My List</li>
                </ul>
            </div>
            <Search />

        </div>
    );

}

export default Nav;