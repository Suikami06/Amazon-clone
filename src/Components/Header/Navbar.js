import "../Header/Navbar.css";
import Logo from "../../img/amazon_PNG25.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

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
                        <p>Sign In</p>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={1} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar alt="User" />
                </div>
            </nav>
        </header>

    )
}
