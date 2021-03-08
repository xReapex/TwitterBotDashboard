const { app, open, colors } = require('../../server')

async function launch() {
    //await open(`http://localhost:${process.env.EXPRESS_PORT}`, { wait: true });

    // run server 
    app.listen(process.env.EXPRESS_PORT, function () {
        console.log(`[Dashboard]`.green, `Server running on port ${process.env.EXPRESS_PORT}`);
        console.log(`[Dashboard]`.green, `Open your dashboard here :`, `http://localhost:${process.env.EXPRESS_PORT}`.grey )
    })
}

exports.launch = launch();