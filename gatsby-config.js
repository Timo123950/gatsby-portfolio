module.exports = {
    // Autoload the site metadata.
    siteMetadata: {
        title: 'Timo van Balen | Full Stack Web Developer',
        description:
            'Web full stack developer; designer; currently based in Rotterdam, Netherlands.',
        author: 'Timo van Balen',
        image: '/favicon.jpg',
        social: {
            twitter: '@TimoBalen'
        }
    },

    // Gatsby plugins
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/img`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Timo van Balen',
                short_name: 'TVB',
                start_url: '/',
                background_color: '#FFFFFF',
                theme_color: '#FFFFFF',
                display: 'minimal-ui',
                icon: 'src/img/logo-logo.svg' // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-138977349-1',
                head: false
            }
        }
    ]
};
