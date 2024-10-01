import React from 'react';
import Img1 from "../../img/nav.jpg"
import "./NewNav.css";

export const NewNav = () => {
  return (
    <div className="new_nav">
    <div className="nav_data">
    <div className="left_data">

       <p>All products</p>
       <p>Mobile</p>
       <p>Bestseller</p>
       <p>All products</p>
       <p>Fashion</p>
       <p>Electronics</p>
       <p>Todays deal</p>


    </div>
    <div className='right_data'>
    <img src ={Img1}/>

    </div>

    </div>

    </div>
  )
}
