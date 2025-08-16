import React from "react";
import MainCarousel from "../../components/Home_Carousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../data/mens_kurta";
// import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel sectionName={"Women Kurta"}/>
        <HomeSectionCarousel sectionName={"Men's Dress"}/>
        <HomeSectionCarousel sectionName={"Women dress"}/>
        <HomeSectionCarousel sectionName={"Men's shoes"}/>
      </div>
        
    </div>
  );
};

export default HomePage;
