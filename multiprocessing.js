const os = require('os');
const http = require('http');
const cluster = require('cluster');
const port = 4000;

function init() {
    if (cluster.isMaster) {
        let numCPUs = os.cpus().length;
        console.log("Num of CPU:", numCPUs);

        for (let idx = 0; idx < numCPUs; idx++) {
            let worker = cluster.fork();
            worker.on('message', function (msg) {
                console.log(
                    `Worker ${msg.worker} (PID ${msg.pid}) served a ${msg.cmd}`
                );
                worker.send("Good work!");
            });
        }
    } else {
        startHttpServer();
    }
}

function startHttpServer() {
    process.on('message', function (msg) {
        console.log("Master says:", msg);
    });

    const httpsServer = http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("Hello Viewer!");
        process.send({
            worker: cluster.worker.id,
            pid: process.pid,
            cmd: 'request'
        });
    });

    httpsServer.listen(port, () => {
        console.log(
            `Worker ${cluster.worker.id} (PID ${process.pid}) listening on port ${port}`
        );
    });
}

init();
