import "../Buynow/Buynow.css";
import { Divider } from "@mui/material";
import Option from "./Option";
import Right from "./right";
import Subtotal from "./Subtotal";
import Logo from "../../img/blacklogoamazon.png";


const Buynew=()=>{
    return(
        <div className="buynew_section">
            <div className="buynew_container">
                <div className="left_buy">
                    <h1>Shopping Cart</h1>
                    <p>Select All Items</p>
                    <span className="leftbuyprice">Price</span>

                    <Divider />
                    <div className="item_container">
                        <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70"/>
                        <div className="item_details">
                            <h3>AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)</h3>
                            <h3>Fitness Gear</h3>
                            <h3 className="differntprice">$4049.00</h3>
                            <p className="unusall">Ususally dispatch in 5 Days</p>
                            <p>Eligible for free Delivery</p>
                            <img src={Logo}></img>
                            <Option />

                        </div>
                        <h3 className="item_price">$4049.00</h3>
                    </div>
                    <Divider />
                    <Subtotal />

                </div>
                <Right />
            </div>
        </div>
    )
}

export default Buynew;