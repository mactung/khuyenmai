import React from 'react';
import styled from 'styled-components';
const InnerFront = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden; /* Safari */
backface-visibility: hidden;
background-color: #bbb;
color: black;
`;
const InnerBack = styled.div`
position: absolute;
width: 100%;
height: 100%;
padding: 24px;
-webkit-backface-visibility: hidden; /* Safari */
backface-visibility: hidden;
background-color: dodgerblue;
color: white;
transform: rotateY(180deg);
}
`;
const Inner = styled.div`
position: relative;
width: 100%;
height: 100%;
text-align: center;
transition: transform 0.8s;
transform-style: preserve-3d;

`;
const Card = styled.div`
background-color: transparent;
height: 200px;
margin: 15px;
perspective: 1000px; 
flex-grow: 1;
flex-basis: 300px;
&:hover ${Inner}{
    cursor: pointer;
    transform: rotateY(180deg);
}
`;

export default function (props){
    return(
        <Card>
            <Inner>
                <InnerFront>
                    
                    <img src={props.link} alt="anh" height="100%" width="100%"/>
                </InnerFront>
                <InnerBack>
                    <span>Khuyen mai 100% Cong vien nuoc</span>
                    <button>Chi Tiết</button>
                </InnerBack>
            </Inner>
        </Card>
            
    );
}