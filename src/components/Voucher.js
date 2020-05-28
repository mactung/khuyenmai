import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    height: 80%;
    border-bottom: 1.5px dashed white;
`;
const Discount = styled.div`
    height: 20%;
    text-align: center;
`;
const DiscountText = styled.span`
    font-size: 20px;
    color: white;
`;
const VoucherWrapper = styled.div`
    height: 200px;
    background: linear-gradient(-180deg,#f53d2d,#f63);
    margin: 16px;
    position: relative;
    flex-grow: 1;
    flex-basis: 200px;
    &::after, ::before {
        position: absolute;
        content:"";
        width: 30px;
        height: 30px;
        background: white;
        border-radius: 50%;
        transform: translateY(-50%);
    }
    &::after {
        right: -15px;
        top: 80%;
    }
    &::before {
        left: -15px;
        top: 80%; 
    }
`;

export default function(props){
    return (
        <VoucherWrapper>
            <Content></Content>
            <Discount>
                <DiscountText>
                    Giảm giá 20%
                </DiscountText>
            </Discount>
            
        </VoucherWrapper>
    );
}