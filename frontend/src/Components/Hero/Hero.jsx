// import React from 'react';
// import './Hero.css';
// import hand_icon from '../Assets/hand_icon.png';
// import arrow_icon from './../Assets/arrow.png';
// import hero_img from './../Assets/hero_image.png';
// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-left">
//         <h2>NEW ARRIVALS ONLY</h2>
//         <div>
//           <div className="hero-hand-icon">
//             <p>New</p>
//             <img src={hand_icon} alt="" />
//           </div>
//           <p>Collection</p>
//           <p>For Everyone</p>
//         </div>
//         <div className="hero-latest-btn">
//           <div>latest collection</div>
//           <div>
//             <img src={arrow_icon} alt="" />
//           </div>
//         </div>
//       </div>
//       <div className="hero-right">
//         <img src={hero_img} alt="" />
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Hero.css'; // Import the CSS file for styling
import banner_mens from './../Assets/banner_mens.png';
import banner_women from './../Assets/banner_women.png';
import banner_kids from './../Assets/banner_kids.png';

const Hero = () => {
    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                <div>
                    <img src={banner_mens} alt="Slide 1" />
                    <p className="legend">For mens</p>
                </div>
                <div>
                    <img src={banner_women} alt="Slide 2" />
                    <p className="legend">For Women</p>
                </div>
                <div>
                    <img src={banner_kids}alt="Slide 3" />
                    <p className="legend">For kids</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;