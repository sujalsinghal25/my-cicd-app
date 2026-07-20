const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from DevOps Engineer! - Automated Deployment v6');
});

app.get('/status', (req, res) => {
  res.json({ 
    status: 'running', 
    version: '1.0.0', 
    server: 'AWS EC2',
    pipeline: 'Jenkins CI/CD'
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    health: 'ok', 
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/info', (req, res) => {
  res.json({
    app: 'My CI/CD App',
    developer: 'Sujal Singhal',
    tech: ['Node.js', 'Jenkins', 'AWS EC2', 'Nginx', 'Docker'],
    github: 'https://github.com/sujalsinghal25/my-cicd-app'
  });
});

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

module.exports = server;