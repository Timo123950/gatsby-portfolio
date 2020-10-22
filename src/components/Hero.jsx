import React from 'react';

import HeroFooter from '../img/hero.svg';
import Logo from '../img/logo-logo.svg';
import Memoji from '../img/memoji-me.svg';

const Hero = () => (
    <div className="hero">
        <nav className="navbar grid grid--padded">
            <a href="/" className="navbar__logo">
                <img src={Logo} alt="Timo van Balen Logo" className="navbar__logo-img" />
            </a>
        </nav>

        <div className="hero__body">
            <h1 className="hero__title">Web full-stack, Native Developer</h1>

            <p className="hero__subtitle">
                I build web and native apps with UI as the primary focus
            </p>

            <img src={Memoji} alt="Timo van Balen memoji" className="hero__memoji" />

            <div className="hero__footer">
                <img
                    src={HeroFooter}
                    className="hero__footer-img"
                    alt="Timo van Balen hero footer"
                />
            </div>
        </div>
    </div>
);

export default React.memo(Hero);
