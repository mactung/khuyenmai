import React from 'react';
import styled from 'styled-components';
import BannerItem from '../components/BannerItem';
import Slider from 'react-slick';
const BannerWrap = styled.div`
        width: 80%;
        margin: 16px auto;
`;

export default class Banner extends React.Component{
    render(){
        const settings = {
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <BannerWrap>
                <Slider {...settings}>
                    <BannerItem link="../static/viettel1.png"/>
                    <BannerItem link="../static/viettel2.jpg"/>
                    <BannerItem link="../static/vina2.jpg"/>
                    <BannerItem link="../static/vina1.png"/>
                    <BannerItem link="../static/vina2.jpg"/>
                    <BannerItem link="../static/vina1.png"/>
                    <BannerItem link="../static/vina2.jpg"/>
                    <BannerItem link="../static/vina1.png"/>
                </Slider>
            </BannerWrap>
            
        );
    }}