import React from 'react';
import Logo from "./Logo";
import FooterMenu from "./FooterMenu";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="section1_f">
                <Logo/>
                <FooterMenu/>
                <div className="contact">
                    <p>Контактная информация</p>
                    <p>+380 000 000 000</p>
                    <p>с 9:00 до 18:00</p>
                </div>
            </div>
            <div className="section2_f">
                Copyright 2021 Family honey shop
            </div>
        </div>
    );
};

export default Footer;