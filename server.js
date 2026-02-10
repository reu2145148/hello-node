const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({ ok: true, time: new Date().toISOString() }));
  }

  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello Node!\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
