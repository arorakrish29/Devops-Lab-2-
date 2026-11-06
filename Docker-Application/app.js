const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>DevOps Docker Lab</title>
            </head>
            <body>
                <h1>Hello from Docker!</h1>
                <p>My Node.js application is running inside a Docker container.</p>
            </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});