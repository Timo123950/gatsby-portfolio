import React from 'react';

import Logo from '../img/logo-logo.svg';

const Footer = () => {
    const renderQuote = () => {
        const quotes = [
            "I'm a greater believer in luck, and I find the harder I work the more I have of it.",
            "I have learned that real angels don't have gossamer white robes and Cherubic skin, they have calloused hands and smell of the days' sweat",
            'Greatness is sifted through the grind, therefore don’t despise the hard work now for surely it will be worth it in the end.',
            'A dream doesn’t become reality through magic; it takes sweat, determination and hard work.'
        ];

        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    const renderSocials = () => {
        const socials = [
            {name: 'Github', icon: 'ti-github', url: 'https://www.github.com/Timo123950'},
            {
                name: 'LinkedIn',
                icon: 'ti-linkedin',
                url: 'https://www.linkedin.com/in/timo-van-balen/'
            },
            {name: 'Twitter', icon: 'ti-twitter', url: 'https://twitter.com/TimoBalen'}
        ];

        return socials.map(social => (
            <a
                target="_blank"
                href={social.url}
                key={social.icon}
                title={social.name}
                rel="noopener noreferrer"
                className="footer__social-btn">
                <i className={`${social.icon} footer__social-icon`} />
            </a>
        ));
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <img src={Logo} alt="Kenneth Kwakye-Gyamfi Logo" className="footer__logo" />

            <p className="footer__quote">{renderQuote()}</p>

            <div className="footer__social">{renderSocials()}</div>

            <p className="footer__copyright">Handcrafted by yours truly 😎 &copy; {currentYear}</p>
        </footer>
    );
};

export default Footer;
