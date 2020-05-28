import React from 'react';
import styled from 'styled-components';
const BlockWrapper = styled.div`
    width: 80%;
    margin: auto;
    background: white;
    margin-bottom: 32px;
`;
const Header = styled.div`
    height: 60px;
    // background: #4267b2;
    color: white;
    text-align: center;
    border-bottom: 1px solid #e3e3e3e3;


`;
const Body = styled.div`
    padding: 0px 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
const Button = styled.button`
    border: 1px solid #e5e5e5e5;
    border-radius: 10px;
    background: transparent;
    padding: 10px 32px;
    margin-bottom: 16px;
    outline:none;
    &:hover {
        cursor: pointer;
    }
    &:active {
        background: blue;
    }
`;
export default function (props){
    return (
        <BlockWrapper>
            <Header>
                {props.link ? <img src={props.link} height="100%" alt="shopee"/> : <span>props.title</span>}
            </Header>
            <Body>
                {props.children}
                
                 
            </Body>
            <div>
                <Button>Xem thêm</Button>
            </div>
        </BlockWrapper>
    );
}