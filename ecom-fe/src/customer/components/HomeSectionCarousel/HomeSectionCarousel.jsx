import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../HomeSectionCard/Card";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Button from "@mui/material/Button";
import { mens_kurta } from "../../../data/mens_kurta";

const responsive = {
  0: { items: 1 },
  720: { items: 4 },
  1024: { items: 5.5 },
};

const HomeSectionCarousel = ({sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("aaaaaaaaaaaa", activeIndex);
  const totalItems = mens_kurta.slice(0, 10).length; // Total items after slicing (10)
  const visibleItems = Math.min(Math.floor(responsive[1024].items), totalItems); // Ensure visible items don't exceed total

  const slidePrev = () => {
    console.log("Prev clicked, activeIndex:", activeIndex);
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    console.log("Next clicked, activeIndex:", activeIndex);
    const maxIndex = totalItems - visibleItems; // Max index based on visible items
    if (activeIndex < maxIndex) setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => {
    console.log("Slide changed to index:", item);
    if (item !== activeIndex) setActiveIndex(item); // Only update if different
  };

  useEffect(() => {
    console.log("activeIndex changed to:", activeIndex);
  }, [activeIndex]); // Log to verify index change

  const items = mens_kurta.slice(0, 10).map((item, index) => (
    <Card product={item} key={index} />
  ));

  return (
    <div className="">
        <h2 className="text-2xl font-extrabold text-gray-800">{sectionName}</h2>
      <div className="relative p-5">
        {/* Force re-render with key based on activeIndex */}
        <AliceCarousel
          key={activeIndex} // Forces re-mount when activeIndex changes
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChange={syncActiveIndex}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex} // Rely on this prop to control slide
        />
        {activeIndex < totalItems - visibleItems && (
          <Button
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex > 0 && (
          <Button
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;