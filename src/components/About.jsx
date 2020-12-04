import React from 'react';

import Design from '../img/computer.svg';
import Desktop from '../img/desktop.svg';
import WebApp from '../img/development.svg';

const About = () => {
    const description =
        "I'm a full stack web developer with a 3-year work experience developing web applications; and building native applications. I currently work on a native app that is called Way-It. I am well-adept to developing for formal and non-formal settings.";

    const renderBreakdowns = () => {
        const breakdowns = [
            {
                img: Design,
                title: 'Frontend dev / design',
                description:
                    'I love to work actively on a the app portion of a software development lifecycle from designing to frontend development.',
                subTitle: 'Things I love designing',
                subDesc: 'Websites, Mobile Apps',
                listTitle: 'Design Tools + Languages',
                list: [
                    'ReactJS',
                    'React Native',
                    'Vanilla JS',
                    'HTML5',
                    'CSS3',
                    'JQuery',
                    'Gatsbyjs',
                    'MeteorJS',
                    'Adobe XD',
                    'Figma'
                ]
            },
            {
                img: WebApp,
                title: 'Backend development',
                description:
                    'I also love to get down to the dirty stuff and build APIs; websocket servers; microservice architectures; and generally full-fledged backend apps.',
                subTitle: 'Things I love building',
                subDesc: 'Web applications, APIs',
                listTitle: 'Dev tools + languages',
                list: [
                    'NodeJS',
                    'Javascript',
                    'JSON',
                    'Express',
                    'NestJS',
                    'Typescript',
                    'Database management',
                    'MySQL',
                    'MongoDB',
                    'Google Cloud Platform',
                    'Microsoft Azure'
                ]
            },
            {
                img: Desktop,
                title: 'Other',
                description: 'I have experience using different tools',
                subTitle: 'Types I love developing',
                subDesc: 'Webapps, Websites, Native Apps',
                listTitle: 'Development tools',
                list: ['Git', 'Github', 'Wordpress', 'Docker', 'Vscode']
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
                <h2 className="about__title">Hello, I&apos;m Timo. Nice to meet you.</h2>

                <p className="about__text">{description}</p>

                <a href="/CV_Timo_van_Balen.pdf" download="" className="about__cv">
                    Download my CV &nbsp;
                    <i className="ti-file"/>
                </a>
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);
