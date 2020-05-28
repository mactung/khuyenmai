import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Nav = styled.nav`
    height: 85px;
    width: 100%;
    background: linear-gradient(-180deg,#f53d2d,#f63);
`;
const Button = styled.button`
    padding: 10px;
    border: 0px 1px solid #e5e5e5e5;
    borer-radius: none;
    background: transparent;
    outline: none;
`;
export default function Header (){
    return (
        <div className="header">
            <Nav>
                <NavLink to="/">
                    <Button>Home</Button>
                </NavLink>
                <NavLink to="/discount">
                    <Button>Khuyen Mai </Button>
                </NavLink>
                <NavLink to="/voucher">
                    <Button>Voucher</Button>
                </NavLink>
            </Nav>
        </div>
    );
}