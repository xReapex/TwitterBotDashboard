const { app, open } = require('../../server')

async function launch() {
    await open(`http://localhost:${process.env.EXPRESS_PORT}`, { wait: true });

    // run server 
    app.listen(process.env.EXPRESS_PORT, function () {
        console.log(`Serveur running on port ${process.env.EXPRESS_PORT}`);
    })
}

exports.launch = launch();