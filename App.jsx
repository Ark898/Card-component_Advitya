import React from 'react';
import styled from "styled-components";
import { Card } from './components/nCard';
import image1 from "./image.png";

const GridContainer = styled.div`             
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const Hovercard = () => {
  return (
    <>
     <GridContainer>
      <Card  text="Exhibitions 1" smalltext="lorem1" largetext="lorem01" image={image1} circleColor="blue"/>
      <Card text="Exhibitions 2" smalltext="lorem2" largetext="lorem02" image={image1} circleColor="green"/>
      <Card text="Exhibitions 3" smalltext="lorem3" largetext="lorem03" image={image1}/>
      <Card text="Exhibitions 4" smalltext="lorem4" largetext="lorem04" image={image1}/>
      <Card text="Exhibitions 5" smalltext="lorem5" largetext="lorem05" image={image1}/>
      <Card text="Exhibitons 6" smalltext="lorem6" largetext="lorem06" image={image1}/>
    </GridContainer>
    
    </>
  );
};
export default Hovercard;