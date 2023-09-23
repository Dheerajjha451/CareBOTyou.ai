import React from "react";
import Hero from "../elements/Hero";
import Symptoms from "../elements/Symptoms";
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
  return (
    <>
      <Hero />
      <Symptoms symptoms={symptom_data} />
    </>
  );
}

export default Home;
