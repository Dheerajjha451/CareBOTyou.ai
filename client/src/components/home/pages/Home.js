import React from "react";
import Hero from "../elements/Hero";
import Symptoms from "../elements/Symptoms";
import AssessmentEle from "../elements/AssessmentEle";
import ForumInfo from "../elements/ForumInfo";
import FeaturedArticle from "../elements/FeaturedArticle";
function Home() {
  const symptom_data = [
    {
      id: 1,
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
      text: "Symptom 1",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
      text: "Symptom 2",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
      text: "Symptom 3",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg",
      text: "Symptom 4",
    },
  ];
  const articles_data = [
    {
      id: 1, 
    img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg", 
    title: "AI in 2023"
    },
    {
      id: 2, 
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg", 
      title: "AI in 2023"
    },
    {
      id:3, 
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg", 
      title: "AI in 2023"
    },
    {
      id:4, 
      img: "https://i.pinimg.com/originals/a2/df/98/a2df98ecb96aaf26615c49e79bab8d8b.jpg", 
      title: "AI in 2023"
    }
  ];
  return (
    <>
      <Hero />
      <AssessmentEle />
      <Symptoms symptoms={symptom_data} />
      <ForumInfo  />
      <FeaturedArticle articles = {articles_data} />
    </>
  );
}

export default Home;
