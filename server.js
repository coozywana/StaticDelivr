const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));
//Get
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/become-a-sponsor', (req, res) => {
  res.sendFile(__dirname + '/views/become-a-sponsor.html');
});
app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/views/blog.html');
});
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});
app.get('/contribute', (req, res) => {
  res.sendFile(__dirname + '/views/contribute.html');
});
app.get('/documentation', (req, res) => {
  res.sendFile(__dirname + '/views/documentation.html');
});
app.get('/github', (req, res) => {
  res.sendFile(__dirname + '/views/github.html');
});
app.get('/network', (req, res) => {
  res.sendFile(__dirname + '/views/network.html');
});
app.get('/newsletter', (req, res) => {
  res.sendFile(__dirname + '/views/newsletter.html');
});
app.get('/purge', (req, res) => {
  res.sendFile(__dirname + '/views/purge.html');
});
app.get('/sponsors', (req, res) => {
  res.sendFile(__dirname + '/views/sponsors.html');
});
app.get('/stats', (req, res) => {
  res.sendFile(__dirname + '/views/stats.html');
});
//Port
app.listen(port, () => {
  console.log(`StaticDelivr homepage is running at http://localhost:${port}`);
});
