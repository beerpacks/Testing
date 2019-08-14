module.exports = {
    // propsParser: require('react-docgen-typescript').parse,
    // webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),

    configureServer(app) {
        // `app` is the instance of the express server running Styleguidist
        app.get('/custom-endpoint', (req, res) => {
            res.status(200).send({
                response: 'Server invoked'
            })
        })
    }
}