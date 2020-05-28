import React from 'react';
import FlipCard from '../components/FlipCard';
import Banner from '../containers/Banner';
import styled from 'styled-components';
import Search from '../components/Search';

const Container = styled.div`
    margin: auto;
    
`;
const Body = styled.div`
    width: 80%;
    background: white;
    margin: 0 auto;    
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export default function (){
    
    return(
        <Container>
            <Banner/>
            <Search/>
            <Body>
                <FlipCard link="../static/1.png"/>
                <FlipCard link="../static/4.png"/>
                <FlipCard link="../static/2.png"/>
                <FlipCard link="../static/3.png"/>
                <FlipCard link="../static/1.png"/>
                <FlipCard link="../static/2.png"/>
                <FlipCard link="../static/1.png"/>
                <FlipCard link="../static/4.png"/>
                <FlipCard link="../static/2.png"/>
                <FlipCard link="../static/3.png"/>
                <FlipCard link="../static/1.png"/>
                <FlipCard link="../static/2.png"/>
                <FlipCard link="../static/5.png"/>
                <FlipCard link="../static/2.png"/>
                <FlipCard link="../static/3.png"/>
                <FlipCard link="../static/1.png"/>
                <FlipCard link="../static/2.png"/>
                <FlipCard link="../static/5.png"/>
            </Body>
            
        </Container>
    );
}