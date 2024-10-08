import "../Header/Navbar.css";
import Logo from "../../img/amazon_PNG25.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";

 export const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="left">

                    <div className="navlogo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name="" placeholder="Search Your Products" />
                        <div className="search_icon">
                            <SearchIcon />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to= "/login">Sign in</NavLink>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <NavLink to= "/cart">Cart</NavLink>
                    </div>
                    <Avatar alt="User" />
                </div>
            </nav>
        </header>

    )
}
