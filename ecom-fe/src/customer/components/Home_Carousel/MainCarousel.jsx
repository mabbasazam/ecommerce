import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = mainCarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer w-full object-cover"
      role="presentation"
      src={item.image}
      alt={`Carousel Item - ${item.path}`}
      // onError={(e) => { e.target.src = "https://picsum.photos/300/200?random=error"; }}
      style={{ height: "750px" }}
    />
  ));

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      {mainCarouselData.length > 0 ? (
        <AliceCarousel
          items={items}
          autoPlay
          autoPlayInterval={2000}
          disableButtonsControls
          disableDotsControls
        />
      ) : (
        <p>No carousel items available.</p>
      )}
    </div>
  );
};

export default MainCarousel;