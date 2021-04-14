const { app, open, colors } = require("../../server");

async function launch() {
    //await open(`http://localhost:${process.env.EXPRESS_PORT}`, { wait: true });

    // run server 
    app.listen(process.env.EXPRESS_PORT, function () {
        console.log("Server".bgCyan, `Server running on port ${process.env.EXPRESS_PORT}`);
        console.log("Server".bgCyan, "Access dashboard :", `http://localhost:${process.env.EXPRESS_PORT}`.grey)
        console.log("Dashboard".bgGreen, "Dashboard ready to use")
    });
};

exports.launch = launch();