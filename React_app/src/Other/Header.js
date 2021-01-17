import React from 'react';
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <div className="Header">
            <div className="section1_h">
                <Logo/>
                <HeaderMenu/>
            </div>
        </div>
    );
};

export default Header;