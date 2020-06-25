import React from 'react';

import Design from '../img/computer.svg';
import Desktop from '../img/desktop.svg';
import WebApp from '../img/development.svg';

const About = () => {
    const description =
        "I'm a full stack web developer 💪🏽 with a 3-year work experience developing web applications; and building desktop applications. I currently work at a multi purpose dashboard. I am well-adept to developing for formal and non-formal settings.";

    const renderBreakdowns = () => {
        const breakdowns = [
            {
                img: Design,
                title: 'Frontend dev / design',
                description:
                    'I love to work actively on a the app portion of a software development lifecycle from designing to frontend development.',
                subTitle: 'Things I love designing',
                subDesc: 'Websites',
                listTitle: 'Design Tools + Languages',
                list: [
                    'ReactJS',
                    'Vanilla JS',
                    'Adobe Photoshop',
                    'Adobe XD',
                    'Figma',
                    'Gatsbyjs',
                    'MeteorJS'
                ]
            },
            {
                img: WebApp,
                title: 'Backend development',
                description:
                    'I also love to get down to the dirty stuff and build APIs; websocket servers; microservice architectures; and generally full-fledged backend apps.',
                subTitle: 'Things I love building',
                subDesc: 'Web applications, APIs, DevOps',
                listTitle: 'Dev tools + languages',
                list: [
                    'NodeJS',
                    'PHP',
                    'Python',
                    'Google Cloud Platform',
                    'Microsoft Azure',
                    'Digital ocean',
                    'Amazon Web Services',
                    'Database management',
                    'Heroku'
                ]
            },
            {
                img: Desktop,
                title: 'Desktop app development',
                description:
                    'I have experience developing not just Native applications but also (depending on the job) develop hybrid applications, fit for both Linux, Windows and Mac.',
                subTitle: 'Types I love developing',
                subDesc: 'Windows, Linux, Hybrid apps',
                listTitle: 'Development tools',
                list: ['Electron', 'Electron with React', 'Meteor Desktop']
            }
        ];

        return breakdowns.map(breakdown => (
            <div className="about__breakdown col" key={breakdown.title.toLowerCase()}>
                <img src={breakdown.img} alt={breakdown.title} className="about__breakdown-img" />

                <h3 className="about__breakdown-title">{breakdown.title}</h3>
                <p className="about__breakdown-desc">{breakdown.description}</p>

                <p className="about__breakdown-subtitle">{breakdown.subTitle}</p>
                <p className="about__breakdown-subdesc">{breakdown.subDesc}</p>

                <p className="about__breakdown-subtitle">{breakdown.listTitle}</p>
                <ul className="about__breakdown-list">
                    {breakdown.list.map(elem => (
                        <li key={elem} className="about__breakdown-elem">
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="about">
            <div className="about__inner">
                <h2 className="about__title">Hello, I&apos;m Timo. Nice to meet you 👋🏼</h2>

                <p className="about__text">{description}</p>

                <a href="/CV Timo van Balen.pdf" download="" className="about__cv">
                    Download my CV &nbsp;
                    <i className="ti-file" />
                </a>
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);
