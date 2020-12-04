import React from 'react';

import WayIt from '../img/Map-Homescreen.png';
import Calculator from '../img/Calculator.png';
// eslint-disable-next-line import/no-unresolved
import Floaty from '../img/floaty.png';

import Work from './Work';

const Works = () => {
    const renderWorks = () => {
        const works = [
            {
                img: Calculator,
                name: 'React Native - Calculator - IOS design',
                description: 'A React Native Calculator build by the design of the ios calculator',
                links: [{ url: 'https://github.com/Timo123950/Calculator', icon: 'ti-mobile' }]
            },
            {
                img: WayIt,
                name: 'An Walking app for Android and IOS',
                description: 'A Waling app where you can walk routes.',
                links: [{ url: 'https://github.com/WayItDev/Way-It', icon: 'ti-mobile' }]
            },
            {
                img: Floaty,
                name: 'Floaty App for Windows and Linux',
                description:
                    'Floaty opens any website or media in a small floating window that remains on top of all other applications. Floaty windows stays up all the time. No need to keep struggling with alt + tab, use Floaty for easy multitasking.',
                links: [{url: 'https://www.github.com/Timo123950/floaty', icon: 'ti-desktop'}]
            }
        ];

        return works.map((work, index) => <Work key={`work-${index}`} {...work} />);
    };

    return (
        <div className="works">
            <h2 className="works__title">Recent works</h2>
            <p className="works__subtext">
                Actions speak louder than words. Here are a few of the stuff I&apos;ve built. Others
                were confidential. For more details{' '}
                <a href="mailto:tvanbalent@gmail.com" className="works__subtext-email">
                    Email me
                </a>
            </p>

            <div className="works__container grid grid--padded">{renderWorks()}</div>
        </div>
    );
};

export default React.memo(Works);
