import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    height: 200px;
    min-width: 200px;
    margin: 0px 16px;
    background: blue;
    position: relative;
`;
const Content = styled.div`
    height: 20%;
    width: 80%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 15px;
    border-radius: 10px;
    background-color: blue;
    opacity: 0.3;
    color: "black"
`;
export default function (props){
    return(
        <Wrapper>
            <img src={props.link} alt="anh" height="100%" width="100%"/>
            <Content>
                <span>{props.name} Khuyen mai {props.sale}</span>
            </Content>
        </Wrapper>
    );
}