import React from "react";
import styled from "styled-components";
// import {Marginer} from "../marginer";

const HorizontalMargin = styled.span`
    display: flex;
    width: ${({ margin }) =>
        typeof margin === "string" ? margin : `${margin}px`};
`;

const VerticalMargin = styled.span`
    display: flex;
    height: ${({margin}) =>
        typeof margin === "string" ? margin : `${margin}px`};
`;

function Marginer(props){
    const {direction} = props;

    if(direction ==="horizontal")return <HorizontalMargin {...props}/>;
    else{
        return <VerticalMargin {...props} />
    }
}

Marginer.defaultProps = {
    direction:"horizontal",
};


const DetailsContainer = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height:1.4;
`;

const MediumText = styled.span`
    font-size:18px;
    color:#fff;
    font-weight:800;
    text-transform:uppercase;
`;

const SmallText = styled.span`
    font-size:11px;
    color:#fff;
    font-weight:700;
    text-transform:uppercase;
`;

const SpacedHorizontalContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;






export function Details({smalltext,largetext}){

    return <DetailsContainer>
            <SmallText>{smalltext}</SmallText>
            <SpacedHorizontalContainer>
                <MediumText>{largetext}</MediumText>
                
            </SpacedHorizontalContainer>
            <Marginer direction="vertical" margin="1.2em" />
           </DetailsContainer>

}