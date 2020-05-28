import React from 'react';
import styled from 'styled-components';
const Input = styled.input`
    width: 60%;
    height: 45px;
    margin: 32px;
    padding : 5px;    
    border: 1px solid #e5e5e5e5;
    border-radius: 10px;
`;
export default function (){

    return (
        <div>
            <Input placeholder="Tim kiem..."/>
        </div>
    );
}