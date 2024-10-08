import Banner from './Banner';
import "./Home.css";
import Slide from './Slide';
const MainCompt=()=>{
    return (
        <div className="home_section">
            <div className="banner_part">
            <Banner />
            </div>
            <div className='slide_part'>
            <div className='left_slide'>
                <Slide title="Deals of the Day"></Slide>
                <div className="banner_part">
                  <Banner />
                </div>
            </div>
            <div className='right_slide'>
                <h4>Latest deal of the day</h4>
                <img src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6f621ac5630a65cd.jpeg?q=20' alt="img" />

            </div>
            </div>
            <Slide title="above 50% discount"> </Slide>
            <Slide title="Best in electronics"> </Slide>
            <div className="banner_part">
                  <Banner />
            </div>
            <Slide title="Todays deal"> </Slide>
            <Slide title="Best seller"> </Slide>
        </div>
    )
}

export default MainCompt;
