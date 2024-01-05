import { motion, useMotionValue, useTransform } from "framer-motion";
import React, {useState} from "react";
import styled from "styled-components";
import { Details } from "./Details";

const CardWrapper = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  
  
`;



const CardContainer = styled(motion.div)`
  width: 265px;
  height: 370px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #000;
  color: #fff;
  position: relative;
  cursor: grab;
  background-image: url(''); /* Replace 'path_to_your_image.jpg' with your image file path */
  background-size: cover;
  background-position: center;
  border: 10px solid transparent; /* Set initial border size and color */
  border-image-source: url('path_to_your_border_image.png'); /* Replace with your border image file path */
  border-image-slice: 30 fill; /* Adjust slice value as needed */
  border-image-repeat: round; /* Set repeat style as needed */
  }
    
  
`;

const Description = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  color: white;
  text-align: center;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s, transform 0.3s;

  &.show {
    display: block;
    opacity: 1;
    transform: translateY(0%);
  }

  
`;


const CircleWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 300px;
  top: -6.7em;
  right: -10em;
  z-index: 5;
  background-color: red;
  border-radius: 50%;
  background-color: ${(props) => props.circleColor || "red"};
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1em;
  flex-direction: column;
`;


const Text = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 23px;  
  font-weight: 900;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Secondimage = styled(motion.div)`
  width: auto;
  height: 140px;
  z-index: 99;
  user-select: none;
  margin-right: -8em;
  margin-top: -3em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
    pointer-events:none;
  }
`;

const ExploreContainer = styled.div`
position: absolute; /* Position ExploreContainer */
bottom: 0; /* Place it at the bottom */
left: 50%; /* Adjust as needed */
transform: translateX(-50%); /* Center horizontally */
display: flex;
justify-content: space-between;
width: 100%; /* Full width */
max-width: 265px; /* Adjust as needed */
margin-top: 10px;
`;

const ExploreLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: red;
  }
`;



export function Card({text,smalltext,largetext,image,circleColor}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.04}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle circleColor={circleColor}/>
          </CircleWrapper>
          <Wrapper>
            <Secondimage
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.04}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={image} alt="Shoe" />
            </Secondimage>
          </Wrapper>
          <Text>{text}</Text>

          
          
        </TopContainer>
        
        
        
        <BottomContainer>
        <Details smalltext={smalltext} largetext={largetext}/>
        
            <Description className={isHovered ? "show" : ""}>
              <p>{text}</p>
            </Description>

            {isHovered && (
        <ExploreContainer>
          <ExploreLink href="#">Register</ExploreLink>
          <ExploreLink href="#">Explore</ExploreLink>
        </ExploreContainer>
      )}
        
        </BottomContainer>


     </CardContainer>

     
    </CardWrapper>
  );
}