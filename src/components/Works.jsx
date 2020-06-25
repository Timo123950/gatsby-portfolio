import React from 'react';

import Dice from '../img/dice.png';
import Pokedex from '../img/pokedex.png';
// eslint-disable-next-line import/no-unresolved
import Floaty from '../img/floaty.png';

import Work from './Work';

const Works = () => {
    const renderWorks = () => {
        const works = [
            {
                img: Pokedex,
                name: 'Pokemon Pokedex Losing and Winning',
                description: 'Pokedex',
                links: [
                    { url: 'https://nostalgic-newton-5577ea.netlify.app', icon: 'ti-world' },
                ]
            },
            {
                img: Dice,
                name: 'A Game so you can get random dices',
                description: 'A Game so you can get random dices',
                links: [{ url: 'https://gifted-carson-87cc34.netlify.app/', icon: 'ti-world' }]
            },
            {
                img: Floaty,
                name: 'Floaty App for Windows and Linux',
                description:
                    'Floaty opens any website or media in a small floating window that remains on top of all other applications. Floaty windows stays up all the time. No need to keep struggling with alt + tab, use Floaty for easy multitasking.',
                links: [{ url: 'https://www.github.com/Timo123950/floaty', icon: 'ti-desktop' }]
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
                <a href="mailto:kenneth.cross95@gmail.com" className="works__subtext-email">
                    Email me
                </a>
            </p>

            <div className="works__container grid grid--padded">{renderWorks()}</div>
        </div>
    );
};

export default React.memo(Works);
