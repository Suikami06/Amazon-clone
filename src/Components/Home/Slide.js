


import 'react-multi-carousel/lib/styles.css';





import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Divider from '@mui/material/Divider';
import "./Slide1.css";
import Product from "./Product";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide = (Props) => {
    return (
        <div className="product_section">
            <div className="products_deal">
                <h3>{Props.title}</h3>
                <button className="view_btn">view All</button>
            </div>
            <Divider />

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="Carousel-container"
            >
                {Product.map((e) => {
                    return (
                        <div className="product_items" key={e.title.shortTitle}>
                            <div className="product_img">
                                <img src={e.url} alt="product" />
                            </div>
                            <p className="product_name">
                                {e.title.shortTitle}
                            </p>
                            <p className="product_discount">
                                {e.discount}
                            </p>
                            <p className="product_explore">
                                {e.tagline}
                            </p>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Slide;