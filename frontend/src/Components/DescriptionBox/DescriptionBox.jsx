import React from 'react';
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fede">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          consequatur, quisquam rerum sint distinctio a debitis tempora autem!
          Labore, nobis?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sint
          tenetur pariatur omnis quod delectus! Voluptatum soluta minima odio
          quae.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
