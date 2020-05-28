import React from 'react';
import Block from '../containers/Block';
import Voucher from '../components/Voucher';
import Banner from '../containers/Banner';
export default function (){

    return (
        <div>
            <Banner/>
            <Block link="../static/logo-shopee.png" title="Mã giảm giá Shopee">
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
            </Block>
            <Block link="../static/logo-lazada.png" title="Mã giảm giá Lazada">
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
                <Voucher/>
            </Block>
        </div>
    );
}